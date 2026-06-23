// b3-typed-properties: schema-driven property editor.
//
// Renders one typed control per schema param (enum -> dropdown of labels,
// int/float -> number, bool -> checkbox, string -> text, uint64list -> list
// editor) instead of the generic key/value table. The stored model is the
// block's `properties` object; values are written back in their schema type so
// the exported .b3 carries the right JSON shapes.
//
// Idioms follow b3KeyTable: require ^ngModel, $parse the ng-change expression,
// $watch the bound model. Falls back is handled by the caller (the panel only
// uses this directive when a node schema exists) [3.3].
//
// Validation is inline [3.4]: each row shows a red error when its value is
// invalid or a required value is missing. `default` is shown as a placeholder,
// never pre-filled into the model [B1].
(function() {
  'use strict';

  angular
    .module('app')
    .directive('b3TypedProperties', typedProperties)
    .controller('TypedPropertiesController', TypedPropertiesController);

  typedProperties.$inject = ['$parse'];
  function typedProperties($parse) {
    return {
      require          : '^ngModel',
      restrict         : 'EA',
      replace          : true,
      bindToController : true,
      controller       : 'TypedPropertiesController',
      controllerAs     : 'typed',
      templateUrl      : 'directives/typedproperties.html',
      scope            : true,
      link             : link
    };

    function link(scope, element, attrs) {
      scope.typed.heading = attrs.heading || 'Properties';
      scope.typed._onChange = $parse(attrs.ngChange);

      // The node type name drives which schema to render.
      scope.$watch(attrs.nodeName, function(name) {
        scope.typed.setNode(name);
      });

      // The bound properties object.
      scope.$watch(attrs.ngModel, function(model) {
        scope.typed.setModel(model);
      });
    }
  }

  TypedPropertiesController.$inject = ['$scope', 'schemaService'];
  function TypedPropertiesController($scope, schemaService) {
    var vm = this;
    vm._onChange = null;
    vm.heading = 'Properties';
    vm.nodeName = null;
    vm.model = null;
    vm.params = [];       // schema params for the current node
    vm.errors = {};       // { paramName: errorString }

    vm.setNode = setNode;
    vm.setModel = setModel;
    vm.change = change;
    vm.optionsFor = optionsFor;
    vm.hasError = hasError;
    vm.errorFor = errorFor;
    vm.placeholderFor = placeholderFor;

    function setNode(name) {
      vm.nodeName = name;
      var node = schemaService.getNodeSchema(name);
      vm.params = (node && node.params) ? node.params : [];
      _revalidate();
    }

    function setModel(model) {
      vm.model = model || {};
      _coerceExisting();
      _revalidate();
    }

    // Coerce values already in the model to their schema types so that, e.g.,
    // an enum value imported as a string binds to the matching numeric option.
    function _coerceExisting() {
      for (var i = 0; i < vm.params.length; i++) {
        var param = vm.params[i];
        if (!vm.model.hasOwnProperty(param.name)) continue;
        vm.model[param.name] = _coerce(param, vm.model[param.name]);
      }
    }

    function _coerce(param, value) {
      if (value === null || value === undefined || value === '') return value;
      switch (param.type) {
        case 'int':
        case 'float':
        case 'enum':
          var n = Number(value);
          return isNaN(n) ? value : n;
        case 'bool':
          if (value === 'true') return true;
          if (value === 'false') return false;
          return !!value;
        default:
          return value;
      }
    }

    function optionsFor(param) {
      if (param && param.enum && param.enum.options) return param.enum.options;
      return [];
    }

    function placeholderFor(param) {
      if (param && param['default'] !== null && param['default'] !== undefined) {
        return 'Default: ' + param['default'];
      }
      return '';
    }

    function hasError(name) {
      return !!vm.errors[name];
    }
    function errorFor(name) {
      return vm.errors[name] || '';
    }

    function _revalidate() {
      vm.errors = schemaService.validateNodeParams(vm.nodeName, vm.model);
    }

    // Called on every ng-change. Coerces the changed param, drops empty
    // optional values (so they are not exported as ""), revalidates, and
    // notifies the parent (the panel's update()).
    function change(param) {
      if (!vm.model) vm.model = {};
      var value = vm.model[param.name];

      if (value === '' || value === null || value === undefined) {
        // Keep required-but-empty so validation can flag it; otherwise remove.
        if (!param.required) {
          delete vm.model[param.name];
        } else {
          vm.model[param.name] = value;
        }
      } else {
        vm.model[param.name] = _coerce(param, value);
      }

      _revalidate();

      if (vm._onChange) {
        vm._onChange($scope);
      }
    }
  }
})();
