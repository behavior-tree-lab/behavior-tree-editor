// Headless round-trip tests for Phase D data-pin connections.
//
// No browser / karma. We load the ACTUAL shipping ExportManager.js,
// ImportManager.js and the data-pin methods from Block.js inside a vm sandbox
// with minimal shims for the editor globals (createjs / b3 / tine / b3e),
// then drive an export -> JSON -> import round-trip with stub blocks/tree.
// This exercises the real serialization + reconstruction code rather than a
// re-implementation.
//
// Run: node test/dataconnections.spec.js   (exit code 0 = pass)
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');

// --- tiny assert harness ---------------------------------------------------
var failures = 0;
function eq(actual, expected, msg) {
  var a = JSON.stringify(actual);
  var e = JSON.stringify(expected);
  if (a !== e) {
    failures++;
    console.error('FAIL: ' + msg + '\n  expected ' + e + '\n  got      ' + a);
  } else {
    console.log('ok: ' + msg);
  }
}
function truthy(v, msg) { eq(!!v, true, msg); }
function falsy(v, msg) { eq(!!v, false, msg); }

// --- shims -----------------------------------------------------------------
// Minimal createjs so Block.js's promote/extend and Shape graphics resolve.
function Graphics() {}
// Every graphics call is a chainable no-op for the headless harness.
['clear', 'beginFill', 'drawCircle', 'endFill', 'setStrokeStyle', 'setStrokeDash',
 'beginStroke', 'endStroke', 'moveTo', 'lineTo', 'bezierCurveTo', 'drawRoundRect',
 'drawPolyStar', 'beginLinearGradientFill'].forEach(function(m) {
  Graphics.prototype[m] = function() { return this; };
});
function Text(text) { this.text = text; this.x = 0; this.y = 0; this.textAlign = ''; }
function Shape() { this.graphics = new Graphics(); }
function Container() { this.children = []; }
Container.prototype.removeAllChildren = function() { this.children = []; };
Container.prototype.addChild = function(c) { this.children.push(c); return c; };
Container.prototype.removeChild = function(c) {
  var i = this.children.indexOf(c);
  if (i >= 0) this.children.splice(i, 1);
};
Container.prototype.addChildAt = function(c) { this.children.unshift(c); return c; };

var createjs = {
  Shape: Shape,
  Text: Text,
  Container: Container,
  Shadow: function() {},
  // extend/promote mimic just enough: return a prototype chained to base.
  extend: function(sub, base) {
    sub.prototype = Object.create(base.prototype);
    sub.prototype.constructor = sub;
    // expose <Base>_constructor for the sub to call.
    sub.prototype[base.name + '_constructor'] = base;
    return sub.prototype;
  },
  promote: function(sub) { return sub; }
};

var b3 = { createUUID: (function() { var n = 0; return function() { return 'uuid-' + (++n); }; })() };
var tine = { merge: function() {
  var out = {};
  for (var i = 0; i < arguments.length; i++) {
    var src = arguments[i];
    if (src) for (var k in src) if (src.hasOwnProperty(k)) out[k] = src[k];
  }
  return out;
}};

var loggerCalls = { error: [], info: [] };
var b3e = {
  draw: { SHAPES: {}, SYMBOLS: {}, textSymbol: function() { return new Shape(); } },
  editor: {},
  project: {},
  tree: {},
  schema: null,
  VERSION: 'test',
  logger: {
    error: function(m, d) { loggerCalls.error.push({m: m, d: d}); },
    info:  function(m, d) { loggerCalls.info.push({m: m, d: d}); },
    debug: function() {},
    warn:  function() {}
  }
};

var sandbox = { createjs: createjs, b3: b3, tine: tine, b3e: b3e, console: console, window: { b3e: b3e } };
vm.createContext(sandbox);

function loadSource(rel) {
  var code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  vm.runInContext(code, sandbox, { filename: rel });
}

loadSource('src/editor/utils/Connection.js');
loadSource('src/editor/utils/Block.js');
loadSource('src/editor/editor/managers/ExportManager.js');
loadSource('src/editor/editor/managers/ImportManager.js');

truthy(b3e.Block, 'Block class loaded');
truthy(b3e.DataConnection, 'DataConnection class loaded');

