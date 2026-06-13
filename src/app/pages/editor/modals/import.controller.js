(function() {
  'use strict';

  angular
    .module('app')
    .controller('ImportController', ImportController);

  ImportController.$inject = [
    '$scope',
    '$window',
    '$state',
    '$stateParams',
    'dialogService',
    'notificationService',
    'storageService',
    'projectModel'
  ];

  function ImportController($scope,
                            $window,
                            $state,
                            $stateParams,
                            dialogService,
                            notificationService,
                            storageService,
                            projectModel) {
    var vm = this;
    vm.type         = null;
    vm.format       = null;
    vm.open         = open;
    vm.loadFromFile = loadFromFile;
    vm.data         = '';
    // Path of the file the data was loaded from (if any), so a project import
    // can be saved back to that same file.
    vm.sourcePath   = null;

    _active();

    function _active() {
      vm.type = $stateParams.type;
      vm.format = $stateParams.format;
    }

    function loadFromFile() {
      dialogService
        .openFile(false, ['.b3', '.json'])
        .then(function(path) {
          vm.sourcePath = path;
          storageService
            .loadAsync(path)
            .then(function(data) {
              vm.data = JSON3.stringify(data, null, 2);
            });
        });
    }

    // marvel.b3 ships wrapped as {name, description, data, path}; the editor
    // works on the inner project ({trees, custom_nodes, ...}). Unwrap when the
    // outer envelope is detected so either shape imports cleanly.
    function _unwrap(parsed) {
      if (parsed && parsed.data && (parsed.data.trees || parsed.data.custom_nodes)) {
        return { inner: parsed.data, name: parsed.name, description: parsed.description };
      }
      return { inner: parsed, name: parsed.name, description: parsed.description };
    }

    function open() {
      var i = $window.editor.import;
      var parsed = JSON3.parse(vm.data);

      try {
        if (vm.type === 'project' && vm.format === 'json') {
          // Import Project = REPLACE the current project AND register it with
          // its file path, so Save writes back to that file (the old path only
          // initialized the editor and left currentProject null → save crashed).
          var u = _unwrap(parsed);
          projectModel.importProject(u.inner, vm.sourcePath, u.name);
        }
        else if (vm.type === 'tree' && vm.format === 'json') {
          var project = $window.editor.project.get();
          if (!project) throw new Error("cannot find project");
          project.trees.add(parsed.id);
          i.treeAsData(parsed);
        }
        else if (vm.type === 'nodes' && vm.format === 'json') {
          i.nodesAsData(parsed);
        }
      } catch(e) {
        notificationService.error(
          'Invalid data',
          'The provided data is invalid.'
        );
      }

      $state.go('editor');
    }
  }

})();