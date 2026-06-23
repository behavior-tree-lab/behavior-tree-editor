(function() {
  'use strict';

  angular
    .module('app')
    .controller('MenubarController', MenubarController);

  MenubarController.$inject = [
    '$scope',
    '$window',
    '$state',
    'dialogService',
    'projectModel',
    'notificationService',
    'debugService'
  ];

  function MenubarController($scope,
                             $window,
                             $state,
                             dialogService,
                             projectModel,
                             notificationService,
                             debugService) {
    var vm = this;
    vm.onNewTree           = onNewTree;
    vm.onCloseProject      = onCloseProject;
    vm.onSaveProject       = onSaveProject;
    vm.onExportProjectJson = onExportProjectJson;
    vm.onExportTreeJson    = onExportTreeJson;
    vm.onExportNodesJson   = onExportNodesJson;
    vm.onImportProjectJson = onImportProjectJson;
    vm.onImportTreeJson    = onImportTreeJson;
    vm.onImportNodesJson   = onImportNodesJson;
    vm.onUndo              = onUndo;
    vm.onRedo              = onRedo;
    vm.onCopy              = onCopy;
    vm.onCut               = onCut;
    vm.onPaste             = onPaste;
    vm.onDuplicate         = onDuplicate;
    vm.onRemove            = onRemove;
    vm.onRemoveAllConns    = onRemoveAllConns;
    vm.onRemoveInConns     = onRemoveInConns;
    vm.onRemoveOutConns    = onRemoveOutConns;
    vm.onAutoOrganize      = onAutoOrganize;
    vm.onZoomIn            = onZoomIn;
    vm.onZoomOut           = onZoomOut;
    vm.onSelectAll         = onSelectAll;
    vm.onDeselectAll       = onDeselectAll;
    vm.onInvertSelection   = onInvertSelection;
    vm.onDebugConnect      = onDebugConnect;
    vm.onDebugDisconnect   = onDebugDisconnect;
    vm.isDebugConnected    = debugService.isConnected;
    vm.onToggleBreakpoint  = onToggleBreakpoint;
    vm.onClearBreakpoints  = onClearBreakpoints;
    vm.onDebugContinue     = onDebugContinue;
    vm.onDebugStep         = onDebugStep;
    vm.isDebugPaused       = debugService.isPaused;

    var _debugListener = null;
    var _pauseListener = null;

    _create();
    _activate();
    $scope.$on('$destroy', _destroy);

    function _activate() {
    }

    // --- real-time debugging ---

    function onDebugConnect() {
      dialogService
        .prompt(
          'Connect to debugger',
          'WebSocket address of the running Go program:',
          'input',
          'ws://localhost:6112/debug')
        .then(function(url) {
          debugService.connect(url || 'ws://localhost:6112/debug');
          _debugListener = debugService.onStatusChange(_applyDebugStatuses);
          _pauseListener = debugService.onPauseChange(_applyPaused);
        });
      return false;
    }

    function onDebugDisconnect() {
      if (_debugListener) {
        debugService.offStatusChange(_debugListener);
        _debugListener = null;
      }
      if (_pauseListener) {
        debugService.offPauseChange(_pauseListener);
        _pauseListener = null;
      }
      debugService.disconnect();
      _clearDebugStatuses();
      return false;
    }

    // Toggle a breakpoint on the single selected block.
    function onToggleBreakpoint() {
      var tree = _getTree();
      if (!tree) return false;
      var selected = tree.blocks.getSelected();
      if (selected.length !== 1) {
        notificationService.warning('Breakpoint', 'Select a single node first.');
        return false;
      }
      var block = selected[0];
      if (block.category === 'root') {
        notificationService.warning('Breakpoint', 'Cannot break on the root node.');
        return false;
      }
      var on = debugService.toggleBreakpoint(block.id);
      block._setBreakpoint(on);
      return false;
    }

    function onClearBreakpoints() {
      debugService.clearAllBreakpoints();
      var tree = _getTree();
      if (tree) {
        tree.blocks.each(function(block) { block._setBreakpoint(false); });
      }
      return false;
    }

    function onDebugContinue() {
      debugService.continueRun();
      return false;
    }

    function onDebugStep() {
      debugService.step();
      return false;
    }

    // Run a callback for every block across ALL trees in the project. Status
    // frames carry node ids from whatever subtree is executing (login_tree,
    // hall_tree, ...), so highlighting must reach blocks in any tree, not only
    // the one currently selected.
    function _eachBlock(fn) {
      var project = _getProject();
      if (!project) return;
      project.trees.each(function(tree) {
        tree.blocks.each(fn);
      });
    }

    // Mark the paused node (amber halo); clear it elsewhere.
    function _applyPaused(pausedNodeId) {
      _eachBlock(function(block) {
        block._setPaused(block.id === pausedNodeId);
      });
    }

    /**
     * Paint each block's outline according to the live status map. Blocks not
     * present in the map are left unhighlighted. Applied across all trees so
     * subtree execution is visible whichever tree you have open.
     */
    function _applyDebugStatuses(statuses) {
      _eachBlock(function(block) {
        if (block.category === 'root') return;
        block._setDebugStatus(statuses[block.id] || null);
      });
    }

    function _clearDebugStatuses() {
      _eachBlock(function(block) {
        block._setDebugStatus(null);
      });
    }

    // Wrap a debug action so a keyboard shortcut runs it inside a digest.
    function _shortcut_debug(fn) {
      return function() {
        if (!$scope.$$phase) {
          $scope.$apply(fn);
        } else {
          fn();
        }
        return false;
      };
    }

    function _shortcut_projectclose(f) {
      if (!$scope.$$phase) {
        $scope.$apply(function() { onCloseProject(); });
      } else {
        onCloseProject();
      }
      return false;
    }
    function _shortcut_projectsave(f) {
      if (!$scope.$$phase) { 
        $scope.$apply(function() { onSaveProject(); });
      } else {
        onSaveProject();
      }
      return false;
    }
    function _create() {
      Mousetrap.bind('ctrl+q', _shortcut_projectclose);
      Mousetrap.bind('ctrl+s', _shortcut_projectsave);
      Mousetrap.bind('ctrl+z', onUndo);
      Mousetrap.bind('ctrl+shift+z', onRedo);
      Mousetrap.bind('ctrl+c', onCopy);
      Mousetrap.bind('ctrl+v', onPaste);
      Mousetrap.bind('ctrl+x', onCut);
      Mousetrap.bind('ctrl+d', onDuplicate);
      Mousetrap.bind('del', onRemove);
      Mousetrap.bind('a', onAutoOrganize);
      Mousetrap.bind('ctrl+a', onSelectAll);
      Mousetrap.bind('ctrl+shift+a', onDeselectAll);
      Mousetrap.bind('ctrl+i', onInvertSelection);
      Mousetrap.bind('f9', _shortcut_debug(onToggleBreakpoint));
      Mousetrap.bind('f8', _shortcut_debug(onDebugContinue));
      Mousetrap.bind('f10', _shortcut_debug(onDebugStep));
    }
    function _destroy() {
      Mousetrap.unbind('ctrl+q', _shortcut_projectclose);
      Mousetrap.unbind('ctrl+s', _shortcut_projectsave);
      Mousetrap.unbind('ctrl+z', onUndo);
      Mousetrap.unbind('ctrl+shift+z', onRedo);
      Mousetrap.unbind('ctrl+c', onCopy);
      Mousetrap.unbind('ctrl+v', onPaste);
      Mousetrap.unbind('ctrl+x', onCut);
      Mousetrap.unbind('ctrl+d', onDuplicate);
      Mousetrap.unbind('del', onRemove);
      Mousetrap.unbind('a', onAutoOrganize);
      Mousetrap.unbind('ctrl+a', onSelectAll);
      Mousetrap.unbind('ctrl+shift+a', onDeselectAll);
      Mousetrap.unbind('ctrl+i', onInvertSelection);
      Mousetrap.unbind('f9');
      Mousetrap.unbind('f8');
      Mousetrap.unbind('f10');

      if (_debugListener) {
        debugService.offStatusChange(_debugListener);
        _debugListener = null;
      }
      if (_pauseListener) {
        debugService.offPauseChange(_pauseListener);
        _pauseListener = null;
      }
    }

    function _getProject() {
      return $window.editor.project.get();
    }
    function _getTree() {
      var project = $window.editor.project.get();
      return project.trees.getSelected();
    }

    function onExportProjectJson() {
      $state.go('editor.export', {type:'project', format:'json'});
      return false;
    }
    function onExportTreeJson() {
      $state.go('editor.export', {type:'tree', format:'json'});
      return false;
    }
    function onExportNodesJson() {
      $state.go('editor.export', {type:'nodes', format:'json'});
      return false;
    }
    function onImportProjectJson() {
      $state.go('editor.import', {type:'project', format:'json'});
      return false;
    }
    function onImportTreeJson() {
      $state.go('editor.import', {type:'tree', format:'json'});
      return false;
    }
    function onImportNodesJson() {
      $state.go('editor.import', {type:'nodes', format:'json'});
      return false;
    }

    function onCloseProject() {
      function doClose() {
        projectModel.closeProject();
        $state.go('dash.projects');
      }

      if ($window.editor.isDirty()) {
        dialogService
          .confirm(
            'Leave without saving?', 
            'If you proceed you will lose all unsaved modifications.', 
            null)
          .then(doClose);
      } else {
        doClose();
      }

      return false;
    }
    function onSaveProject() {
      _saveProject()
        .then(function() {
          notificationService.success(
            'Project saved',
            'The project has been saved'
          );
        }, function(err) {
          var message = err && err.message ? err.message : 'Project couldn\'t be saved';
          notificationService.error(
            'Error',
            message
          );
        });
      return false;
    }
    function _saveProject() {
      var project = projectModel.getProject();
      if (project && !project.path) {
        return dialogService
          .saveAs(project.name || 'project', ['.b3', '.json'])
          .then(function(path) {
            return projectModel.saveAsProject(path, project);
          });
      }
      return projectModel.saveProject();
    }
    function onNewTree() {
      var project = _getProject();
      project.trees.add();
      return false;
    }
    function onUndo() {
      var project = _getProject();
      project.history.undo();
      return false;
    }
    function onRedo() {
      var project = _getProject();
      project.history.redo();
      return false;
    }
    function onCopy() {
      var tree = _getTree();
      tree.edit.copy(); 
      return false;
    }
    function onCut() {
      var tree = _getTree();
      tree.edit.cut();
      return false;
    }
    function onPaste() {
      var tree = _getTree();
      tree.edit.paste();
      return false;
    }
    function onDuplicate() {
      var tree = _getTree();
      tree.edit.duplicate();
      return false;
    }
    function onRemove() {
      var tree = _getTree();
      tree.edit.remove();
      return false;
    }
    function onRemoveAllConns() {
      var tree = _getTree();
      tree.edit.removeConnections();
      return false;
    }
    function onRemoveInConns() {
      var tree = _getTree();
      tree.edit.removeInConnections();
      return false;
    }
    function onRemoveOutConns() {
      var tree = _getTree();
      tree.edit.removeOutConnections();
      return false;
    }
    function onAutoOrganize() {
      var tree = _getTree();
      tree.organize.organize();
      return false;
    }
    function onZoomIn() {
      var tree = _getTree();
      tree.view.zoomIn();
      return false;
    }
    function onZoomOut() {
      var tree = _getTree();
      tree.view.zoomOut();
      return false;
    }
    function onSelectAll() {
      var tree = _getTree();
      tree.selection.selectAll();
      return false;
    }
    function onDeselectAll() {
      var tree = _getTree();
      tree.selection.deselectAll();
      return false;
    }
    function onInvertSelection() {
      var tree = _getTree();
      tree.selection.invertSelection();
      return false;
    }
  }
})();
