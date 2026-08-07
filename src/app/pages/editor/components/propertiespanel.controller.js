(function() {
  'use strict';

  angular
    .module('app')
    .controller('PropertiespanelController', PropertiespanelController);

  PropertiespanelController.$inject = [
    '$scope',
    '$window',
    'schemaService'
  ];

  function PropertiespanelController($scope,
                                     $window,
                                     schemaService) {
    var vm = this;
    vm.original = null;
    vm.block = null;
    vm.schema = null;            // NodeSchema for the selected block, or null
    vm.hasSchema = false;        // true => render typed panel, false => keytable
	vm.isRpcCall = false;
    vm.update = update;
    vm.keydown = keydown;

    // Load the bundled schema once (offline, cached singleton) [C1].
    schemaService.loadSchema();

    _create();
    _activate();

    $scope.$on('$destroy', _destroy);

    function _activate() {
      var p = $window.editor.project.get();
      if (!p) return;
      var t = p.trees.getSelected();
      var s = t.blocks.getSelected();

      if (s.length === 1) {
        vm.original = s[0];
        vm.block = {
          name        : vm.original.name,
          title       : vm.original.title,
          description : vm.original.description,
		  properties  : angular.copy(vm.original.properties || {})
        };
        // Resolve the schema for this node type; null for custom/unknown nodes,
        // in which case the view falls back to the generic key-table [3.3].
        vm.schema = schemaService.getNodeSchema(vm.original.name);
        vm.hasSchema = !!vm.schema;
		vm.isRpcCall = vm.original.name === 'RpcCall';
      } else {
        vm.original = false;
        vm.block = false;
        vm.schema = null;
        vm.hasSchema = false;
		vm.isRpcCall = false;
      }
    }
    function _event(e) {
      setTimeout(function() {$scope.$apply(function() { _activate(); });}, 0);

    }
    function _create() {
      $window.editor.on('blockselected', _event);
      $window.editor.on('blockdeselected', _event);
      $window.editor.on('blockremoved', _event);
      $window.editor.on('treeselected', _event);
      $window.editor.on('nodechanged', _event);
    }
    function _destroy() {
      $window.editor.off('blockselected', _event);
      $window.editor.off('blockdeselected', _event);
      $window.editor.off('blockremoved', _event);
      $window.editor.off('treeselected', _event);
      $window.editor.off('nodechanged', _event);
    }

    function keydown(e) {
      if (e.ctrlKey && e.keyCode == 90) {
        e.preventDefault();
      }

      return false;
    }

    function update() {
      var p = $window.editor.project.get();
      var t = p.trees.getSelected();
	  var changes = tine.merge({}, vm.block);
	  changes.properties = angular.copy(vm.block.properties || {});
	  t.blocks.update(vm.original, changes);
    }
  }
})();
