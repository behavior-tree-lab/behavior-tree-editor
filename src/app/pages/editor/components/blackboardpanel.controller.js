(function() {
  'use strict';

  angular
    .module('app')
    .controller('BlackboardpanelController', BlackboardpanelController);

  BlackboardpanelController.$inject = ['$scope', 'debugService'];

  function BlackboardpanelController($scope, debugService) {
    var vm = this;

    // entries is an array of {key, value} for ng-repeat, sorted by key so the
    // panel doesn't reshuffle each frame.
    vm.entries = [];
    vm.isConnected = debugService.isConnected;

    var _listener = debugService.onBlackboardChange(_render);
    _render(debugService.getBlackboard());

    $scope.$on('$destroy', function() {
      debugService.offBlackboardChange(_listener);
    });

    function _render(blackboard) {
      var entries = [];
      for (var k in blackboard) {
        if (blackboard.hasOwnProperty(k)) {
          entries.push({ key: k, value: _format(blackboard[k]) });
        }
      }
      entries.sort(function(a, b) { return a.key < b.key ? -1 : (a.key > b.key ? 1 : 0); });
      vm.entries = entries;
      // The socket callback runs inside $applyAsync, so a digest is already
      // scheduled; no manual $apply needed here.
    }

    // Render values compactly: objects/arrays as JSON, primitives as-is.
    function _format(v) {
      if (v === null || v === undefined) return String(v);
      if (typeof v === 'object') {
        try { return JSON.stringify(v); } catch (e) { return String(v); }
      }
      return v;
    }
  }
})();
