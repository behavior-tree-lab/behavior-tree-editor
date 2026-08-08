// RED contract tests for the unified Quick Add node-definition resolver.
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

function fakeTree(id, subtreeIds) {
  return {
    _id: id,
    blocks: {
      getAll: function() {
        return (subtreeIds || []).map(function(subtreeId) {
          return { name: subtreeId, category: 'tree' };
        });
      }
    }
  };
}

function fakeProject(nodes, trees, selectedTreeId) {
  var project = {
    nodes: {
      each: function(callback) { nodes.forEach(callback); }
    }
  };
  if (trees) {
    project.trees = {
      each: function(callback, thisarg) {
        trees.forEach(callback, thisarg);
      },
      getSelected: function() {
        for (var i = 0; i < trees.length; i++) {
          if (trees[i]._id === selectedTreeId) return trees[i];
        }
        return null;
      }
    };
  }
  return project;
}

function findById(definitions, id) {
  for (var i = 0; i < definitions.length; i++) {
    if (definitions[i].id === id) return definitions[i];
  }
  return null;
}

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

loadSource('src/app/services/protocolcatalog.data.js');
loadSource('src/app/services/protocolcatalog.service.js');
loadSource('src/app/services/nodedefinitionresolver.service.js');

var protocolCatalogService = registry.factories.protocolCatalogService(
  $q, registry.values.protocolCatalogData);
protocolCatalogService.loadCatalog();

var schemaService = {
  loadSchema: function() { return $q.when({ nodes: {} }); },
  getNodeSchema: function() { return null; }
};
var resolver = instantiateFactory('nodeDefinitionResolver', {
  $q: $q,
  protocolCatalogService: protocolCatalogService,
  schemaService: schemaService
});

var project = fakeProject([
  {
    name: 'Root',
    title: 'A behavior tree',
    category: 'root',
    properties: {}
  },
  {
    name: 'RpcCall',
    title: 'RPC Call',
    category: 'action',
    description: 'Generic RPC node',
    properties: { ordinaryMarker: 'preserved' }
  },
  {
    name: 'login-tree-id',
    title: 'Login flow',
    category: 'tree',
    description: 'Reusable login subtree',
    properties: { subtreeMarker: true }
  },
  { name: 'ResolverRank', title: 'ResolverRank', category: 'action', properties: {} },
  { name: 'ResolverRankBeta', title: 'ResolverRankBeta', category: 'action', properties: {} },
  { name: 'ResolverRankAlpha', title: 'ResolverRankAlpha', category: 'action', properties: {} },
  { name: 'MyResolverRankTail', title: 'MyResolverRankTail', category: 'action', properties: {} }
]);

var definitions = resolver.resolve(project);

eq(findById(definitions, 'node/Root'), null,
  'the real default Root prototype is excluded from Quick Add definitions');

var ordinary = findById(definitions, 'node/RpcCall');
truthy(ordinary, 'project.nodes ordinary node is discoverable as node/<name>');
eq(ordinary.kind, 'node', 'ordinary definition keeps node kind');
eq(ordinary.name, 'RpcCall', 'ordinary definition keeps persisted node name');
eq(ordinary.prototype.properties, { ordinaryMarker: 'preserved' },
  'ordinary definition preserves the project prototype properties');

var subtree = findById(definitions, 'tree/login-tree-id');
truthy(subtree, 'project tree prototype is discoverable as tree/<id>');
eq(subtree.category, 'tree', 'subtree definition keeps tree category');
eq(subtree.prototype.name, 'login-tree-id', 'subtree skeleton targets the tree id');

var fingerprint = protocolCatalogService.getFingerprint();
var mail = findById(definitions, 'rpc/MailOp');
truthy(mail, 'supported catalog RPC is discoverable as rpc/<name>');
eq(mail.kind, 'rpc', 'RPC virtual definition keeps rpc kind');
eq(mail.enabled, true, 'supported RPC virtual definition is enabled');

var mailSkeleton = resolver.createSkeleton(mail);
eq(mailSkeleton.name, 'RpcCall', 'MailOp skeleton persists the generic RpcCall node name');
eq(mailSkeleton.title, 'MailOp', 'MailOp skeleton uses the RPC name as its initial title');
eq(mailSkeleton.properties, {
  rpc: 'MailOp',
  catalogFingerprint: fingerprint,
  request: {},
  assertions: [],
  extract: []
}, 'MailOp skeleton contains stable catalog metadata and empty request rules');

var unsupportedRPC = protocolCatalogService.listRPCs().filter(function(rpc) {
  return rpc.callSupport.status !== 'supported';
})[0];
var unsupported = findById(definitions, 'rpc/' + unsupportedRPC.name);
truthy(unsupported, 'unsupported RPC remains discoverable');
eq(unsupported.enabled, false, 'unsupported RPC is disabled');
truthy(unsupported.disabledReason, 'unsupported RPC exposes a disabled reason');
truthy(unsupportedRPC.callSupport.reasons.some(function(reason) {
  return unsupported.disabledReason.indexOf(reason) >= 0;
}), 'disabled reason includes the catalog support reason');