// --- Block data-connection model tests -------------------------------------
function makeBlock(name, category) {
  var node = { name: name, title: name, category: category || 'action',
               description: '', properties: {} };
  var blk = new b3e.Block(node);
  // Stub the bits _redrawDataPins touches so it is a no-op-safe call.
  blk._settings = { get: function(k) {
    if (k === 'layout') return 'horizontal';
    if (k === 'anchor_offset_x') return 4;
    if (k === 'data_connection_color') return '#2ECC71';
    if (k === 'data_connection_width') return 2;
    return 0;
  } };
  blk._width = 160; blk._height = 40;
  blk.x = 0; blk.y = 0;
  return blk;
}

var consumer = makeBlock('FriendOp');
var producer = makeBlock('RecommendFriend');

consumer._addDataConnection('roleids', producer.id, 'friend_targets', null);
eq(consumer._dataConnections.length, 1, 'addDataConnection stores one link');
eq(consumer._dataConnections[0].sourcePin, 'friend_targets', 'link source pin stored');

// Last-wire-wins: a second wire on the same input pin replaces the first.
var producer2 = makeBlock('RecommendFriend');
consumer._addDataConnection('roleids', producer2.id, 'friend_targets', null);
eq(consumer._dataConnections.length, 1, 'duplicate target pin replaced (last-wins)');
eq(consumer._dataConnections[0].sourceNodeId, producer2.id, 'last wire kept');

consumer._removeDataConnection('roleids');
eq(consumer._dataConnections.length, 0, 'removeDataConnection drops the link');

// --- Block data-pin schema + hit tests -------------------------------------
var schema = {
  schemaVersion: 1,
  nodes: {
    Wait: {
      inputs: [ { pin: 'milliseconds', type: 'int' } ],
      outputs: []
    },
    RecommendFriend: {
      inputs: [ { pin: 'type', type: 'int' } ],
      outputs: [ { pin: 'friend_targets', type: 'uint64list',
                   label: 'recommended_roleids',
                   valuePath: 'roles[].roleid',
                   blackboardKey: 'friend_targets' } ]
    },
    FriendOp: {
      inputs: [ { pin: 'roleids', type: 'uint64list',
                  targetPath: 'OpFriendArg.roleids' } ],
      outputs: []
    },
    MailPull: {
      inputs: [],
      outputs: [ { pin: 'mail_list', type: 'mail_list',
                   label: 'mail_list',
                   blackboardKey: 'mail_list',
                   sourcePath: 'MailOpRes.mail_list',
                   valuePath: 'mail_list[]' } ]
    },
    MailRead: {
      inputs: [ { pin: 'mail_list', type: 'mail_list',
                  label: 'mail_list',
                  data: true,
                  targetPath: 'MailOpArg.mail_uid',
                  valuePath: 'mail_list[].uid' } ],
      outputs: []
    }
  }
};

b3e.schema = schema;
var waitBlock = makeBlock('Wait');
eq(waitBlock._getDataPins().length, 0,
   'plain parameter inputs are not exposed as canvas data pins');

var pinProducer = makeBlock('RecommendFriend');
pinProducer._redrawDataPins();
eq(pinProducer._getDataPins('output').length, 1,
   'schema output pin is exposed on producer block');
eq(pinProducer._getDataPins('output')[0].label, 'recommended_roleids',
   'schema output pin uses business display label');
eq(pinProducer._getDataPins('output')[0].valuePath, 'roles[].roleid',
   'schema output pin keeps protocol projection path');
eq(pinProducer._getDataPins('input').length, 0,
   'plain selector input is hidden on producer block');

var outPin = pinProducer._getDataPins('output')[0];
var outPos = pinProducer._getDataPinPosition(outPin);
eq(pinProducer._hitDataPin(outPos.x, outPos.y).pin, 'friend_targets',
   'output data pin can be hit-tested');

var pinConsumer = makeBlock('FriendOp');
var inPin = pinConsumer._getDataPins('input')[0];
eq(pinConsumer._canConnectDataPin(inPin, outPin, pinProducer), true,
   'matching output-to-input data pins can connect');
eq(pinProducer._canConnectDataPin(outPin, inPin, pinConsumer), false,
   'input-to-output reversed data pin connection is rejected');
eq(pinConsumer._canConnectDataPin(inPin, { direction: 'output', type: 'int', pin: 'type' }, pinProducer), false,
   'mismatched data pin types are rejected');

