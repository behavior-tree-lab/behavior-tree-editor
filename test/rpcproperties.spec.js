// Headless controller tests for the catalog-driven RpcCall property form.
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vmModule = require('vm');
var ROOT = path.resolve(__dirname, '..');
var registry = { factories: {}, values: {}, controllers: {}, directives: {} };
var moduleApi = {
  factory: function(name, fn) { registry.factories[name] = fn; return moduleApi; },
  value: function(name, value) { registry.values[name] = value; return moduleApi; },
  controller: function(name, fn) { registry.controllers[name] = fn; return moduleApi; },
  directive: function(name, fn) { registry.directives[name] = fn; return moduleApi; }
};
var angular = { module: function() { return moduleApi; } };
var $q = { when: function(value) {
  return { then: function(callback) { callback(value); return this; } };
} };

function load(relativePath) {
  var code = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
  var sandbox = { angular: angular, console: console, window: {} };
  vmModule.createContext(sandbox);
  vmModule.runInContext(code, sandbox, { filename: relativePath });
}

load('src/app/services/protocolcatalog.data.js');
load('src/app/services/protocolcatalog.service.js');
load('src/app/directives/rpcproperties.directive.js');

var catalog = registry.factories.protocolCatalogService(
  $q, registry.values.protocolCatalogData);
var changes = 0;
var scope = {};
var Controller = registry.controllers.RpcPropertiesController;
var controller = {};
Controller.call(controller, scope, catalog);
controller._onChange = function() { changes++; };

var failures = 0;
function eq(actual, expected, message) {
  var a = JSON.stringify(actual);
  var e = JSON.stringify(expected);
  if (a !== e) {
    failures++;
    console.error('FAIL: ' + message + '\n  expected ' + e + '\n  got      ' + a);
  } else {
    console.log('ok: ' + message);
  }
}
function truthy(value, message) { eq(!!value, true, message); }

controller.setModel({
  rpc: 'MailOp',
  catalogFingerprint: 'sha256:stale',
  request: { op: 'MAIL_PULL', limit: 50, missing: 1 }
});
truthy(controller.errors.catalogFingerprint, 'imported stale fingerprint remains visible');
truthy(controller.errors['request.missing'], 'imported unknown request field remains visible');

controller.selectRPC();
eq(controller.model.catalogFingerprint, catalog.getFingerprint(),
  'explicit RPC selection seals the current catalog fingerprint');
eq(controller.model.request, { op: 'MAIL_PULL', limit: 50 },
  'selection preserves compatible fields and drops unknown fields');
eq(controller.model.assertions, [], 'selection initializes assertions');
eq(controller.model.extract, [], 'selection initializes extraction');
truthy(changes > 0, 'selection notifies the parent property panel');

controller.model.rpc = 'BatchQueryFriend';
controller.model.request = {
  type: 'FriendRelation_Friend',
  roleids: ['9007199254740993', '42']
};
controller.selectRPC();
var roleids = controller.fields.filter(function(field) {
  return field.name === 'roleids';
})[0];
eq(controller.listText.roleids, '9007199254740993, 42',
  'repeated values receive editable display text');
controller.listText.roleids = '7, 9007199254740993';
controller.changeList(roleids);
eq(controller.model.request.roleids, ['7', '9007199254740993'],
  'repeated uint64 edit persists decimal-string array');

controller.search = 'mail';
controller.refreshSearch();
truthy(controller.rpcs.some(function(rpc) { return rpc.name === 'MailOp'; }),
  'search filters the RPC selector');

controller.setModel({
  rpc: 'MailOp',
  catalogFingerprint: catalog.getFingerprint(),
  request: {},
  assertions: [],
  extract: []
});
controller.addAssertion();
eq(controller.model.assertions.length, 1, 'assertion row is added');
truthy(controller.model.assertions[0].path, 'assertion starts from a valid response path');
controller.model.assertions[0].path = 'err';
controller.changeAssertionPath(0);
truthy(typeof controller.model.assertions[0].value === 'string',
  'enum assertion defaults to a persisted symbol');
controller.addExtraction();
controller.model.extract[0].path = 'mail_list[].uid';
controller.model.extract[0].blackboardKey = 'mail_uids';
controller.changeExtraction();
eq(controller.errors, {}, 'valid assertion and extraction rows clear validation errors');
controller.removeAssertion(0);
controller.removeExtraction(0);
eq(controller.model.assertions, [], 'assertion row is removable');
eq(controller.model.extract, [], 'extraction row is removable');

if (failures > 0) process.exit(1);
console.log('\nAll RpcCall property controller tests passed.');
