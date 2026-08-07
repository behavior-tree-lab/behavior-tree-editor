// Headless unit tests for the schema-driven panel logic (Phase C).
//
// No browser, no karma: we stub a tiny `angular` shim that captures the
// factory/value registrations from the real source files, then invoke them
// with hand-built dependencies. This exercises the ACTUAL shipping code
// (parametertypes.validator.js, schema.service.js, treevalidator.service.js)
// rather than a re-implementation.
//
// Run: node test/schema.spec.js   (exit code 0 = pass)
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');

// --- minimal angular shim -------------------------------------------------
var registry = { factories: {}, values: {} };
var moduleApi = {
  factory: function(name, fn) { registry.factories[name] = fn; return moduleApi; },
  value:   function(name, val) { registry.values[name] = val; return moduleApi; },
  controller: function() { return moduleApi; },
  directive:  function() { return moduleApi; }
};
var angular = { module: function() { return moduleApi; } };
var testWindow = { b3e: {} };

// $q.when shim that resolves synchronously enough for our assertions.
var $q = {
  when: function(v) {
    return { then: function(cb) { cb(v); return this; } };
  }
};

function loadSource(rel) {
  var code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  var sandbox = { angular: angular, console: console, window: testWindow };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: rel });
}

// Order matters: value + validator first, then services that depend on them.
loadSource('src/app/services/schema.data.js');
loadSource('src/app/validators/parametertypes.validator.js');
loadSource('src/app/services/schema.service.js');
loadSource('src/app/services/treevalidator.service.js');

// --- instantiate factories with resolved deps -----------------------------
var validator = registry.factories.parameterTypesValidator();
var schemaService = registry.factories.schemaService(
  $q, validator, registry.values.nodesSchemaData);
var treeValidator = registry.factories.treeValidatorService(schemaService);

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

// --- schema.data sanity ----------------------------------------------------
truthy(registry.values.nodesSchemaData, 'nodesSchemaData value registered');
eq(registry.values.nodesSchemaData.schemaVersion, 1, 'schemaVersion is 1');
truthy(testWindow.b3e.schema &&
       testWindow.b3e.schema.nodes &&
       testWindow.b3e.schema.nodes.FriendOp,
       'schema.data publishes schema to b3e editor layer');

// --- parameterTypesValidator ----------------------------------------------
eq(validator.validateNumber('1000', true), null, 'int accepts numeric string');
truthy(validator.validateNumber('1.5', true), 'int rejects fractional');
eq(validator.validateNumber('1.5', false), null, 'float accepts fractional');
truthy(validator.validateNumber('abc', true), 'number rejects text');
eq(validator.validateBool(true), null, 'bool accepts true');
truthy(validator.validateBool('maybe'), 'bool rejects garbage');
eq(validator.validateUInt64List('1001, 1002 1003'), null, 'uint64list accepts mixed sep');
truthy(validator.validateUInt64List('1001, -5'), 'uint64list rejects negative');
eq(validator.validateUInt64List([1001, 1002]), null, 'uint64list accepts array');
eq(validator.validateUInt64List('18446744073709551615'), null,
   'uint64list accepts >2^53 as string');

var requiredParam = { name: 'milliseconds', type: 'int', required: true };
truthy(validator.validateRequired(requiredParam, undefined), 'required flags missing');
eq(validator.validateRequired(requiredParam, 1000), null, 'required passes when present');

// --- schemaService ---------------------------------------------------------
schemaService.loadSchema();
truthy(schemaService.getNodeSchema('Wait'), 'getNodeSchema Wait resolves');
truthy(schemaService.getNodeSchema('MailPull'), 'getNodeSchema MailPull resolves');
truthy(schemaService.getNodeSchema('RpcCall'), 'getNodeSchema RpcCall resolves');
eq(schemaService.getNodeSchema('RpcCall').params, [
  {
    name: 'rpc',
    type: 'string',
    default: null,
    required: true,
    description: 'Stable RPC name from protocol.catalog.json'
  }
], 'RpcCall exposes only the stable RPC name as a static parameter');
eq(schemaService.getNodeSchema('MailPull').outputs[0].valuePath, 'mail_list[]',
   'MailPull output keeps mail list projection path');
