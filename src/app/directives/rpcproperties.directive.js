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
	vm.responsePaths = [];
	vm.assertionFields = {};
	vm.assertionText = {};
    vm.errors = {};
	vm.booleanOptions = [
	  { value: true, label: 'true' },
	  { value: false, label: 'false' }
	];

    vm.setModel = setModel;
    vm.refreshSearch = refreshSearch;
    vm.selectRPC = selectRPC;
    vm.toggleField = toggleField;
    vm.changeField = changeField;
    vm.changeList = changeList;
	vm.addAssertion = addAssertion;
	vm.removeAssertion = removeAssertion;
	vm.changeAssertionPath = changeAssertionPath;
	vm.changeAssertion = changeAssertion;
	vm.changeAssertionList = changeAssertionList;
	vm.pathForAssertion = pathForAssertion;
	vm.addExtraction = addExtraction;
	vm.removeExtraction = removeExtraction;
	vm.changeExtraction = changeExtraction;
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
	  vm.responsePaths = protocolCatalogService.getResponsePaths(vm.model.rpc);
      vm.included = {};
      vm.listText = {};
      var request = _isObject(vm.model.request) ? vm.model.request : {};
      vm.fields.forEach(function(field) {
        vm.included[field.name] = request.hasOwnProperty(field.name);
        if (field.repeated && Array.isArray(request[field.name])) {
          vm.listText[field.name] = request[field.name].join(', ');
        }
      });
	  _refreshAssertions();
    }

	function _refreshAssertions() {
	  vm.assertionFields = {};
	  vm.assertionText = {};
	  var pathMap = {};
	  vm.responsePaths.forEach(function(field) { pathMap[field.path] = field; });
	  var assertions = Array.isArray(vm.model.assertions) ? vm.model.assertions : [];
	  assertions.forEach(function(assertion, index) {
		var field = pathMap[assertion.path] || null;
		vm.assertionFields[index] = field;
		if (field && field.repeated && Array.isArray(assertion.value)) {
		  vm.assertionText[index] = assertion.value.join(', ');
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

	function addAssertion() {
	  if (!Array.isArray(vm.model.assertions)) vm.model.assertions = [];
	  var field = vm.responsePaths[0];
	  vm.model.assertions.push({
		path: field ? field.path : '',
		op: 'eq',
		value: field ? _defaultValue(field) : ''
	  });
	  _refreshAssertions();
	  _revalidate();
	  _notify();
	}

	function removeAssertion(index) {
	  if (Array.isArray(vm.model.assertions)) vm.model.assertions.splice(index, 1);
	  _refreshAssertions();
	  _revalidate();
	  _notify();
	}

	function changeAssertionPath(index) {
	  var assertion = vm.model.assertions[index];
	  var field = _responsePath(assertion.path);
	  assertion.value = field ? _defaultValue(field) : '';
	  _refreshAssertions();
	  _revalidate();
	  _notify();
	}

	function changeAssertion() {
	  _revalidate();
	  _notify();
	}

	function changeAssertionList(index) {
	  var field = pathForAssertion(index);
	  if (!field) return;
	  vm.model.assertions[index].value = _parseList(
		vm.assertionText[index] || '', field.itemInputType);
	  changeAssertion();
	}

	function pathForAssertion(index) {
	  return vm.assertionFields[index] || null;
	}

	function _responsePath(path) {
	  for (var i = 0; i < vm.responsePaths.length; i++) {
		if (vm.responsePaths[i].path === path) return vm.responsePaths[i];
	  }
	  return null;
	}

	function addExtraction() {
	  if (!Array.isArray(vm.model.extract)) vm.model.extract = [];
	  vm.model.extract.push({
		path: vm.responsePaths.length ? vm.responsePaths[0].path : '',
		blackboardKey: ''
	  });
	  _revalidate();
	  _notify();
	}

	function removeExtraction(index) {
	  if (Array.isArray(vm.model.extract)) vm.model.extract.splice(index, 1);
	  _revalidate();
	  _notify();
	}

	function changeExtraction() {
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

	function _parseList(text, itemInputType) {
	  return text.split(/[,\n]/).map(function(value) {
		return value.trim();
	  }).filter(function(value) { return value.length > 0; }).map(function(value) {
		switch (itemInputType) {
		  case 'integer': return Number(value);
		  case 'float': return Number(value);
		  case 'bool':
			if (value === 'true') return true;
			if (value === 'false') return false;
			return value;
		  default: return value;
		}
	  });
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
