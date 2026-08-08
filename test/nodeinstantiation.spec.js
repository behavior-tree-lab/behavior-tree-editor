// RED contract tests for transactional user-authored node instantiation.
//
// Expected service surface:
//
//   nodeInstantiationService.instantiate(definition, {
//     project, tree, position, parent?, placement?, layout?, gridSize?
//   })
//
// Run with: node test/nodeinstantiation.spec.js
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');
var registry = {factories: {}, values: {}};
var moduleApi = {
  factory: function(name, factory) {
    registry.factories[name] = factory;
    return moduleApi;
  },
  value: function(name, value) {
    registry.values[name] = value;
    return moduleApi;
  }
};
var angular = {module: function() { return moduleApi; }};
var b3e = {project: {}};
var sandbox = {
  angular: angular,
  b3e: b3e,
  console: console,
  window: {}
};
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

function same(actual, expected, message) {
  if (actual !== expected) {
    fail(message + '\n  expected the exact same object identity');
  } else {
    pass(message);
  }
}

function notSame(actual, expected, message) {
  if (actual === expected) {
    fail(message + '\n  expected distinct object identities');
  } else {
    pass(message);
  }
}

function loadSource(relativePath, required) {
  var absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    if (required) fail(relativePath + ' is not implemented');
    return false;
  }
  vm.runInNewContext(fs.readFileSync(absolutePath, 'utf8'), sandbox, {
    filename: relativePath
  });
  return true;
}

function instantiateFactory(name, locals) {
  var factory = registry.factories[name];
  if (!factory) throw new Error('Angular factory not registered: ' + name);
  var dependencies = factory.$inject || [];
  return factory.apply(null, dependencies.map(function(dependency) {
    if (!Object.prototype.hasOwnProperty.call(locals, dependency)) {
      throw new Error('Missing test dependency for ' + name + ': ' + dependency);
    }
    return locals[dependency];
  }));
}

function copy(value) {
  return JSON.parse(JSON.stringify(value));
}

function findById(definitions, id) {
  for (var i=0; i<definitions.length; i++) {
    if (definitions[i].id === id) return definitions[i];
  }
  return null;
}

function removeItem(items, item) {
  var index = items.indexOf(item);
  if (index >= 0) items.splice(index, 1);
}

function blockIds(blocks) {
  return blocks.map(function(block) { return block.id; });
}

function makeBlock(id, category, x, y, properties) {
  return {
    _testBlock: true,
    id: id,
    name: id,
    title: id,
    category: category,
    description: '',
    properties: copy(properties || {}),
    x: x || 0,
    y: y || 0,
    _width: category === 'action' || category === 'tree' ||
      category === 'condition' ? 160 : (category === 'decorator' ? 60 : 40),
    _height: category === 'decorator' ? 60 : 40,
    _inConnection: null,
    _outConnections: [],
    _isSelected: false
  };
}

function rawConnect(parent, child) {
  var connection = {_inBlock: parent, _outBlock: child};
  parent._outConnections.push(connection);
  child._inConnection = connection;
  return connection;
}

