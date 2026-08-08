// RED headless contract tests for the visible Quick Add state machine.
//
// Minimal Angular surface:
//   quickAddService: state, open, close, setQuery, moveActive, activate,
//                    choosePlacement
//   QuickAddController: state, setQuery, keydown, activate, choosePlacement,
//                       close
//   b3QuickAddCanvas: native canvas Space/contextmenu adapter
//
// Run with: node test/quickadd.spec.js
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');
var registry = {factories: {}, controllers: {}, directives: {}};
var moduleApi = {
  factory: function(name, factory) {
    registry.factories[name] = factory;
    return moduleApi;
  },
  controller: function(name, controller) {
    registry.controllers[name] = controller;
    return moduleApi;
  },
  directive: function(name, directive) {
    registry.directives[name] = directive;
    return moduleApi;
  },
  value: function() { return moduleApi; }
};
var angular = {
  module: function() { return moduleApi; },
  element: function(value) { return value; }
};
var sandbox = {angular: angular, console: console, window: {}};
var failures = 0;

function fail(message) {
  failures++;
  console.error('FAIL: ' + message);
}

function pass(message) {
  console.log('ok: ' + message);
}

function equal(actual, expected, message) {
  var left = JSON.stringify(actual);
  var right = JSON.stringify(expected);
  if (left !== right) {
    fail(message + '\n  expected ' + right + '\n  got      ' + left);
  } else {
    pass(message);
  }
}

function truthy(value, message) {
  equal(!!value, true, message);
}

function loadSource(relativePath) {
  var absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail(relativePath + ' is not implemented');
    return false;
  }
  vm.runInNewContext(fs.readFileSync(absolutePath, 'utf8'), sandbox, {
    filename: relativePath
  });
  return true;
}

function invokeAnnotated(fn, thisarg, locals, label) {
  var dependencies = fn.$inject || [];
  return fn.apply(thisarg, dependencies.map(function(dependency) {
    if (!Object.prototype.hasOwnProperty.call(locals, dependency)) {
      throw new Error('Missing test dependency for ' + label + ': ' + dependency);
    }
    return locals[dependency];
  }));
}

function keyEvent(key, extras) {
  var event = {
    key: key,
    code: key === ' ' ? 'Space' : key,
    repeat: false,
    isComposing: false,
    defaultPrevented: false,
    preventDefault: function() { event.defaultPrevented = true; },
    stopPropagation: function() {}
  };
  Object.keys(extras || {}).forEach(function(name) {
    event[name] = extras[name];
  });
  return event;
}

function definitionsFixture() {
  return [
    {
      id: 'node/Root',
      kind: 'node',
      name: 'Root',
      title: 'Root',
      category: 'root',
      enabled: true,
      searchTerms: ['Root']
    },
    {
      id: 'node/Wait',
      kind: 'node',
      name: 'Wait',
      title: 'Wait',
      category: 'action',
      enabled: true,
      searchTerms: ['Wait', 'action']
    },
    {
      id: 'rpc/MailOp',
      kind: 'rpc',
      name: 'RpcCall',
      title: 'MailOp',
      category: 'action',
      enabled: true,
      searchTerms: ['MailOp', 'RpcCall', 'rpc']
    },
    {
      id: 'rpc/Unsupported',
      kind: 'rpc',
      name: 'RpcCall',
      title: 'Unsupported',
      category: 'action',
      enabled: false,
      disabledReason: 'request.payload uses unsupported bytes',
      searchTerms: ['Unsupported', 'rpc']
    }
  ];
}

function makeResolver() {
  var resolver = {
    resolvedProjects: [],
    searches: [],
    resolve: function(project) {
      resolver.resolvedProjects.push(project);
      return definitionsFixture();
    },
    search: function(definitions, query) {
      resolver.searches.push(query);
      var needle = String(query || '').toLowerCase();
      return definitions.filter(function(definition) {
        return (definition.searchTerms || []).some(function(term) {
          return String(term).toLowerCase().indexOf(needle) >= 0;
        });
      });
    }
  };
  return resolver;
}

