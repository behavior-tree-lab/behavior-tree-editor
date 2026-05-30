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
    } catch(e) {
      ok = false;
    }
  }

  var service = {
    ok     : ok,
    fs     : (ok ? $window.require('fs') : null),
    path   : (ok ? $window.require('path') : null),
    dialog : dialog,
  };
  return service;

}
