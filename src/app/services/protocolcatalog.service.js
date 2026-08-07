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
	  getResponsePaths : getResponsePaths,
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

    function getResponsePaths(name) {
	  var rpc = getRPC(name);
	  if (!rpc) return [];
	  var paths = [];
	  _walkResponse(rpc.responseType, '', false, {}, 0, paths);
	  return paths;
	}

	function _walkResponse(messageName, prefix, collection, stack, depth, paths) {
	  var message = messageByName[messageName];
	  if (!message || !message.fields || depth > 8 || stack[messageName]) return;
	  var nextStack = {};
	  Object.keys(stack).forEach(function(name) { nextStack[name] = true; });
	  nextStack[messageName] = true;
	  message.fields.forEach(function(field) {
		if (field.kind === 'message') {
		  var segment = field.name + (field.cardinality === 'repeated' ? '[]' : '');
		  _walkResponse(field.typeName, prefix + segment + '.',
			collection || field.cardinality === 'repeated', nextStack, depth + 1, paths);
		  return;
		}
		if (!field.support || field.support.status !== 'supported') return;
		var projected = _fieldsFor({ fields: [field] })[0];
		projected.path = prefix + field.name;
		if (collection && !projected.repeated) {
		  projected.repeated = true;
		  projected.inputType = 'list';
		}
		paths.push(projected);
	  });
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
	  var allowed = {
		rpc: true,
		catalogFingerprint: true,
		request: true,
		assertions: true,
		extract: true
	  };
	  Object.keys(properties).forEach(function(name) {
		if (!allowed[name]) errors[name] = 'is not a supported RpcCall property';
	  });
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
	  _validateAssertions(properties.assertions, rpc, errors);
	  _validateExtractions(properties.extract, rpc, errors);
      return errors;
    }

	function _responsePathMap(rpc) {
	  var paths = {};
	  getResponsePaths(rpc.name).forEach(function(item) { paths[item.path] = item; });
	  return paths;
	}

	function _validateAssertions(assertions, rpc, errors) {
	  if (assertions === undefined) return;
	  if (!Array.isArray(assertions)) {
		errors.assertions = 'must be an array';
		return;
	  }
	  var paths = _responsePathMap(rpc);
	  assertions.forEach(function(assertion, index) {
		var base = 'assertions[' + index + ']';
		if (!_plainObject(assertion)) {
		  errors[base] = 'must be an object';
		  return;
		}
		_assertKnownKeys(assertion, { path: true, op: true, value: true }, base, errors);
		var field = paths[assertion.path];
		if (!assertion.path) errors[base + '.path'] = 'is required';
		else if (!field) errors[base + '.path'] = 'is not a supported response path';
		if (assertion.op !== 'eq' && assertion.op !== 'ne') {
		  errors[base + '.op'] = 'must be eq or ne';
		}
		if (field) {
		  var valueError = _validateFieldValue(field, assertion.value);
		  if (valueError) errors[base + '.value'] = valueError;
		}
	  });
	}

	function _validateExtractions(extractions, rpc, errors) {
	  if (extractions === undefined) return;
	  if (!Array.isArray(extractions)) {
		errors.extract = 'must be an array';
		return;
	  }
	  var paths = _responsePathMap(rpc);
	  var keys = {};
	  extractions.forEach(function(extraction, index) {
		var base = 'extract[' + index + ']';
		if (!_plainObject(extraction)) {
		  errors[base] = 'must be an object';
		  return;
		}
		_assertKnownKeys(extraction, { path: true, blackboardKey: true }, base, errors);
		if (!extraction.path) errors[base + '.path'] = 'is required';
		else if (!paths[extraction.path]) {
		  errors[base + '.path'] = 'is not a supported response path';
		}
		var key = extraction.blackboardKey;
		if (!key) errors[base + '.blackboardKey'] = 'is required';
		else if (key === 'robot' || key.indexOf('__haibot.') === 0) {
		  errors[base + '.blackboardKey'] = 'is reserved';
		} else if (keys[key]) {
		  errors[base + '.blackboardKey'] = 'is duplicated';
		} else {
		  keys[key] = true;
		}
	  });
	}

	function _plainObject(value) {
	  return value && Object.prototype.toString.call(value) === '[object Object]';
	}

	function _assertKnownKeys(value, allowedKeys, base, errors) {
	  Object.keys(value).forEach(function(key) {
		if (!allowedKeys[key]) errors[base + '.' + key] = 'is not supported';
	  });
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
