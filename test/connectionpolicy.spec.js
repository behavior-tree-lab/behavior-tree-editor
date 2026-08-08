// RED tests for connection legality, placement, and exported child order.
//
// Run with:
//
//   node test/connectionpolicy.spec.js
//
// The suite intentionally fails until src/editor/utils/ConnectionPolicy.js
// provides the pure policy shared by programmatic creation, mouse wiring, and
// ExportManager.
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');
var b3e = {editor: {}};
var sandbox = {b3e: b3e, console: console};
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

function block(id, category, x, y) {
  return {
    id: id,
    name: id,
    title: id,
    description: '',
    category: category,
    properties: {},
    x: x || 0,
    y: y || 0,
    _inConnection: null,
    _outConnections: [],
    _dataConnections: []
  };
}

function connect(parent, child) {
  var connection = {_inBlock: parent, _outBlock: child};
  parent._outConnections.push(connection);
  child._inConnection = connection;
  return connection;
}

function ids(items) {
  return items.map(function(item) { return item.id; });
}

function requireMethod(name) {
  if (!b3e.ConnectionPolicy ||
      typeof b3e.ConnectionPolicy[name] !== 'function') {
    fail('ConnectionPolicy.' + name + ' is not implemented');
    return false;
  }
  return true;
}

function expectRejected(parent, child, reason, message) {
  var result = b3e.ConnectionPolicy.check(parent, child);
  equal(result.allowed, false, message + ' is rejected');
  equal(result.reason, reason, message + ' has a deterministic reason');
}

function makeExportHarness(parent, layout) {
  var root = block('root', 'root', 0, 0);
  var allBlocks = [root, parent];
  connect(root, parent);

  parent._outConnections.forEach(function(connection) {
    allBlocks.push(connection._outBlock);
  });

  var tree = {
    _id: 'tree-1',
    x: 0,
    y: 0,
    scaleX: 1,
    blocks: {
      getRoot: function() { return root; },
      each: function(callback, thisarg) {
        allBlocks.forEach(callback, thisarg);
      }
    }
  };
  var project = {
    trees: {
      getSelected: function() { return tree; },
      get: function(value) { return value; },
      each: function(callback, thisarg) { callback.call(thisarg, tree); }
    },
    nodes: {each: function() {}}
  };
  var editor = {
    _settings: {
      get: function(name) {
        return name === 'layout' ? layout : undefined;
      }
    },
    project: {get: function() { return project; }}
  };

  return {
    manager: new b3e.editor.ExportManager(editor),
    tree: tree
  };
}

var policyPath = path.join(
  ROOT, 'src/editor/utils/ConnectionPolicy.js');
if (fs.existsSync(policyPath)) {
  vm.runInNewContext(fs.readFileSync(policyPath, 'utf8'), sandbox, {
    filename: 'src/editor/utils/ConnectionPolicy.js'
  });
} else {
  fail('src/editor/utils/ConnectionPolicy.js is not implemented');
}

var hasCheck = requireMethod('check');
var hasOrder = requireMethod('getOrderedChildren');
var hasAppend = requireMethod('getAppendPosition');

if (hasCheck) {
  (function rootAndDecoratorCapacity() {
    var emptyRoot = block('empty-root', 'root');
    var emptyDecorator = block('empty-decorator', 'decorator');

    truthy(b3e.ConnectionPolicy.check(
      emptyRoot, block('root-child', 'action')).allowed,
      'an empty Root accepts one child');
    truthy(b3e.ConnectionPolicy.check(
      emptyDecorator, block('decorator-child', 'action')).allowed,
      'an empty Decorator accepts one child');

    connect(emptyRoot, block('existing-root-child', 'action'));
    connect(emptyDecorator, block('existing-decorator-child', 'action'));
    expectRejected(emptyRoot, block('second-root-child', 'action'),
      'parent-capacity', 'a Root with one child');
    expectRejected(emptyDecorator, block('second-decorator-child', 'action'),
      'parent-capacity', 'a Decorator with one child');
  }());

  (function compositeAndParentCategory() {
    var composite = block('sequence', 'composite');
    connect(composite, block('first-step', 'action'));
    truthy(b3e.ConnectionPolicy.check(
      composite, block('second-step', 'action')).allowed,
      'a Composite accepts another child');

    expectRejected(block('leaf', 'action'), block('child', 'action'),
      'parent-category', 'an Action used as a parent');
  }());

  (function targetRootAndExistingParent() {
    expectRejected(block('sequence', 'composite'),
      block('target-root', 'root'), 'target-root',
      'a Root used as a connection target');

    var child = block('already-parented', 'action');
    connect(block('old-parent', 'composite'), child);
    expectRejected(block('new-parent', 'composite'), child,
      'existing-parent', 'a child that already has a parent');
  }());

  (function selfAndCycle() {
    var self = block('self', 'composite');
    expectRejected(self, self, 'self', 'a self connection');

    var ancestor = block('ancestor', 'composite');
    var descendant = block('descendant', 'composite');
    connect(ancestor, descendant);
    expectRejected(descendant, ancestor, 'cycle',
      'a connection from a descendant back to its ancestor');
  }());
}