var catalog = registry.values.protocolCatalogData;
var messageByName = {};
catalog.messages.forEach(function(message) {
  messageByName[message.fullName] = message;
});
var unsupportedWithField = protocolCatalogService.listRPCs().filter(function(rpc) {
  var request = messageByName[rpc.requestType];
  return rpc.callSupport.status !== 'supported' && request &&
    request.fields.some(function(field) {
      return field.support && field.support.status !== 'supported';
    });
})[0];
var unsupportedRequest = messageByName[unsupportedWithField.requestType];
var unsupportedField = unsupportedRequest.fields.filter(function(field) {
  return field.support && field.support.status !== 'supported';
})[0];
var detailedDisabled = findById(
  definitions, 'rpc/' + unsupportedWithField.name).disabledReason;
truthy(detailedDisabled.indexOf(unsupportedWithField.name) >= 0,
  'disabled reason names the RPC that cannot be authored');
truthy(detailedDisabled.indexOf(unsupportedField.name) >= 0,
  'disabled reason names the real unsupported request field path');
truthy(detailedDisabled.indexOf('is ' + unsupportedField.kind) >= 0,
  'disabled reason names the real unsupported field kind');
truthy(unsupportedField.support.reasons.some(function(reason) {
  return detailedDisabled.indexOf(reason) >= 0;
}), 'disabled reason includes the real field support cause');
truthy(/support|handwritten|select|choose/i.test(detailedDisabled),
  'disabled reason includes a next action instead of a bare reason code');
truthy(detailedDisabled.toLowerCase().indexOf('handwritten') < 0,
  'disabled reason does not invent a handwritten alternative without mapping');
truthy(/cannot author (this|that) request shape/i.test(detailedDisabled),
  'unmapped disabled RPC says the current editor cannot author the request shape');

var mappedRPC = {
  name: 'MappedUnsupportedRPC',
  connection: 'gate',
  requestType: 'KKSG.MappedUnsupportedArg',
  responseType: 'KKSG.MappedUnsupportedRes',
  handwrittenNode: 'MappedRequestNode',
  callSupport: { status: 'unsupported', reasons: ['nested_message'] }
};
var mappedCatalogService = {
  listRPCs: function() { return [mappedRPC]; },
  getFingerprint: function() { return 'sha256:mapped-fixture'; },
  getSupportMessage: function() { return 'nested_message'; },
  getRequestFields: function() {
    return [{
      name: 'payload',
      kind: 'message',
      support: { status: 'unsupported', reasons: ['nested_message'] }
    }];
  }
};
var mappedResolver = instantiateFactory('nodeDefinitionResolver', {
  protocolCatalogService: mappedCatalogService,
  schemaService: schemaService
});
var mappedReason = findById(mappedResolver.resolve(fakeProject([])),
  'rpc/MappedUnsupportedRPC').disabledReason;
truthy(mappedReason.toLowerCase().indexOf('handwritten') >= 0,
  'explicit RPC mapping may offer a handwritten alternative');
truthy(mappedReason.indexOf('MappedRequestNode') >= 0,
  'mapped disabled reason names the real handwritten node');

truthy(findById(definitions, 'node/RpcCall'),
  'ordinary node/RpcCall identity survives alongside RPC variants');
truthy(findById(definitions, 'rpc/MailOp'),
  'rpc/MailOp identity survives alongside the generic RpcCall node');
truthy(findById(definitions, 'node/RpcCall') !== findById(definitions, 'rpc/MailOp'),
  'ordinary RpcCall and MailOp virtual RPC are not merged');

var ranked = resolver.search(definitions, 'resolverrank').filter(function(definition) {
  return definition.id.indexOf('ResolverRank') >= 0;
});
eq(ranked.map(function(definition) { return definition.id; }), [
  'node/ResolverRank',
  'node/ResolverRankAlpha',
  'node/ResolverRankBeta',
  'node/MyResolverRankTail'
], 'search ranks exact, then prefix, then substring matches deterministically');
eq(resolver.search(definitions, 'resolverrank').map(function(definition) {
  return definition.id;
}), resolver.search(definitions, 'resolverrank').map(function(definition) {
  return definition.id;
}), 'repeated searches keep stable result ordering');