function makeContext() {
  var selected = [];
  var tree = {
    blocks: {
      getSelected: function() { return selected.slice(); }
    },
    selection: {
      deselectAll: function() { selected = []; },
      select: function(block) { selected = [block]; }
    }
  };
  var project = {id: 'project-1'};
  return {
    project: project,
    tree: tree,
    position: {x: 100, y: 200},
    parent: {id: 'parent-1', category: 'root'},
    selectedIds: function() {
      return selected.map(function(block) { return block.id; });
    }
  };
}

function makeInstantiation() {
  var service = {
    calls: [],
    onInstantiate: null,
    responder: null,
    instantiate: function(definition, context) {
      service.calls.push({definition: definition, context: context});
      if (service.onInstantiate) service.onInstantiate();
      if (service.responder) return service.responder(definition, context);
      var block = {id: 'created-' + service.calls.length, name: definition.name};
      context.tree.selection.deselectAll();
      context.tree.selection.select(block);
      return {status: 'created', block: block, connected: true};
    }
  };
  return service;
}

function makeScope() {
  var destroy = null;
  var watchers = [];
  var scope = {
    evalAsyncCount: 0,
    $evalAsync: function(callback) {
      scope.evalAsyncCount++;
      callback();
    },
    $on: function(name, callback) {
      if (name === '$destroy') destroy = callback;
    },
    $watch: function(expression, listener) {
      var watcher = {
        expression: expression,
        listener: listener,
        initialized: false,
        value: undefined
      };
      watchers.push(watcher);
      return function() {
        var index = watchers.indexOf(watcher);
        if (index >= 0) watchers.splice(index, 1);
      };
    },
    digest: function() {
      watchers.slice().forEach(function(watcher) {
        var next;
        if (typeof watcher.expression === 'function') {
          next = watcher.expression();
        } else {
          next = String(watcher.expression || '').split('.').reduce(
            function(value, key) {
              return value && value[key];
            }, scope);
        }
        var previous = watcher.value;
        if (!watcher.initialized || next !== previous) {
          watcher.initialized = true;
          watcher.value = next;
          watcher.listener(next, previous);
        }
      });
    },
    destroy: function() {
      if (destroy) destroy();
    }
  };
  return scope;
}

function makeTimeout() {
  var pending = [];
  function timeout(callback) {
    pending.push(callback);
    return callback;
  }
  timeout.flush = function() {
    var callbacks = pending.slice();
    pending = [];
    callbacks.forEach(function(callback) { callback(); });
  };
  timeout.pending = function() { return pending.length; };
  timeout.cancel = function(callback) {
    var index = pending.indexOf(callback);
    if (index < 0) return false;
    pending.splice(index, 1);
    return true;
  };
  return timeout;
}

function makeControllerElement() {
  var documentStub = {activeElement: null};
  function focusable(name) {
    var element = {
      name: name,
      focusCount: 0,
      focus: function() {
        element.focusCount++;
        documentStub.activeElement = element;
      }
    };
    return element;
  }
  var search = {
    name: 'search',
    focusCount: 0,
    focus: function() {
      search.focusCount++;
      documentStub.activeElement = search;
    }
  };
  var closeButton = focusable('close');
  var placementButton = focusable('placement');
  var dialog = {
    querySelectorAll: function() { return [closeButton, search]; }
  };
  var root = {
    ownerDocument: documentStub,
    querySelector: function(selector) {
      if (selector === '.quick-add') return dialog;
      if (selector === '.quick-add-search') return search;
      if (selector === '.quick-add-placement-choice') return placementButton;
      return null;
    }
  };
  return {
    element: {0: root},
    document: documentStub,
    search: search,
    closeButton: closeButton,
    placementButton: placementButton
  };
}

function makeUi() {
  var resolver = makeResolver();
  var instantiation = makeInstantiation();
  var scope = makeScope();
  var timeout = makeTimeout();
  var controllerElement = makeControllerElement();
  var notifications = [];
  var quickAddService;
  var controller;

  try {
    quickAddService = invokeAnnotated(
      registry.factories.quickAddService,
      null,
      {
        nodeDefinitionResolver: resolver,
        nodeInstantiationService: instantiation,
        notificationService: {
          warning: function(title, message) {
            notifications.push({title: title, message: message});
          }
        }
      },
      'quickAddService');
  } catch (error) {
    fail('quickAddService could not be constructed: ' + error.message);
    return null;
  }

  try {
    controller = {};
    invokeAnnotated(
      registry.controllers.QuickAddController,
      controller,
      {
        $scope: scope,
        $timeout: timeout,
        $element: controllerElement.element,
        quickAddService: quickAddService
      },
      'QuickAddController');
    scope.quickadd = controller;
  } catch (error) {
    fail('QuickAddController could not be constructed: ' + error.message);
    return null;
  }

  return {
    resolver: resolver,
    instantiation: instantiation,
    scope: scope,
    timeout: timeout,
    search: controllerElement.search,
    document: controllerElement.document,
    closeButton: controllerElement.closeButton,
    placementButton: controllerElement.placementButton,
    notifications: notifications,
    service: quickAddService,
    controller: controller,
    context: makeContext()
  };
}

