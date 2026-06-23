// Pure, side-effect-free validators for schema-typed node parameters.
//
// Registered as an Angular factory so they are injectable, but every function
// is pure (no $scope, no DOM) and therefore headless-unit-testable. Each
// validator returns null on success or a human-readable error string.
//
// Semantics (per NODE_PINS_AND_TRACE_PLAN.md sections 3.2/3.4):
//  - `default` in the schema is a PLACEHOLDER ONLY, never a runtime default.
//  - `required` is enforced at export: a missing required param is an error.
//  - int/float are both "JSON number" at runtime (float64); we only validate
//    that the editor value is numeric/integral, not Go type-safety [B2].
//  - uint64list serializes as a JSON array of numbers (<= 2^53) or strings to
//    avoid float64 precision loss for large role ids [E].
(function() {
  'use strict';

  angular
    .module('app')
    .factory('parameterTypesValidator', parameterTypesValidator);

  function parameterTypesValidator() {
    var MAX_SAFE = 9007199254740991; // 2^53 - 1

    var service = {
      validateRequired   : validateRequired,
      validateNumber     : validateNumber,
      validateBool       : validateBool,
      validateString     : validateString,
      validateEnum       : validateEnum,
      validateUInt64List : validateUInt64List,
      validateParam      : validateParam,
      MAX_SAFE_INTEGER   : MAX_SAFE
    };
    return service;

    function isEmpty(value) {
      return value === null || value === undefined || value === '';
    }

    // Returns an error string if a required param has no value, else null.
    function validateRequired(param, value) {
      if (param && param.required && isEmpty(value)) {
        return 'is required';
      }
      return null;
    }

    function validateNumber(value, isInt) {
      if (isEmpty(value)) return null; // emptiness handled by validateRequired
      var n = typeof value === 'number' ? value : Number(value);
      if (typeof value === 'string' && value.trim() === '') return null;
      if (isNaN(n) || !isFinite(n)) {
        return 'must be a number';
      }
      if (isInt && Math.floor(n) !== n) {
        return 'must be a whole number';
      }
      return null;
    }

    function validateBool(value) {
      if (isEmpty(value)) return null;
      if (value === true || value === false) return null;
      if (value === 'true' || value === 'false' || value === 0 || value === 1) return null;
      return 'must be true or false';
    }

    function validateString(value) {
      if (isEmpty(value)) return null;
      if (typeof value === 'string') return null;
      return 'must be text';
    }

    // value is the stored numeric value; param.enum.options is [{value,label}].
    function validateEnum(param, value) {
      if (isEmpty(value)) return null;
      var options = param && param.enum && param.enum.options;
      if (!options || !options.length) return null;
      var n = typeof value === 'number' ? value : Number(value);
      for (var i = 0; i < options.length; i++) {
        if (options[i].value === n) return null;
      }
      return 'is not a valid option';
    }

    // Accepts a real array, or a comma/space separated string, or a single
    // number. Rejects non-integer / negative entries. Large values are allowed
    // as strings to dodge float64 precision loss.
    function validateUInt64List(value) {
      if (isEmpty(value)) return null;
      var items = toItems(value);
      if (items === null) return 'must be a list of unsigned integers';
      for (var i = 0; i < items.length; i++) {
        var err = validateUInt64Item(items[i]);
        if (err) return 'item ' + (i + 1) + ' ' + err;
      }
      return null;
    }

    function toItems(value) {
      if (Object.prototype.toString.call(value) === '[object Array]') {
        return value;
      }
      if (typeof value === 'number') {
        return [value];
      }
      if (typeof value === 'string') {
        var trimmed = value.trim();
        if (trimmed === '') return [];
        return trimmed.split(/[\s,]+/);
      }
      return null;
    }

    function validateUInt64Item(item) {
      if (typeof item === 'number') {
        if (isNaN(item) || !isFinite(item)) return 'must be a number';
        if (Math.floor(item) !== item || item < 0) return 'must be a non-negative integer';
        return null;
      }
      if (typeof item === 'string') {
        if (!/^\d+$/.test(item.trim())) return 'must be a non-negative integer';
        return null;
      }
      return 'must be a non-negative integer';
    }

    // Dispatches on param.type and runs required + type checks.
    // Returns null or an error string.
    function validateParam(param, value) {
      if (!param) return null;
      var requiredErr = validateRequired(param, value);
      if (requiredErr) return requiredErr;
      switch (param.type) {
        case 'int':        return validateNumber(value, true);
        case 'float':      return validateNumber(value, false);
        case 'bool':       return validateBool(value);
        case 'string':     return validateString(value);
        case 'enum':       return validateEnum(param, value);
        case 'uint64list': return validateUInt64List(value);
        default:           return null; // unknown type: permissive
      }
    }
  }
})();