var fieldPriorityDefinitions = resolver.resolve(fakeProject([
  {
    name: 'ZTitleMatch',
    title: 'RankNeedle',
    category: 'action',
    properties: {}
  },
  {
    name: 'RankNeedle',
    title: 'A name-exact match',
    category: 'action',
    properties: {}
  },
  {
    name: 'RankNeedlePrefix',
    title: 'B prefix match',
    category: 'action',
    properties: {}
  },
  {
    name: 'MyRankNeedleTail',
    title: 'C substring match',
    category: 'action',
    properties: {}
  }
]));
eq(resolver.search(fieldPriorityDefinitions, 'rankneedle').filter(
  function(definition) {
    return definition.id === 'node/ZTitleMatch' ||
      definition.id === 'node/RankNeedle' ||
      definition.id === 'node/RankNeedlePrefix' ||
      definition.id === 'node/MyRankNeedleTail';
  }).map(function(definition) { return definition.id; }), [
    'node/ZTitleMatch',
    'node/RankNeedle',
    'node/RankNeedlePrefix',
    'node/MyRankNeedleTail'
  ], 'search ranks exact title before exact name, prefix, and substring');

var currentTree = fakeTree('current-tree', []);
var directCycleTree = fakeTree('direct-cycle-tree', ['current-tree']);
var transitiveCycleTree = fakeTree(
  'transitive-cycle-tree', ['direct-cycle-tree']);
var safeTree = fakeTree('safe-tree', []);
var subtreeDefinitions = resolver.resolve(fakeProject([
  { name: 'current-tree', title: 'Current', category: 'tree', properties: {} },
  { name: 'direct-cycle-tree', title: 'Direct', category: 'tree', properties: {} },
  {
    name: 'transitive-cycle-tree',
    title: 'Transitive',
    category: 'tree',
    properties: {}
  },
  { name: 'safe-tree', title: 'Safe', category: 'tree', properties: {} }
], [currentTree, directCycleTree, transitiveCycleTree, safeTree], 'current-tree'));
eq(subtreeDefinitions.filter(function(definition) {
  return definition.category === 'tree';
}).map(function(definition) { return definition.id; }), [
  'tree/safe-tree'
], 'subtree definitions exclude current, direct-cycle, and transitive-cycle trees');

var malformedCurrent = fakeTree('malformed-current', []);
var selfCycleTree = fakeTree('self-cycle-tree', ['self-cycle-tree']);
var mutualCycleA = fakeTree('mutual-cycle-a', ['mutual-cycle-b']);
var mutualCycleB = fakeTree('mutual-cycle-b', ['mutual-cycle-a']);
var missingTargetTree = fakeTree('missing-target-tree', ['missing-tree']);
var malformedSafeTree = fakeTree('malformed-safe-tree', []);
var malformedDefinitions = resolver.resolve(fakeProject([
  {
    name: 'malformed-current',
    title: 'Current',
    category: 'tree',
    properties: {}
  },
  {
    name: 'self-cycle-tree',
    title: 'Self cycle',
    category: 'tree',
    properties: {}
  },
  {
    name: 'mutual-cycle-a',
    title: 'Mutual A',
    category: 'tree',
    properties: {}
  },
  {
    name: 'mutual-cycle-b',
    title: 'Mutual B',
    category: 'tree',
    properties: {}
  },
  {
    name: 'missing-target-tree',
    title: 'Missing target',
    category: 'tree',
    properties: {}
  },
  {
    name: 'malformed-safe-tree',
    title: 'Safe',
    category: 'tree',
    properties: {}
  }
], [
  malformedCurrent,
  selfCycleTree,
  mutualCycleA,
  mutualCycleB,
  missingTargetTree,
  malformedSafeTree
], 'malformed-current'));
eq(malformedDefinitions.filter(function(definition) {
  return definition.category === 'tree';
}).map(function(definition) { return definition.id; }), [
  'tree/malformed-safe-tree'
], 'malformed subtree self-cycles, mutual cycles, and missing targets fail closed');

var firstSkeleton = resolver.createSkeleton(mail);
var secondSkeleton = resolver.createSkeleton(mail);
truthy(firstSkeleton !== secondSkeleton, 'each createSkeleton call returns a new object');
truthy(firstSkeleton.properties !== secondSkeleton.properties,
  'each skeleton has an independent properties object');
truthy(firstSkeleton.properties.request !== secondSkeleton.properties.request,
  'each skeleton has an independent request object');
truthy(firstSkeleton.properties.assertions !== secondSkeleton.properties.assertions,
  'each skeleton has an independent assertions array');
truthy(firstSkeleton.properties.extract !== secondSkeleton.properties.extract,
  'each skeleton has an independent extraction array');
firstSkeleton.title = 'Mutated title';
firstSkeleton.properties.request.op = 'MAIL_PULL';
firstSkeleton.properties.assertions.push({ path: 'err', op: 'eq', value: 'ERR_SUCCESS' });
eq(secondSkeleton.title, 'MailOp', 'mutating one skeleton does not change another title');
eq(secondSkeleton.properties.request, {},
  'mutating one skeleton does not change another request');
eq(secondSkeleton.properties.assertions, [],
  'mutating one skeleton does not change another assertions array');
eq(mail.prototype.properties.request, {},
  'mutating a skeleton does not change the normalized definition prototype');

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed.');
  process.exit(1);
}
console.log('\nAll node definition resolver contract tests passed.');
