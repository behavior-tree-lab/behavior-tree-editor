(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = [
    '$scope',
    '$window',
    'dialogService',
    'nodejsService',
    'projectModel',
    'notificationService'
  ];

  function AppController($scope,
                         $window,
                         dialogService,
                         nodejsService,
                         projectModel,
                         notificationService) {

    // HEAD //
    var vm = this;

    _active();

    // BODY //
    function _active() {
      if (nodejsService.ok && nodejsService.remote) {
        _installElectronCloseHandler();
      } else {
        window.onbeforeunload = _onBeforeCloseBrowser;
      }

      try {
        var gui = require('nw.gui');
        var win = gui.Window.get();

        win.on('close', function() {
          _onBeforeCloseDesktop(win);
        });
      } catch (e) {}
    }

    function _onBeforeCloseBrowser() {
      if ($window.editor.isDirty()) {
        return "Leaving now will erase your unsaved changes.";
      }
    }
    function _installElectronCloseHandler() {
      var win = nodejsService.remote.getCurrentWindow();
      var forceClose = false;

      win.on('close', function(event) {
        if (forceClose || !$window.editor.isDirty()) {
          return;
        }

        event.preventDefault();

        var choice = nodejsService.dialog.showMessageBoxSync(win, {
          type: 'warning',
          buttons: ['Save and Exit', 'Discard', 'Cancel'],
          defaultId: 0,
          cancelId: 2,
          title: 'Unsaved changes',
          message: 'Save changes before exiting?',
          detail: 'Your behavior tree has unsaved changes.'
        });

        if (choice === 2) {
          return;
        }

        function closeNow() {
          forceClose = true;
          win.close();
        }

        if (choice === 1) {
          closeNow();
          return;
        }

        projectModel.saveProject().then(closeNow, function(err) {
          var message = err && err.message ? err.message : 'Project could not be saved.';
          notificationService.error('Save failed', message);
        });
      });
    }
    function _onBeforeCloseDesktop(win) {
      if ($window.editor.isDirty()) {
        dialogService
          .confirm(
            'Leave without saving?', 
            'If you proceed you will lose all unsaved modifications.', 
            null)
          .then(function() {
            win.close(true);
          });
        return false;
      } else {
        win.close(true);
      }

    }
  }

})();