function makeElement(canvas) {
  var handlers = {};
  function add(name, handler) { handlers[name] = handler; }
  function remove(name, handler) {
    if (!handler || handlers[name] === handler) delete handlers[name];
  }
  canvas.addEventListener = add;
  canvas.removeEventListener = remove;
  return {
    0: canvas,
    bind: add,
    unbind: remove,
    on: add,
    off: remove,
    trigger: function(name, event) {
      if (handlers[name]) handlers[name](event);
    },
    hasHandler: function(name) { return typeof handlers[name] === 'function'; }
  };
}

var serviceLoaded = loadSource('src/app/services/quickadd.service.js');
var controllerLoaded = loadSource(
  'src/app/pages/editor/components/quickadd.controller.js');
var directiveLoaded = loadSource(
  'src/app/directives/quickaddcanvas.directive.js');

if (serviceLoaded && !registry.factories.quickAddService) {
  fail('Angular factory quickAddService is not registered');
}
if (controllerLoaded && !registry.controllers.QuickAddController) {
  fail('Angular controller QuickAddController is not registered');
}
if (directiveLoaded && !registry.directives.b3QuickAddCanvas) {
  fail('Angular directive b3QuickAddCanvas is not registered');
}

if (registry.factories.quickAddService &&
    registry.controllers.QuickAddController) {
  (function openingFocusesSearchAndClosingRestoresCanvasFocus() {
    var ui = makeUi();
    if (!ui) return;
    var invoker = {
      focusCount: 0,
      focus: function() { invoker.focusCount++; }
    };
    ui.context.invoker = invoker;

    ui.service.open(ui.context);
    ui.scope.digest();
    equal(ui.search.focusCount, 0,
      'opening does not focus before the Quick Add input has rendered');
    equal(ui.timeout.pending(), 1,
      'opening schedules search focus for the post-render turn');

    ui.timeout.flush();
    equal(ui.search.focusCount, 1,
      'post-render focus moves directly into the Quick Add search input');

    ui.controller.close();
    equal(invoker.focusCount, 1,
      'closing Quick Add restores focus to its invoking canvas');
  }());

  (function openSearchAndKeyboardNavigation() {
    var ui = makeUi();
    if (!ui) return;
    var controller = ui.controller;
    var state = ui.service.state;

    truthy(controller.state === state,
      'controller exposes the service state object');
    ui.service.open(ui.context);
    equal(ui.resolver.resolvedProjects, [ui.context.project],
      'open resolves definitions from the current project');
    equal(state.status, 'ready', 'resolved Quick Add enters ready state');
    equal(state.open, true, 'resolved Quick Add is visible');
    equal(state.results.map(function(item) { return item.id; }), [
      'node/Wait', 'rpc/MailOp', 'rpc/Unsupported'
    ], 'Root is excluded while ordinary, RPC, and disabled rows remain visible');
    equal(state.activeIndex, 0, 'first result is initially active');

    controller.setQuery('mail');
    equal(ui.resolver.searches[ui.resolver.searches.length-1], 'mail',
      'query changes delegate to resolver search');
    equal(state.query, 'mail', 'query remains visible in state');
    equal(state.results.map(function(item) { return item.id; }), ['rpc/MailOp'],
      'query filters visible definitions');

    controller.setQuery('');
    var down = keyEvent('ArrowDown');
    controller.keydown(down);
    equal(state.activeIndex, 1, 'ArrowDown moves the active result');
    truthy(down.defaultPrevented, 'handled ArrowDown prevents native scrolling');
    controller.keydown(keyEvent('ArrowUp'));
    equal(state.activeIndex, 0, 'ArrowUp moves the active result');

    controller.setQuery('does-not-exist');
    equal(state.status, 'empty', 'an unmatched query enters filtered-empty state');
    equal(state.results, [], 'filtered-empty state keeps no stale results');

    var escape = keyEvent('Escape');
    controller.dialogKeydown(escape);
    equal(state.status, 'closed', 'Escape closes Quick Add');
    equal(state.open, false, 'Escape hides Quick Add');
    truthy(escape.defaultPrevented, 'handled Escape prevents native behavior');
  }());

  (function disabledAndImeActivationAreNonDestructive() {
    var ui = makeUi();
    if (!ui) return;
    ui.service.open(ui.context);
    ui.controller.setQuery('unsupported');
    ui.controller.keydown(keyEvent('Enter'));

    equal(ui.instantiation.calls.length, 0,
      'Enter on a disabled definition does not instantiate');
    truthy(ui.service.state.message.indexOf('unsupported bytes') >= 0,
      'disabled activation announces the complete reason');
    equal(ui.service.state.open, true,
      'disabled activation keeps Quick Add open');

    ui.controller.setQuery('mail');
    ui.controller.keydown(keyEvent('Enter', {isComposing: true}));
    equal(ui.instantiation.calls.length, 0,
      'IME-composing Enter does not instantiate');
    ui.controller.keydown(keyEvent('Escape', {isComposing: true}));
    equal(ui.service.state.open, true,
      'IME-composing Escape does not close Quick Add');
  }());

  (function pointerActivationUsesTheClickedDefinition() {
    var ui = makeUi();
    if (!ui) return;
    ui.service.open(ui.context);
    var clicked = ui.service.state.results[1];

    ui.controller.activate(clicked);

    equal(ui.instantiation.calls.length, 1,
      'clicking a Quick Add result instantiates exactly once');
    equal(ui.instantiation.calls[0].definition.id, 'rpc/MailOp',
      'pointer activation uses the clicked row rather than the keyboard index');
  }());

  (function creatingLatchRejectsRepeatedActivation() {
    var ui = makeUi();
    if (!ui) return;
    ui.service.open(ui.context);
    ui.controller.setQuery('mail');
    var reentered = false;
    ui.instantiation.onInstantiate = function() {
      if (reentered) return;
      reentered = true;
      equal(ui.service.state.status, 'creating',
        'creation latch is set before mutation starts');
      equal(ui.service.state.creating, true,
        'creating state is observable during instantiation');
      ui.controller.activate();
      ui.controller.keydown(keyEvent('Enter', {repeat: true}));
    };

    ui.controller.keydown(keyEvent('Enter'));
    equal(ui.instantiation.calls.length, 1,
      'repeated Enter/double activation creates at most once');
    equal(ui.service.state.status, 'closed',
      'successful creation closes Quick Add');
    equal(ui.context.selectedIds(), ['created-1'],
      'successful creation leaves the returned block selected');
  }());

  (function placementRequiredKeepsContextAndChoiceCanComplete() {
    var ui = makeUi();
    if (!ui) return;
    var placementChoices = [
      {id: 'append', label: 'Append as step 2'},
      {
        id: 'unconnected',
        label: 'Create unconnected',
        warning: 'Not in execution flow; this node will not run'
      },
      {id: 'cancel', label: 'Cancel'}
    ];
    ui.instantiation.responder = function(definition, context) {
      if (!context.placement) {
        return {status: 'placement-required', choices: placementChoices};
      }
      var block = {id: 'placed-1', name: definition.name};
      context.tree.selection.deselectAll();
      context.tree.selection.select(block);
      return {status: 'created', block: block, connected: true};
    };
    ui.service.open(ui.context);
    ui.controller.setQuery('mail');
    ui.controller.activate();

    equal(ui.service.state.status, 'placement-required',
      'ambiguous creation enters placement-required state');
    equal(ui.service.state.open, true,
      'placement-required keeps the overlay open');
    equal(ui.service.state.choices, placementChoices,
      'placement-required exposes the mutation service choices');
    equal(ui.service.state.placementPrompt,
      'This parent already has ordered steps. Choose placement explicitly.',
      'placement-required explains the actual ordered-child conflict');

    ui.scope.digest();
    ui.timeout.flush();
    equal(ui.placementButton.focusCount, 1,
      'placement-required moves focus to the first placement choice');

    ui.controller.choosePlacement('append');
    equal(ui.instantiation.calls.length, 2,
      'an explicit placement retries the same definition once');
    equal(ui.instantiation.calls[1].context.placement, 'append',
      'placement choice is forwarded to instantiation');
    equal(ui.service.state.status, 'closed',
      'successful explicit placement closes Quick Add');
    equal(ui.context.selectedIds(), ['placed-1'],
      'placed result remains selected after closing');
  }());

  (function dialogEscapeAndTabContainKeyboardFocus() {
    var ui = makeUi();
    if (!ui) return;
    ui.service.open(ui.context);
    ui.scope.digest();
    ui.timeout.flush();

    ui.document.activeElement = ui.search;
    var tab = keyEvent('Tab');
    ui.controller.dialogKeydown(tab);
    truthy(tab.defaultPrevented,
      'Tab from the last dialog control stays inside Quick Add');
    equal(ui.closeButton.focusCount, 1,
      'Tab wraps focus to the first dialog control');

    var escape = keyEvent('Escape');
    ui.controller.dialogKeydown(escape);
    equal(ui.service.state.open, false,
      'Escape from any dialog control closes Quick Add');
  }());

  (function unconnectedCreationKeepsAVisibleWarning() {
    var ui = makeUi();
    if (!ui) return;
    ui.instantiation.responder = function(definition, context) {
      if (!context.placement) {
        return {
          status: 'placement-required',
          reason: 'parent-capacity',
          choices: [{
            id: 'unconnected',
            label: 'Create unconnected',
            warning: 'Not in execution flow; this node will not run'
          }]
        };
      }
      return {
        status: 'created',
        block: {id: 'unconnected'},
        connected: false,
        warning: 'Not in execution flow; this node will not run'
      };
    };

    ui.service.open(ui.context);
    ui.controller.activate();
    equal(ui.service.state.placementPrompt,
      'This parent already has its maximum number of children. Create the node unconnected or cancel.',
      'capacity conflicts get an accurate placement explanation');
    ui.controller.choosePlacement('unconnected');
    equal(ui.notifications, [{
      title: 'Node created outside execution flow',
      message: 'Not in execution flow; this node will not run'
    }], 'unconnected creation persists its execution warning');
  }());
}

