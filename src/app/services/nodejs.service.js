angular
  .module('app')
  .factory('nodejsService', nodejsService);

nodejsService.$inject = ['$window'];

function nodejsService($window) {
  var ok = (typeof $window.require !== 'undefined');
  var remote = null;
  var dialog = null;

  if (ok) {
    try {
      remote = $window.require('@electron/remote');
      dialog = remote.dialog;
      dialog.showSaveDialogSync = dialog.showSaveDialogSync || function(options) {
        var result = dialog.showSaveDialog(options);
        return result && result.filePath;
      };
      dialog.showOpenDialogSync = dialog.showOpenDialogSync || function(options) {
        var result = dialog.showOpenDialog(options);
        return result && result.filePaths;
      };
    } catch(e) {
      ok = false;
    }
  }

  var service = {
    ok     : ok,
    fs     : (ok ? $window.require('fs') : null),
    path   : (ok ? $window.require('path') : null),
    remote : remote,
    dialog : dialog,
  };
  return service;

}
