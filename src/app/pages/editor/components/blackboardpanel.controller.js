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

    // Maximum characters shown for a single value; longer ones are truncated so
    // one big object (e.g. a whole game object stashed in the blackboard) can't
    // blow up the panel.
    var MAX_LEN = 200;

    // Render values compactly. Primitives show as-is; arrays show a length tag;
    // objects show a short JSON preview (truncated). This keeps the panel
    // readable even when the runtime stuffs large structs into the blackboard.
    function _format(v) {
      if (v === null || v === undefined) return String(v);

      if (Array.isArray(v)) {
        return _truncate('[array(' + v.length + ')] ' + _safeJSON(v));
      }
      if (typeof v === 'object') {
        return _truncate('{object} ' + _safeJSON(v));
      }
      return _truncate(String(v));
    }

    function _safeJSON(v) {
      try { return JSON.stringify(v); } catch (e) { return '(unserializable)'; }
    }

    function _truncate(s) {
      if (s.length > MAX_LEN) return s.slice(0, MAX_LEN) + '… (' + s.length + ' chars)';
      return s;
    }
  }
})();