if (hasOrder) {
  (function horizontalOrderUsesYAndStableConnectionIndex() {
    var parent = block('horizontal-parent', 'composite');
    var equalFirst = block('equal-first', 'action', 900, 40);
    var after = block('after', 'action', -900, 80);
    var equalSecond = block('equal-second', 'action', 0, 40);

    connect(parent, equalFirst);
    connect(parent, after);
    connect(parent, equalSecond);

    equal(ids(b3e.ConnectionPolicy.getOrderedChildren(parent, 'horizontal')),
      ['equal-first', 'equal-second', 'after'],
      'horizontal order uses Y and preserves connection order for equal Y');
  }());

  (function verticalOrderUsesXAndStableConnectionIndex() {
    var parent = block('vertical-parent', 'composite');
    var equalFirst = block('equal-first', 'action', 40, 900);
    var after = block('after', 'action', 80, -900);
    var equalSecond = block('equal-second', 'action', 40, 0);

    connect(parent, equalFirst);
    connect(parent, after);
    connect(parent, equalSecond);

    equal(ids(b3e.ConnectionPolicy.getOrderedChildren(parent, 'vertical')),
      ['equal-first', 'equal-second', 'after'],
      'vertical order uses X and preserves connection order for equal X');
  }());
}

if (hasAppend) {
  (function appendIsSnappedStrictlyAfterHorizontalChildren() {
    var parent = block('horizontal-append-parent', 'composite');
    connect(parent, block('first', 'action', 300, 35));
    connect(parent, block('equal-last-a', 'action', 500, 100));
    connect(parent, block('equal-last-b', 'action', 700, 100));

    var position = b3e.ConnectionPolicy.getAppendPosition(
      parent, 'horizontal', 20);
    truthy(position.y > 100,
      'horizontal Append places Y strictly after the last child');
    equal(position.y % 20, 0,
      'horizontal Append snaps the ordering coordinate to the grid');
  }());

  (function appendIsSnappedStrictlyAfterVerticalChildren() {
    var parent = block('vertical-append-parent', 'composite');
    connect(parent, block('first', 'action', 35, 300));
    connect(parent, block('equal-last-a', 'action', 100, 500));
    connect(parent, block('equal-last-b', 'action', 100, 700));

    var position = b3e.ConnectionPolicy.getAppendPosition(
      parent, 'vertical', 20);
    truthy(position.x > 100,
      'vertical Append places X strictly after the last child');
    equal(position.x % 20, 0,
      'vertical Append snaps the ordering coordinate to the grid');
  }());
}

if (hasOrder) {
  vm.runInNewContext(fs.readFileSync(path.join(
    ROOT, 'src/editor/editor/managers/ExportManager.js'), 'utf8'), sandbox, {
    filename: 'src/editor/editor/managers/ExportManager.js'
  });

  (function exporterUsesThePolicyOrderContract() {
    var parent = block('sequence', 'composite');
    var first = block('first', 'action', 100, 10);
    var second = block('second', 'action', 100, 20);
    connect(parent, first);
    connect(parent, second);

    var original = b3e.ConnectionPolicy.getOrderedChildren;
    b3e.ConnectionPolicy.getOrderedChildren = function() {
      return [second, first];
    };

    var harness = makeExportHarness(parent, 'horizontal');
    var data = harness.manager.treeToData(harness.tree, true);
    equal(data.nodes.sequence.children, ['second', 'first'],
      'ExportManager delegates child order to ConnectionPolicy');

    b3e.ConnectionPolicy.getOrderedChildren = original;
  }());
}

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed (expected RED).');
  process.exit(1);
}

console.log('\nAll connection policy tests passed.');