function makeHarness(options) {
  options = options || {};
  var layout = options.layout || 'horizontal';
  var gridSize = options.gridSize || 20;
  var prototypes = options.prototypes || [
    {
      name: 'Wait',
      title: 'Wait',
      category: 'action',
      description: 'Wait for a duration',
      properties: {milliseconds: 321, nested: {keep: true}}
    },
    {
      name: 'RpcCall',
      title: 'RPC Call',
      category: 'action',
      description: 'Generic RPC',
      properties: {ordinaryMarker: 'must-not-replace-rpc-skeleton'}
    },
    {
      name: 'ReusableFlow',
      title: 'Reusable Flow',
      category: 'tree',
      description: 'A safe reusable subtree',
      properties: {revision: 1}
    }
  ];
  var prototypeByName = {};
  prototypes.forEach(function(prototype) {
    prototypeByName[prototype.name] = prototype;
  });

  var parent = options.parent || makeBlock('root', 'root', 0, 0);
  var allBlocks = (options.blocks || [parent]).slice();
  var allConnections = [];
  allBlocks.forEach(function(block) {
    block._outConnections.forEach(function(connection) {
      if (allConnections.indexOf(connection) < 0) {
        allConnections.push(connection);
      }
    });
  });
  var selectedBlocks = [parent];
  parent._isSelected = true;
  var nextId = 1;
  var connectionError = null;
  var addSources = [];
  var editor;
  var project;
  var tree;

  function deselectAll() {
    selectedBlocks.forEach(function(block) { block._isSelected = false; });
    selectedBlocks = [];
  }

  function select(block) {
    if (selectedBlocks.indexOf(block) >= 0) return;
    block._isSelected = true;
    selectedBlocks.push(block);
  }

  function blockFrom(source, x, y) {
    if (source && source._testBlock) {
      source.x = x;
      source.y = y;
      return source;
    }
    if (typeof source === 'string') source = prototypeByName[source];
    var prototype = (source && source.prototype) || source;
    if (!prototype) throw new Error('Unknown node prototype');
    var block = makeBlock(
      'created-' + nextId++,
      prototype.category || 'action',
      x,
      y,
      prototype.properties || {});
    block.node = source;
    block.name = prototype.name;
    block.title = prototype.title || prototype.name;
    block.description = prototype.description || '';
    return block;
  }

  var blocksManager = {
    add: function(source, x, y) {
      addSources.push(source);
      var block = blockFrom(source, x || 0, y || 0);
      if (allBlocks.indexOf(block) < 0) allBlocks.push(block);
      deselectAll();
      select(block);
      project.history._add(new b3e.Command(
        [blocksManager, blocksManager.remove, [block]],
        [blocksManager, blocksManager.add, [block, block.x, block.y]]));
      return block;
    },
    update: function(block) {
      var source = block && block.node;
      var prototype = source && (source.prototype || source);
      if (!prototype) return;
      block.name = prototype.name;
      block.title = prototype.title || prototype.name;
      block.category = prototype.category || 'action';
      block.description = prototype.description || '';
      block.properties = copy(prototype.properties || {});
    },
    remove: function(block) {
      removeItem(allBlocks, block);
      removeItem(selectedBlocks, block);
      block._isSelected = false;
      project.history._add(new b3e.Command(
        [blocksManager, blocksManager.add, [block, block.x, block.y]],
        [blocksManager, blocksManager.remove, [block]]));
    },
    getSelected: function() { return selectedBlocks.slice(); },
    getAll: function() { return allBlocks.slice(); }
  };

  var connectionsManager = {
    add: function(inBlock, outBlock, existing) {
      if (connectionError) throw connectionError;
      var connection = existing || {_inBlock: inBlock, _outBlock: outBlock};
      connection._inBlock = inBlock;
      connection._outBlock = outBlock;
      if (inBlock._outConnections.indexOf(connection) < 0) {
        inBlock._outConnections.push(connection);
      }
      outBlock._inConnection = connection;
      if (allConnections.indexOf(connection) < 0) {
        allConnections.push(connection);
      }
      project.history._add(new b3e.Command(
        [connectionsManager, connectionsManager.remove, [connection]],
        [connectionsManager, connectionsManager.add,
          [inBlock, outBlock, connection]]));
      return connection;
    },
    remove: function(connection) {
      var inBlock = connection._inBlock;
      var outBlock = connection._outBlock;
      if (inBlock) removeItem(inBlock._outConnections, connection);
      if (outBlock) outBlock._inConnection = null;
      removeItem(allConnections, connection);
      project.history._add(new b3e.Command(
        [connectionsManager, connectionsManager.add,
          [inBlock, outBlock, connection]],
        [connectionsManager, connectionsManager.remove, [connection]]));
    },
    getAll: function() { return allConnections.slice(); }
  };

  tree = {
    _id: 'current-tree',
    blocks: blocksManager,
    connections: connectionsManager,
    selection: {
      deselectAll: deselectAll,
      select: select
    }
  };
  var reusableTree = {
    _id: 'ReusableFlow',
    blocks: {getAll: function() { return []; }}
  };
  project = {
    _selectedTree: tree,
    nodes: {
      each: function(callback) { prototypes.forEach(callback); },
      get: function(name) { return prototypeByName[name] || null; }
    },
    trees: {
      getSelected: function() { return project._selectedTree; },
      select: function(nextTree) { project._selectedTree = nextTree; },
      each: function(callback) {
        callback(tree);
        callback(reusableTree);
      }
    }
  };
  editor = {
    _dirty: 0,
    _settings: {
      get: function(name) {
        if (name === 'max_history') return 100;
        if (name === 'layout') return layout;
        if (name === 'snap_x' || name === 'snap_y') return gridSize;
        if (name === 'block_root_width' ||
            name === 'block_composite_width') return 40;
        if (name === 'block_decorator_width') return 60;
        if (name === 'block_action_width' ||
            name === 'block_condition_width' ||
            name === 'block_tree_width') return 160;
        if (name === 'block_decorator_height') return 60;
        if (name.indexOf('block_') === 0 &&
            name.indexOf('_height') > 0) return 40;
        return undefined;
      }
    },
    project: {get: function() { return project; }}
  };
  project._editor = editor;
  project.history = new b3e.project.HistoryManager(editor, project);

  return {
    editor: editor,
    project: project,
    tree: tree,
    parent: parent,
    addSources: addSources,
    definitions: function(resolver) { return resolver.resolve(project); },
    propagateDefinition: function(name, template) {
      var node = project.nodes.get(name);
      Object.keys(template || {}).forEach(function(key) {
        node[key] = copy(template[key]);
      });
      project.trees.each(function(candidateTree) {
        candidateTree.blocks.getAll().forEach(function(block) {
          if (block.name === name && candidateTree.blocks.update) {
            candidateTree.blocks.update(block);
          }
        });
      });
    },
    setConnectionError: function(error) { connectionError = error; }
  };
}

