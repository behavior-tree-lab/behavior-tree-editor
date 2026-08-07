// b3-rpc-properties: catalog-driven editor for the generic RpcCall node.
(function() {
  'use strict';

  angular
    .module('app')
    .directive('b3RpcProperties', rpcProperties)
    .controller('RpcPropertiesController', RpcPropertiesController);

  rpcProperties.$inject = ['$parse'];
  function rpcProperties($parse) {
    return {
      require          : '^ngModel',
      restrict         : 'EA',
      replace          : true,
      bindToController : true,
      controller       : 'RpcPropertiesController',
      controllerAs     : 'rpc',
      templateUrl      : 'directives/rpcproperties.html',
      scope            : true,
      link             : function(scope, element, attrs) {
        scope.rpc._onChange = $parse(attrs.ngChange);
        scope.$watch(attrs.ngModel, function(model) {
          scope.rpc.setModel(model);
        });
      }
    };
  }

  RpcPropertiesController.$inject = ['$scope', 'protocolCatalogService'];
  function RpcPropertiesController($scope, protocolCatalogService) {
    var vm = this;
    vm._onChange = null;
    vm.model = {};
    vm.search = '';
    vm.rpcs = [];
    vm.selectedName = '';
    vm.selectedRPC = null;
    vm.fields = [];
    vm.included = {};
    vm.listText = {};
    vm.errors = {};

    vm.setModel = setModel;
    vm.refreshSearch = refreshSearch;
    vm.selectRPC = selectRPC;
    vm.toggleField = toggleField;
    vm.changeField = changeField;
    vm.changeList = changeList;
    vm.hasError = hasError;
    vm.errorFor = errorFor;
    vm.supportMessage = supportMessage;
    vm.fingerprintMismatch = fingerprintMismatch;

    protocolCatalogService.loadCatalog();
    refreshSearch();

    function setModel(model) {
      vm.model = model || {};
      vm.selectedName = vm.model.rpc || '';
      _refreshDefinition();
      _revalidate();
    }

    function refreshSearch() {
      vm.rpcs = protocolCatalogService.listRPCs(vm.search);
    }

    function selectRPC() {
      var nextName = vm.model.rpc || '';
      var previousRequest = _isObject(vm.model.request) ? vm.model.request : {};
      var nextFields = protocolCatalogService.getRequestFields(nextName);
      var nextRequest = {};
      nextFields.forEach(function(field) {
        if (!previousRequest.hasOwnProperty(field.name)) return;
        var probe = {
          rpc: nextName,
          catalogFingerprint: protocolCatalogService.getFingerprint(),
          request: {}
        };
        probe.request[field.name] = previousRequest[field.name];
        var errors = protocolCatalogService.validateProperties(probe);
        if (!errors['request.' + field.name]) {
          nextRequest[field.name] = _copyValue(previousRequest[field.name]);
        }
      });

      vm.model.catalogFingerprint = protocolCatalogService.getFingerprint();
      vm.model.request = nextRequest;
      if (nextName !== vm.selectedName) {
        vm.model.assertions = [];
        vm.model.extract = [];
      } else {
        if (!Array.isArray(vm.model.assertions)) vm.model.assertions = [];
        if (!Array.isArray(vm.model.extract)) vm.model.extract = [];
      }
      vm.selectedName = nextName;
      _refreshDefinition();
      _revalidate();
      _notify();
    }

    function _refreshDefinition() {
      vm.selectedRPC = protocolCatalogService.getRPC(vm.model.rpc);
      vm.fields = protocolCatalogService.getRequestFields(vm.model.rpc);
      vm.included = {};
      vm.listText = {};
      var request = _isObject(vm.model.request) ? vm.model.request : {};
      vm.fields.forEach(function(field) {
        vm.included[field.name] = request.hasOwnProperty(field.name);
        if (field.repeated && Array.isArray(request[field.name])) {
          vm.listText[field.name] = request[field.name].join(', ');
        }
      });
    }

    function toggleField(field) {
      if (!_isObject(vm.model.request)) vm.model.request = {};
      if (!vm.included[field.name]) {
        delete vm.model.request[field.name];
      } else if (!vm.model.request.hasOwnProperty(field.name)) {
        vm.model.request[field.name] = _defaultValue(field);
        if (field.repeated) vm.listText[field.name] = '';
      }
      _revalidate();
      _notify();
    }

    function changeField(field) {
      vm.included[field.name] = true;
      _revalidate();
      _notify();
    }

    function changeList(field) {
      if (!_isObject(vm.model.request)) vm.model.request = {};
      var text = vm.listText[field.name] || '';
      var values = text.split(/[,\n]/).map(function(value) {
        return value.trim();
      }).filter(function(value) { return value.length > 0; });
      vm.model.request[field.name] = values.map(function(value) {
        switch (field.itemInputType) {
          case 'integer': return Number(value);
          case 'float': return Number(value);
          case 'bool':
            if (value === 'true') return true;
            if (value === 'false') return false;
            return value;
          default: return value;
        }
      });
      vm.included[field.name] = true;
      _revalidate();
      _notify();
    }

    function _defaultValue(field) {
      if (field.repeated) return [];
      switch (field.inputType) {
        case 'bool': return false;
        case 'integer': return 0;
        case 'float': return 0;
        case 'integer64': return '0';
        case 'enum': return field.enumOptions.length ? field.enumOptions[0].value : '';
        default: return '';
      }
    }

    function _revalidate() {
      vm.errors = protocolCatalogService.validateProperties(vm.model);
    }

    function hasError(path) {
      return !!vm.errors[path];
    }

    function errorFor(path) {
      return vm.errors[path] || '';
    }

    function supportMessage() {
      return vm.model.rpc ? protocolCatalogService.getSupportMessage(vm.model.rpc) : '';
    }

    function fingerprintMismatch() {
      return !!vm.model.catalogFingerprint &&
        vm.model.catalogFingerprint !== protocolCatalogService.getFingerprint();
    }

    function _notify() {
      if (vm._onChange) vm._onChange($scope);
    }

    function _isObject(value) {
      return value && Object.prototype.toString.call(value) === '[object Object]';
    }

    function _copyValue(value) {
      return Array.isArray(value) ? value.slice() : value;
    }
  }
})();