var mailProducer = makeBlock('MailPull');
var mailConsumer = makeBlock('MailRead');
var mailOutPin = mailProducer._getDataPins('output')[0];
var mailInPin = mailConsumer._getDataPins('input')[0];
eq(mailOutPin.label, 'mail_list', 'mail output pin uses mail list label');
eq(mailOutPin.valuePath, 'mail_list[]', 'mail output pin keeps protocol collection path');
eq(mailInPin.valuePath, 'mail_list[].uid', 'mail input pin keeps protocol item projection path');
eq(mailConsumer._canConnectDataPin(mailInPin, mailOutPin, mailProducer), true,
   'matching mail_list data pins can connect');

// --- Export round-trip harness ---------------------------------------------
// Build a fake project/tree/editor exposing only what Export/Import touch.
function makeHarness() {
  var blocks = {};
  var root = makeBlock('Root', 'root');
  root.id = 'root';
  root._outConnections = [];

  var connectionsChildren = [];

  var treeObj = {
    _id: 'tree-1',
    x: 0, y: 0, scaleX: 1,
    _connections: { addChild: function(c) { connectionsChildren.push(c); } },
    blocks: {
      _all: blocks,
      add: function(name, x, y) {
        var b = makeBlock(name);
        b.x = x || 0; b.y = y || 0;
        blocks[b.id] = b;
        return b;
      },
      get: function(id) { return blocks[id] || (id === 'root' ? root : undefined); },
      getRoot: function() { return root; },
      each: function(cb, thisarg) {
        cb.call(thisarg, root);
        for (var k in blocks) if (blocks.hasOwnProperty(k)) cb.call(thisarg, blocks[k]);
      }
    },
    connections: { add: function() {} },
    organize: { organize: function() {} },
    selection: { deselectAll: function() {}, select: function() {} }
  };

  var project = {
    trees: {
      getSelected: function() { return treeObj; },
      get: function(t) { return (t === 'tree-1' || (t && t._id === 'tree-1')) ? treeObj : treeObj; },
      each: function(cb, thisarg) { cb.call(thisarg, treeObj); },
      select: function() {},
      add: function() {}
    },
    nodes: {
      each: function() {},
      get: function() { return null; },
      update: function() {}
    },
    history: { clear: function() {}, _add: function() {}, _lock: function() {},
               _unlock: function() {}, _beginBatch: function() {}, _endBatch: function() {} }
  };

  var editor = {
    _settings: { get: function(k) {
      if (k === 'layout') return 'horizontal';
      if (k === 'data_connection_color') return '#2ECC71';
      if (k === 'data_connection_width') return 2;
      return 0;
    }},
    project: { get: function() { return project; } },
    trigger: function() {}
  };

  return { editor: editor, project: project, tree: treeObj, root: root,
           blocks: blocks, connectionsChildren: connectionsChildren };
}

// Export: a wired block emits dataConnections; an unwired one does not.
var hExport = makeHarness();
var exporter = new b3e.editor.ExportManager(hExport.editor);

var src = hExport.tree.blocks.add('RecommendFriend', 100, 0);
var dst = hExport.tree.blocks.add('FriendOp', 300, 0);
dst.category = 'action';
src.category = 'action';
// Connect root -> src so it appears (children not required for node emission).
dst._addDataConnection('roleids', src.id, 'friend_targets', null);

var exported = exporter.treeToData(hExport.tree, true);
var dstSpec = exported.nodes[dst.id];
var srcSpec = exported.nodes[src.id];
truthy(dstSpec.dataConnections, 'wired node exports dataConnections');
eq(dstSpec.dataConnections.length, 1, 'one data connection exported');
eq(dstSpec.dataConnections[0],
   { targetPin: 'roleids', sourceNodeId: src.id, sourcePin: 'friend_targets' },
   'exported link has model fields only (no display object)');
falsy(srcSpec.dataConnections, 'unwired node omits dataConnections');

// Malformed link (missing sourcePin) is skipped on export.
var hBad = makeHarness();
var badExporter = new b3e.editor.ExportManager(hBad.editor);
var bdst = hBad.tree.blocks.add('FriendOp', 0, 0);
bdst._dataConnections.push({ targetPin: 'roleids', sourceNodeId: 'x' }); // no sourcePin
var badExported = badExporter.treeToData(hBad.tree, true);
falsy(badExported.nodes[bdst.id].dataConnections,
      'malformed link not exported');