function contextFor(harness, overrides) {
  var context = {
    project: harness.project,
    tree: harness.tree,
    position: {x: 120, y: 240},
    layout: 'horizontal',
    gridSize: 20
  };
  overrides = overrides || {};
  Object.keys(overrides).forEach(function(key) {
    context[key] = overrides[key];
  });
  return context;
}

loadSource('src/editor/utils/Command.js', true);
loadSource('src/editor/project/managers/HistoryManager.js', true);
loadSource('src/editor/utils/ConnectionPolicy.js', true);
loadSource('src/app/services/protocolcatalog.data.js', true);
loadSource('src/app/services/protocolcatalog.service.js', true);
loadSource('src/app/services/nodedefinitionresolver.service.js', true);
loadSource('src/app/services/nodeinstantiation.service.js', true);

var $q = {
  when: function(value) {
    return {then: function(callback) { callback(value); return this; }};
  }
};
var protocolCatalogService;
var resolver;
var service;
var windowStub = {editor: null, b3e: b3e};

try {
  protocolCatalogService = instantiateFactory('protocolCatalogService', {
    $q: $q,
    protocolCatalogData: registry.values.protocolCatalogData
  });
  protocolCatalogService.loadCatalog();
  resolver = instantiateFactory('nodeDefinitionResolver', {
    $q: $q,
    protocolCatalogService: protocolCatalogService,
    schemaService: {
      loadSchema: function() { return $q.when({nodes: {}}); },
      getNodeSchema: function() { return null; }
    }
  });
} catch (resolverError) {
  fail('resolver dependency could not be constructed: ' + resolverError.message);
}

if (registry.factories.nodeInstantiationService && resolver) {
  try {
    service = instantiateFactory('nodeInstantiationService', {
      $q: $q,
      $window: windowStub,
      nodeDefinitionResolver: resolver,
      protocolCatalogService: protocolCatalogService,
      connectionPolicy: b3e.ConnectionPolicy
    });
  } catch (serviceError) {
    fail('nodeInstantiationService could not be constructed: ' + serviceError.message);
  }
} else if (!registry.factories.nodeInstantiationService) {
  fail('Angular factory nodeInstantiationService is not implemented');
}

if (service && typeof service.instantiate !== 'function') {
  fail('nodeInstantiationService.instantiate is not implemented');
  service = null;
}

