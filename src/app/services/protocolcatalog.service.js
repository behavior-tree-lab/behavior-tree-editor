// Offline, indexed view of the generated protobuf/RPC protocol catalog.
(function() {
  'use strict';

  angular
    .module('app')
    .factory('protocolCatalogService', protocolCatalogService);

  protocolCatalogService.$inject = ['$q', 'protocolCatalogData'];

  function protocolCatalogService($q, protocolCatalogData) {
    var catalog = null;
    var rpcByName = {};
    var messageByName = {};
    var enumByName = {};

    return {
      loadCatalog      : loadCatalog,
      isLoaded         : isLoaded,
      getFingerprint   : getFingerprint,
      listRPCs         : listRPCs,
      getRPC           : getRPC,
      getRequestFields : getRequestFields,
      getResponseFields: getResponseFields,
      getEnumOptions   : getEnumOptions,
      getSupportMessage: getSupportMessage
    };

    function loadCatalog(data) {
      if (data) {
        _index(data);
      } else if (!catalog) {
        _index(protocolCatalogData);
      }
      return $q.when(catalog);
    }

    function _ensure() {
      if (!catalog) _index(protocolCatalogData);
      return catalog;
    }

    function _index(data) {
      if (!data || !data.fingerprint ||
          Object.prototype.toString.call(data.rpcs) !== '[object Array]' ||
          Object.prototype.toString.call(data.messages) !== '[object Array]' ||
          Object.prototype.toString.call(data.enums) !== '[object Array]') {
        throw new Error('Invalid protocol catalog');
      }
      catalog = data;
      rpcByName = {};
      messageByName = {};
      enumByName = {};
      data.rpcs.forEach(function(rpc) { rpcByName[rpc.name] = rpc; });
      data.messages.forEach(function(message) {
        messageByName[message.fullName] = message;
      });
      data.enums.forEach(function(item) { enumByName[item.fullName] = item; });
    }

    function isLoaded() {
      return catalog !== null;
    }

    function getFingerprint() {
      return _ensure().fingerprint;
    }

    function listRPCs(query) {
      var items = _ensure().rpcs.slice();
      var needle = String(query || '').toLowerCase().trim();
      if (needle) {
        items = items.filter(function(rpc) {
          return rpc.name.toLowerCase().indexOf(needle) >= 0 ||
            rpc.requestType.toLowerCase().indexOf(needle) >= 0 ||
            rpc.responseType.toLowerCase().indexOf(needle) >= 0;
        });
      }
      return items;
    }

    function getRPC(name) {
      _ensure();
      return rpcByName[name] || null;
    }

    function getRequestFields(name) {
      var rpc = getRPC(name);
      return rpc ? _fieldsFor(messageByName[rpc.requestType]) : [];
    }

    function getResponseFields(name) {
      var rpc = getRPC(name);
      return rpc ? _fieldsFor(messageByName[rpc.responseType]) : [];
    }

    function _fieldsFor(message) {
      if (!message || !message.fields) return [];
      return message.fields.map(function(field) {
        var item = {};
        Object.keys(field).forEach(function(key) { item[key] = field[key]; });
        item.repeated = field.cardinality === 'repeated';
        item.itemInputType = _scalarInputType(field);
        item.inputType = item.repeated ? 'list' : item.itemInputType;
        item.enumOptions = field.kind === 'enum' ? getEnumOptions(field.typeName) : [];
        return item;
      });
    }

    function _scalarInputType(field) {
      if (!field.support || field.support.status !== 'supported') return 'unsupported';
      switch (field.kind) {
        case 'bool': return 'bool';
        case 'string': return 'string';
        case 'enum': return 'enum';
        case 'float':
        case 'double': return 'float';
        case 'int64':
        case 'sint64':
        case 'sfixed64':
        case 'uint64':
        case 'fixed64': return 'integer64';
        case 'int32':
        case 'sint32':
        case 'sfixed32':
        case 'uint32':
        case 'fixed32': return 'integer';
        default: return 'unsupported';
      }
    }

    function getEnumOptions(fullName) {
      _ensure();
      var item = enumByName[fullName];
      if (!item || !item.values) return [];
      return item.values.map(function(value) {
        return { value: value.name, label: value.name, number: value.number };
      });
    }

    function getSupportMessage(name) {
      var rpc = getRPC(name);
      if (!rpc) return 'RPC is not present in the protocol catalog.';
      if (rpc.callSupport && rpc.callSupport.status === 'supported') return '';
      var reasons = rpc.callSupport && rpc.callSupport.reasons;
      if (reasons && reasons.length) return reasons.join(', ');
      return 'RPC is unsupported by the protocol catalog.';
    }
  }
})();