// --- Import round-trip -----------------------------------------------------
// Feed exported JSON back through ImportManager and confirm the wire rebuilds.
function importData(data, schema) {
  var h = makeHarness();
  b3e.schema = schema || null;
  loggerCalls.error = []; loggerCalls.info = [];
  // Pre-create the blocks the spec references (treeAsData normally does the
  // block creation; here we drive _reconstructDataConnections directly which
  // is the unit under test, so seed blocks with the exact ids).
  var idMap = {};
  for (var id in data.nodes) {
    if (!data.nodes.hasOwnProperty(id)) continue;
    var spec = data.nodes[id];
    var b = makeBlock(spec.name, spec.category);
    b.id = id;
    h.blocks[id] = b;
    idMap[id] = b;
  }
  var importer = new b3e.editor.ImportManager(h.editor);
  importer._reconstructDataConnections(data);
  return { harness: h, blocks: idMap };
}

// Build a minimal tree-data shape carrying the dataConnections.
var roundTripData = {
  id: 'tree-1',
  nodes: {
    'n-src': { id: 'n-src', name: 'RecommendFriend', category: 'action', properties: {} },
    'n-dst': { id: 'n-dst', name: 'FriendOp', category: 'action', properties: {},
               dataConnections: [
                 { targetPin: 'roleids', sourceNodeId: 'n-src', sourcePin: 'friend_targets' }
               ] }
  }
};

// 1. No schema -> reconstructs (graceful degradation).
var r1 = importData(roundTripData, null);
eq(r1.blocks['n-dst']._dataConnections.length, 1,
   'import rebuilds wire with no schema (graceful)');
eq(r1.blocks['n-dst']._dataConnections[0].sourceNodeId, 'n-src',
   'rebuilt wire points at source');
truthy(r1.harness.connectionsChildren.length === 1,
       'a DataConnection display object was added to the canvas');

// 2. Missing source -> skipped + warned, target falls back (no wire).
var missingSrcData = {
  id: 'tree-1',
  nodes: {
    'n-dst': { id: 'n-dst', name: 'FriendOp', category: 'action', properties: {},
               dataConnections: [
                 { targetPin: 'roleids', sourceNodeId: 'gone', sourcePin: 'friend_targets' }
               ] }
  }
};
var r2 = importData(missingSrcData, null);
eq(r2.blocks['n-dst']._dataConnections.length, 0, 'missing source -> no wire');
truthy(loggerCalls.error.length >= 1, 'missing source logs a warning');

// 3. Schema present, valid pins -> reconstructs.
var r3 = importData(roundTripData, schema);
eq(r3.blocks['n-dst']._dataConnections.length, 1, 'valid pins reconstruct under schema');

// 4. Schema present, undeclared input pin -> skipped.
var badPinData = {
  id: 'tree-1',
  nodes: {
    'n-src': { id: 'n-src', name: 'RecommendFriend', category: 'action', properties: {} },
    'n-dst': { id: 'n-dst', name: 'FriendOp', category: 'action', properties: {},
               dataConnections: [
                 { targetPin: 'not_a_pin', sourceNodeId: 'n-src', sourcePin: 'friend_targets' }
               ] }
  }
};
var r4 = importData(badPinData, schema);
eq(r4.blocks['n-dst']._dataConnections.length, 0, 'undeclared input pin rejected under schema');

// 5. Full export -> import round-trip preserves the link.
var hRT = makeHarness();
var rtExporter = new b3e.editor.ExportManager(hRT.editor);
var rtSrc = hRT.tree.blocks.add('RecommendFriend', 0, 0); rtSrc.category = 'action';
var rtDst = hRT.tree.blocks.add('FriendOp', 0, 0); rtDst.category = 'action';
rtDst._addDataConnection('roleids', rtSrc.id, 'friend_targets', null);
var rtJson = JSON.parse(JSON.stringify(rtExporter.treeToData(hRT.tree, true)));
// Re-key import data with the same ids and feed back.
var rtImport = importData(rtJson, schema);
eq(rtImport.blocks[rtDst.id]._dataConnections.length, 1,
   'export->JSON->import round-trip preserves the data link');
eq(rtImport.blocks[rtDst.id]._dataConnections[0].sourcePin, 'friend_targets',
   'round-trip preserves source pin');

// --- result ----------------------------------------------------------------
if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed.');
  process.exit(1);
} else {
  console.log('\nAll data-connection round-trip tests passed.');
}