if (service) {
  (function rpcSkeletonIsPersistedVerbatim() {
    var h = makeHarness();
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'rpc/MailOp');
    var result = service.instantiate(definition, contextFor(h));
    var block = result && result.block;
    var canonical = h.project.nodes.get('RpcCall');

    equal(result.status, 'created', 'supported MailOp is instantiated');
    truthy(block, 'MailOp instantiation returns its created block');
    equal(block && block.name, 'RpcCall',
      'MailOp persists as the generic RpcCall node');
    notSame(h.addSources[0], canonical,
      'MailOp passes a detached virtual-node skeleton to blocks.add');
    notSame(block && block.node, canonical,
      'MailOp block does not bind to the ordinary RpcCall prototype');
    equal(block && block.properties, {
      rpc: 'MailOp',
      catalogFingerprint: protocolCatalogService.getFingerprint(),
      request: {},
      assertions: [],
      extract: []
    }, 'MailOp writes fingerprint and fresh empty request rules');
  }());

  (function ordinaryDefinitionClonesCurrentProjectPrototype() {
    var h = makeHarness();
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'node/Wait');
    var result = service.instantiate(definition, contextFor(h));
    var canonical = h.project.nodes.get('Wait');

    same(h.addSources[0], canonical,
      'ordinary creation passes the canonical project node to blocks.add');
    same(result.block.node, canonical,
      'ordinary block retains canonical project-node identity');

    equal(result.block.properties,
      {milliseconds: 321, nested: {keep: true}},
      'ordinary creation uses the current project prototype properties');
    result.block.properties.nested.keep = false;
    equal(canonical.properties.nested.keep, true,
      'created ordinary properties do not mutate the project prototype');

    h.propagateDefinition('Wait', {
      title: 'Wait (updated)',
      description: 'Updated canonical Wait definition',
      properties: {milliseconds: 654, nested: {keep: true}}
    });
    equal({
      title: result.block.title,
      description: result.block.description,
      properties: result.block.properties
    }, {
      title: 'Wait (updated)',
      description: 'Updated canonical Wait definition',
      properties: {milliseconds: 654, nested: {keep: true}}
    }, 'ordinary block receives later canonical definition propagation');
  }());

  (function subtreeDefinitionRetainsCanonicalProjectPrototype() {
    var h = makeHarness();
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'tree/ReusableFlow');
    var canonical = h.project.nodes.get('ReusableFlow');
    var result = service.instantiate(definition, contextFor(h));

    truthy(definition, 'safe reusable subtree is available for creation');
    same(h.addSources[0], canonical,
      'subtree creation passes the canonical tree node to blocks.add');
    same(result.block.node, canonical,
      'subtree block retains canonical tree-node identity');

    h.propagateDefinition('ReusableFlow', {
      title: 'Reusable Flow v2',
      description: 'Updated reusable subtree definition',
      properties: {revision: 2}
    });
    equal({
      title: result.block.title,
      description: result.block.description,
      properties: result.block.properties
    }, {
      title: 'Reusable Flow v2',
      description: 'Updated reusable subtree definition',
      properties: {revision: 2}
    }, 'subtree block receives later canonical definition propagation');
  }());

  (function emptyRootCreatesConnectsAndSelectsInOneTransaction() {
    var root = makeBlock('root', 'root', 0, 0);
    var h = makeHarness({parent: root, blocks: [root]});
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'node/Wait');
    var result = service.instantiate(definition, contextFor(h, {parent: root}));
    var block = result.block;

    equal(result.status, 'created', 'empty Root creation succeeds');
    equal(result.connected, true, 'empty Root creation reports connected');
    truthy(block._inConnection && block._inConnection._inBlock === root,
      'new node is connected below the empty Root');
    equal(blockIds(h.tree.blocks.getSelected()), [block.id],
      'new Root child is selected');
    equal(h.editor._dirty, 1,
      'node, edge, and selection commit as one history transaction');

    h.project.history.undo();
    equal(blockIds(h.tree.blocks.getAll()), [root.id],
      'one Undo removes the created Root child');
    equal(root._outConnections.length, 0,
      'the same Undo removes the contextual edge');
    equal(blockIds(h.tree.blocks.getSelected()), [root.id],
      'Undo restores the selection before creation');
    equal(h.project.history.canUndo(), false,
      'Root creation produced exactly one history entry');

    h.project.history.redo();
    truthy(h.tree.blocks.getAll().indexOf(block) >= 0,
      'one Redo restores the created Root child');
    truthy(block._inConnection && block._inConnection._inBlock === root,
      'the same Redo restores the contextual edge');
    equal(blockIds(h.tree.blocks.getSelected()), [block.id],
      'Redo restores the post-creation selection');
  }());

  (function emptyCompositeAutoConnectsInOneTransaction() {
    var composite = makeBlock('sequence', 'composite', 10, 10);
    var h = makeHarness({parent: composite, blocks: [composite]});
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'node/Wait');
    var result = service.instantiate(
      definition, contextFor(h, {parent: composite}));

    equal(result.connected, true, 'empty Composite auto-connects its new child');
    equal(composite._outConnections.length, 1,
      'empty Composite receives exactly one edge');
    equal({x: result.block.x, y: result.block.y}, {x: 140, y: 10},
      'empty Composite child is offset beyond the parent bounds');
    equal(blockIds(h.tree.blocks.getSelected()), [result.block.id],
      'new Composite child is selected');
    equal(h.editor._dirty, 1,
      'Composite node and edge use one transaction');
    h.project.history.undo();
    equal(blockIds(h.tree.blocks.getAll()), [composite.id],
      'one Undo removes Composite node and edge');
  }());

  (function orderedParentRequiresExplicitPlacementBeforeMutation() {
    var composite = makeBlock('sequence', 'composite', 0, 0);
    var existing = makeBlock('existing', 'action', 100, 40);
    rawConnect(composite, existing);
    var h = makeHarness({parent: composite, blocks: [composite, existing]});
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'node/Wait');
    var beforeBlocks = blockIds(h.tree.blocks.getAll());
    var result = service.instantiate(
      definition, contextFor(h, {parent: composite}));

    equal(result.status, 'placement-required',
      'ordered parent without a choice requests placement');
    equal(blockIds(h.tree.blocks.getAll()), beforeBlocks,
      'placement-required does not create an unconnected node');
    equal(composite._outConnections.length, 1,
      'placement-required does not guess a connection');
    equal(blockIds(h.tree.blocks.getSelected()), [composite.id],
      'placement-required preserves selection');
    equal(h.editor._dirty, 0,
      'placement-required creates no history entry');
  }());

  (function explicitAppendUsesPolicyPositionAndExportedOrder() {
    var composite = makeBlock('sequence', 'composite', 0, 0);
    var first = makeBlock('first', 'action', 300, 35);
    var last = makeBlock('last', 'action', 500, 100);
    rawConnect(composite, first);
    rawConnect(composite, last);
    var h = makeHarness({
      parent: composite,
      blocks: [composite, first, last],
      layout: 'horizontal',
      gridSize: 20
    });
    windowStub.editor = h.editor;
    var definition = findById(h.definitions(resolver), 'node/Wait');
    var result = service.instantiate(definition, contextFor(h, {
      parent: composite,
      placement: 'append',
      position: {x: 999, y: -999},
      layout: 'horizontal',
      gridSize: 20
    }));

    equal(result.status, 'created', 'explicit Append creates the node');
    equal(result.connected, true, 'explicit Append connects the node');
    equal({x: result.block.x, y: result.block.y}, {x: 500, y: 160},
      'Append clears the last child bounds and uses a snapped position');
    equal(blockIds(b3e.ConnectionPolicy.getOrderedChildren(
      composite, 'horizontal')),
      [first.id, last.id, result.block.id],
      'Append preserves policy/exported child order');
    equal(h.editor._dirty, 1,
      'Append node and edge commit as one transaction');
  }());

  (function unsupportedDefinitionDoesNotMutateAnything() {
    var h = makeHarness();
    windowStub.editor = h.editor;
    var definitions = h.definitions(resolver);
    var definition = null;
    for (var i=0; i<definitions.length; i++) {
      if (definitions[i].kind === 'rpc' && !definitions[i].enabled) {
        definition = definitions[i];
        break;
      }
    }
    var beforeBlocks = blockIds(h.tree.blocks.getAll());
    var rejected = false;
    try {
      var result = service.instantiate(definition, contextFor(h));
      rejected = !!result && result.status === 'unsupported';
    } catch (unsupportedError) {
      rejected = true;
    }

    truthy(definition, 'catalog exposes an unsupported RPC fixture');
    truthy(rejected, 'unsupported definition is rejected before mutation');
    equal(blockIds(h.tree.blocks.getAll()), beforeBlocks,
      'unsupported definition creates no block');
    equal(blockIds(h.tree.blocks.getSelected()), [h.parent.id],
      'unsupported definition preserves selection');
    equal(h.editor._dirty, 0,
      'unsupported definition creates no history entry');
  }());

  (function connectionFailureRollsBackTheWholeCreation() {
    var root = makeBlock('root', 'root', 0, 0);
    var h = makeHarness({parent: root, blocks: [root]});
    windowStub.editor = h.editor;
    h.setConnectionError(new Error('connection failed after block creation'));
    var definition = findById(h.definitions(resolver), 'node/Wait');
    var surfaced = false;
    try {
      var result = service.instantiate(
        definition, contextFor(h, {parent: root}));
      surfaced = !!result && result.status === 'error';
    } catch (connectionError) {
      surfaced = true;
    }

    truthy(surfaced, 'connection failure is surfaced to the caller');
    equal(blockIds(h.tree.blocks.getAll()), [root.id],
      'connection failure rolls back the newly created block');
    equal(root._outConnections.length, 0,
      'connection failure leaves no partial edge');
    equal(blockIds(h.tree.blocks.getSelected()), [root.id],
      'connection failure restores the previous selection');
    equal(h.editor._dirty, 0,
      'connection failure restores dirty state');
    equal(h.project.history.canUndo(), false,
      'connection failure commits no partial history entry');
  }());
}

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed (expected RED).');
  process.exit(1);
}

console.log('\nAll node instantiation contract tests passed.');
