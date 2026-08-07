// Headless tests for the offline protocol catalog service.
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');
var registry = { factories: {}, values: {} };
var moduleApi = {
  factory: function(name, fn) { registry.factories[name] = fn; return moduleApi; },
  value: function(name, value) { registry.values[name] = value; return moduleApi; }
};
var angular = { module: function() { return moduleApi; } };
var $q = {
  when: function(value) {
    return { then: function(callback) { callback(value); return this; } };
  }
};

function loadSource(relativePath) {
  var code = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
  var sandbox = { angular: angular, console: console, window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: relativePath });
}

loadSource('src/app/services/protocolcatalog.data.js');
loadSource('src/app/services/protocolcatalog.service.js');

var service = registry.factories.protocolCatalogService(
  $q, registry.values.protocolCatalogData);
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

service.loadCatalog();
truthy(service.isLoaded(), 'catalog is loaded once from bundled data');
truthy(/^sha256:/.test(service.getFingerprint()), 'catalog exposes semantic fingerprint');
eq(service.listRPCs().length, 89, 'bundled catalog exposes all RPCs');

var mailMatches = service.listRPCs('mail');
truthy(mailMatches.some(function(rpc) { return rpc.name === 'MailOp'; }),
  'search is case-insensitive and finds MailOp');
eq(service.getRPC('NoSuchRPC'), null, 'unknown RPC returns null');

var mail = service.getRPC('MailOp');
eq(mail.connection, 'gate', 'MailOp keeps catalog connection');
eq(mail.callSupport.status, 'supported', 'MailOp is runnable');

var fields = service.getRequestFields('MailOp');
eq(fields.map(function(field) { return field.name; }), ['op', 'mail_uid', 'limit'],
  'request fields retain protobuf field names and order');
eq(fields[0].inputType, 'enum', 'enum field maps to enum control');
eq(fields[0].enumOptions[1], {
  value: 'MAIL_PULL', label: 'MAIL_PULL', number: 1
}, 'enum controls persist the protobuf symbol');
eq(fields[1].inputType, 'integer64', 'uint64 maps to precision-safe text control');
eq(fields[2].inputType, 'integer', 'uint32 maps to integer control');

var repeatedRPC = service.listRPCs().filter(function(rpc) {
  return service.getRequestFields(rpc.name).some(function(field) { return field.repeated; });
})[0];
truthy(repeatedRPC, 'catalog exposes at least one repeated request field');
truthy(service.getRequestFields(repeatedRPC.name).some(function(field) {
  return field.repeated && field.inputType === 'list';
}), 'repeated scalar maps to a list control');

var unsupported = service.listRPCs().filter(function(rpc) {
  return rpc.callSupport.status !== 'supported';
})[0];
truthy(unsupported, 'unsupported RPC remains discoverable');
truthy(service.getSupportMessage(unsupported.name).length > 0,
  'unsupported RPC explains why it cannot run');

var fingerprint = service.getFingerprint();
eq(service.validateProperties({
  rpc: 'MailOp',
  catalogFingerprint: fingerprint,
  request: { op: 'MAIL_PULL', mail_uid: '9007199254740993', limit: 50 }
}), {}, 'valid RpcCall properties pass catalog validation');
truthy(service.validateProperties({
  rpc: 'MailOp', catalogFingerprint: 'sha256:stale', request: {}
}).catalogFingerprint, 'stale fingerprint is rejected');
truthy(service.validateProperties({
  rpc: unsupported.name, catalogFingerprint: fingerprint, request: {}
}).rpc, 'unsupported RPC is rejected with a runnable error');
truthy(service.validateProperties({
  rpc: 'MailOp', catalogFingerprint: fingerprint, request: { missing: 1 }
})['request.missing'], 'unknown request field is rejected');
truthy(service.validateProperties({
  rpc: 'MailOp', catalogFingerprint: fingerprint, request: { op: 'NOT_AN_ENUM' }
})['request.op'], 'unknown enum symbol is rejected');
truthy(service.validateProperties({
  rpc: 'MailOp', catalogFingerprint: fingerprint, request: { mail_uid: 9007199254740993 }
})['request.mail_uid'], 'uint64 number is rejected in favor of a decimal string');
eq(service.validateProperties({
  rpc: 'BatchQueryFriend',
  catalogFingerprint: fingerprint,
  request: {
    type: 'FriendRelation_Friend',
    roleids: ['9007199254740993', '42']
  }
}), {}, 'repeated uint64 and enum request values validate');

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed.');
  process.exit(1);
}
console.log('\nAll protocol catalog service tests passed.');