if (registry.directives.b3QuickAddCanvas) {
  (function canvasAdapterScopesEventsAndTearsDown() {
    var openCalls = [];
    var quickAddService = {
      open: function(context) { openCalls.push(context); },
      close: function() {}
    };
    var selectedParent = {id: 'selected-parent', x: 20, y: 30};
    var hitParent = {id: 'hit-parent', x: 40, y: 50};
    var pointerHit = hitParent;
    var selectedBlocks = [selectedParent];
    selectedParent._width = 40;
    selectedParent._height = 40;
    hitParent._width = 40;
    hitParent._height = 40;
    var root = {id: 'root', x: 0, y: 0, _width: 40, _height: 40};
    var tree = {
      blocks: {
        getSelected: function() { return selectedBlocks.slice(); },
        getUnderPoint: function() { return pointerHit; },
        getRoot: function() { return root; },
        getAll: function() { return [root, selectedParent, hitParent]; }
      },
      view: {
        getLocalPoint: function(x, y) { return {x: x - 10, y: y - 20}; }
      }
    };
    var project = {trees: {getSelected: function() { return tree; }}};
    var canvas = {tagName: 'CANVAS', focus: function() {}};
    var input = {tagName: 'INPUT', isContentEditable: false};
    var windowStub = {
      document: {activeElement: canvas},
      editor: {
        _game: {canvas: canvas},
        _settings: {
          get: function(name) {
            if (name === 'layout') return 'horizontal';
            if (name === 'snap_x' || name === 'snap_y') return 12;
            if (name === 'block_action_width') return 160;
            if (name === 'block_action_height') return 40;
          }
        },
        project: {get: function() { return project; }}
      }
    };
    var element = makeElement(canvas);
    var scope = makeScope();
    var directive;

    try {
      directive = invokeAnnotated(
        registry.directives.b3QuickAddCanvas,
        null,
        {$window: windowStub, quickAddService: quickAddService},
        'b3QuickAddCanvas');
      directive.link(scope, element, {});
    } catch (error) {
      fail('b3QuickAddCanvas could not be linked: ' + error.message);
      return;
    }

    truthy(element.hasHandler('keydown'), 'canvas adapter binds keydown');
    truthy(element.hasHandler('contextmenu'), 'canvas adapter binds contextmenu');

    var space = keyEvent(' ', {target: canvas});
    element.trigger('keydown', space);
    equal(openCalls.length, 1,
      'Space opens Quick Add only from the focused canvas');
    equal(openCalls[0].parent, selectedParent,
      'keyboard open snapshots the selected contextual parent');
    truthy(space.defaultPrevented, 'canvas Space prevents page scrolling');
    equal(scope.evalAsyncCount, 1,
      'canvas Space enters Angular through $evalAsync');

    windowStub.document.activeElement = input;
    element.trigger('keydown', keyEvent(' ', {target: input}));
    equal(openCalls.length, 1,
      'Space from an input does not open Quick Add');
    windowStub.document.activeElement = canvas;
    element.trigger('keydown', keyEvent(' ', {target: canvas, repeat: true}));
    equal(openCalls.length, 1,
      'repeated canvas Space does not reopen Quick Add');

    var menu = keyEvent('ContextMenu', {
      target: canvas,
      clientX: 70,
      clientY: 90
    });
    element.trigger('contextmenu', menu);
    equal(openCalls.length, 2,
      'canvas contextmenu opens Quick Add');
    equal(openCalls[1].parent, hitParent,
      'contextmenu uses the block under the pointer');
    truthy(openCalls[1].position.x > hitParent.x + hitParent._width/2,
      'contextmenu on a block chooses a non-overlapping contextual position');
    equal(openCalls[1].position.y, hitParent.y,
      'contextual position stays aligned with the hit parent');
    truthy(menu.defaultPrevented,
      'canvas contextmenu suppresses the native menu');
    equal(scope.evalAsyncCount, 2,
      'canvas contextmenu enters Angular through $evalAsync');

    pointerHit = null;
    var blankMenu = keyEvent('ContextMenu', {
      target: canvas,
      clientX: 210,
      clientY: 320
    });
    element.trigger('contextmenu', blankMenu);
    equal(openCalls[2].parent, null,
      'blank-canvas contextmenu never inherits the previous selection');
    equal(openCalls[2].position, {x: 200, y: 300},
      'blank-canvas contextmenu preserves the clicked local point');

    selectedBlocks = [];
    element.trigger('keydown', keyEvent(' ', {target: canvas}));
    truthy(openCalls[3].position.x > hitParent.x,
      'Space without a contextual parent chooses a safe non-origin position');

    var inputMenu = keyEvent('ContextMenu', {
      target: input,
      clientX: 1,
      clientY: 1
    });
    element.trigger('contextmenu', inputMenu);
    equal(openCalls.length, 4,
      'contextmenu from an input is left untouched');
    equal(inputMenu.defaultPrevented, false,
      'non-canvas contextmenu keeps native behavior');

    scope.destroy();
    equal(element.hasHandler('keydown'), false,
      'destroy unbinds the native keydown listener');
    equal(element.hasHandler('contextmenu'), false,
      'destroy unbinds the native contextmenu listener');
    element.trigger('keydown', keyEvent(' ', {target: canvas}));
    equal(openCalls.length, 4,
      'destroyed canvas adapter cannot reopen Quick Add');
  }());
}

(function quickAddTemplateExposesPlacementWarningsAndModalState() {
  var template = fs.readFileSync(path.join(
    ROOT, 'src/app/pages/editor/components/quickadd.html'), 'utf8');
  truthy(template.indexOf('{{choice.warning}}') >= 0,
    'placement choices render their execution-flow warnings');
  truthy(template.indexOf('quick-add-placement-choice') >= 0,
    'placement choices expose a stable focus target');
  truthy(template.indexOf('ng-keydown="quickadd.dialogKeydown($event)"') >= 0,
    'the dialog handles Escape and focus containment from every control');
}());

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed (expected RED).');
  process.exit(1);
}

console.log('\nAll Quick Add state-machine tests passed.');
