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
      getSupportMessage: getSupportMessage,
      validateProperties: validateProperties
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

    function validateProperties(properties) {
      var errors = {};
      properties = properties || {};
      var rpc = getRPC(properties.rpc);
      if (!properties.rpc) {
        errors.rpc = 'is required';
      } else if (!rpc) {
        errors.rpc = 'is not present in the protocol catalog';
      } else if (!rpc.callSupport || rpc.callSupport.status !== 'supported') {
        errors.rpc = getSupportMessage(properties.rpc);
      }
      if (!properties.catalogFingerprint) {
        errors.catalogFingerprint = 'is required';
      } else if (properties.catalogFingerprint !== getFingerprint()) {
        errors.catalogFingerprint = 'does not match the loaded protocol catalog';
      }

      var request = properties.request;
      if (request === undefined) request = {};
      if (!request || Object.prototype.toString.call(request) !== '[object Object]') {
        errors.request = 'must be an object';
        return errors;
      }
      if (!rpc) return errors;

      var fields = getRequestFields(rpc.name);
      var fieldByName = {};
      fields.forEach(function(field) { fieldByName[field.name] = field; });
      Object.keys(request).forEach(function(name) {
        var field = fieldByName[name];
        if (!field) {
          errors['request.' + name] = 'is not a protobuf field of ' + rpc.requestType;
          return;
        }
        var message = _validateFieldValue(field, request[name]);
        if (message) errors['request.' + name] = message;
      });
      return errors;
    }

    function _validateFieldValue(field, value) {
      if (!field.support || field.support.status !== 'supported') {
        return 'is unsupported: ' + ((field.support && field.support.reasons) || []).join(', ');
      }
      if (field.repeated) {
        if (Object.prototype.toString.call(value) !== '[object Array]') {
          return 'must be an array';
        }
        for (var i = 0; i < value.length; i++) {
          var itemError = _validateScalar(field, value[i]);
          if (itemError) return '[' + i + '] ' + itemError;
        }
        return null;
      }
      return _validateScalar(field, value);
    }

    function _validateScalar(field, value) {
      if (value === null || value === undefined) return 'must have a value';
      switch (field.kind) {
        case 'bool':
          return typeof value === 'boolean' ? null : 'must be true or false';
        case 'string':
          return typeof value === 'string' ? null : 'must be a string';
        case 'enum':
          return getEnumOptions(field.typeName).some(function(option) {
            return option.value === value;
          }) ? null : 'must be a declared enum symbol';
        case 'float':
        case 'double':
          return typeof value === 'number' && isFinite(value) ? null : 'must be a finite number';
        case 'int32':
        case 'sint32':
        case 'sfixed32':
          return _integerNumber(value, -2147483648, 2147483647);
        case 'uint32':
        case 'fixed32':
          return _integerNumber(value, 0, 4294967295);
        case 'int64':
        case 'sint64':
        case 'sfixed64':
          return _decimalString(value, true);
        case 'uint64':
        case 'fixed64':
          return _decimalString(value, false);
        default:
          return 'has unsupported protobuf kind ' + field.kind;
      }
    }

    function _integerNumber(value, min, max) {
      return typeof value === 'number' && isFinite(value) &&
        Math.floor(value) === value && value >= min && value <= max ?
        null : 'must be an integer from ' + min + ' to ' + max;
    }

    function _decimalString(value, signed) {
      if (typeof value !== 'string') return 'must be a canonical decimal string';
      var pattern = signed ? /^-?(0|[1-9][0-9]*)$/ : /^(0|[1-9][0-9]*)$/;
      if (!pattern.test(value)) return 'must be a canonical decimal string';
      if (signed && value.charAt(0) === '-') {
        return _decimalMagnitudeWithin(value.substring(1), '9223372036854775808') ?
          null : 'is below int64 minimum';
      }
      var maximum = signed ? '9223372036854775807' : '18446744073709551615';
      return _decimalMagnitudeWithin(value, maximum) ? null : 'exceeds protobuf range';
    }

    function _decimalMagnitudeWithin(value, maximum) {
      if (value.length !== maximum.length) return value.length < maximum.length;
      return value <= maximum;
    }
  }
})();