eq(schemaService.getNodeSchema('NoSuchNode'), null, 'unknown node returns null');

var friendOpts = schemaService.getEnumOptions('FriendOp', 'op');
truthy(friendOpts.length > 0, 'FriendOp op has enum options');
eq(schemaService.getEnumLabel('FriendOp', 'op', 10), 'Reject', 'enum value 10 -> Reject');

eq(schemaService.validateParam('Probability', 'skip_status', 2), null,
   'enum value 2 is valid for skip_status');
truthy(schemaService.validateParam('Probability', 'skip_status', 99),
   'enum value 99 is rejected');

// Wait with missing required milliseconds -> error.
var waitErrors = schemaService.validateNodeParams('Wait', {});
truthy(waitErrors.milliseconds, 'Wait flags missing required milliseconds');
// Wait with valid milliseconds -> no error.
var waitOk = schemaService.validateNodeParams('Wait', { milliseconds: 500 });
eq(Object.keys(waitOk).length, 0, 'Wait valid when milliseconds present');
// Extra unknown property is permitted (backward compat).
var waitExtra = schemaService.validateNodeParams('Wait',
   { milliseconds: 500, legacyAlias: 'x' });
eq(Object.keys(waitExtra).length, 0, 'extra unknown property permitted');

var rpcErrors = schemaService.validateNodeParams('RpcCall', {});
truthy(rpcErrors.rpc, 'RpcCall flags missing required rpc');
var rpcProperties = {
  rpc: 'MailOp',
  request: { op: 'MAIL_PULL', limit: 50 },
  assertions: [{ path: 'errorcode', op: 'eq', value: 'ERR_SUCCESS' }],
  extract: [{ path: 'mail_list', blackboardKey: 'mail_list' }]
};
eq(Object.keys(schemaService.validateNodeParams('RpcCall', rpcProperties)).length, 0,
   'RpcCall accepts canonical dynamic properties alongside static rpc');

// --- treeValidatorService --------------------------------------------------
var badTree = {
  trees: [
    { nodes: {
        n1: { id: 'n1', name: 'Wait', title: 'Wait A', properties: {} },
        n2: { id: 'n2', name: 'FriendOp', title: 'Op',
              properties: { op: 1, roleids: '1001,1002' } }
    } }
  ]
};
var badReport = treeValidator.validateTreeData(badTree);
falsy(badReport.valid, 'tree with missing required is invalid');
eq(badReport.issues.length, 1, 'exactly one issue (Wait.milliseconds)');
eq(badReport.issues[0].param, 'milliseconds', 'issue points at milliseconds');

var goodTree = {
  nodes: {
    n1: { id: 'n1', name: 'Wait', title: 'Wait A', properties: { milliseconds: 1000 } },
    n2: { id: 'n2', name: 'FriendOp', title: 'Op',
          properties: { op: 10, roleids: [1001, 1002], limit: 5 } }
  }
};
var goodReport = treeValidator.validateTreeData(goodTree);
truthy(goodReport.valid, 'fully-specified tree is valid');

// Illegal enum in a tree is caught.
var enumTree = { nodes: { n1: { id: 'n1', name: 'FriendOp', title: 'Op',
  properties: { op: 999 } } } };
falsy(treeValidator.validateTreeData(enumTree).valid, 'illegal enum blocks export');

var emptyRpcTree = { nodes: { n1: { id: 'n1', name: 'RpcCall', title: 'RPC Call',
  properties: { rpc: '' } } } };
falsy(treeValidator.validateTreeData(emptyRpcTree).valid, 'empty RpcCall rpc blocks export');

// --- result ----------------------------------------------------------------
if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed.');
  process.exit(1);
} else {
  console.log('\nAll schema panel logic tests passed.');
}
