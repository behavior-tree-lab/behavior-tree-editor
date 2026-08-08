(function() {
  'use strict';

  angular
    .module('app')
    .controller('QuickAddController', QuickAddController);

  QuickAddController.$inject = [
    '$scope',
    '$timeout',
    '$element',
    'quickAddService'
  ];

  function QuickAddController($scope, $timeout, $element, quickAddService) {
    var vm = this;
    var focusPromise = null;

    vm.state = quickAddService.state;
    vm.setQuery = setQuery;
    vm.keydown = keydown;
    vm.dialogKeydown = dialogKeydown;
    vm.activate = activate;
    vm.choosePlacement = choosePlacement;
    vm.close = close;

    $scope.$watch(function() {
      return vm.state.open;
    }, function(isOpen) {
      if (!isOpen) return;
      _focusSearchAfterRender();
    });
    $scope.$watch(function() {
      return vm.state.status;
    }, function(status) {
      if (status === 'placement-required') {
        _focusAfterRender('.quick-add-placement-choice');
      }
    });
    $scope.$on('$destroy', destroy);

    function setQuery(query) {
      return quickAddService.setQuery(query);
    }

    function keydown(event) {
      if (!event || event.isComposing) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        return quickAddService.moveActive(1);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        return quickAddService.moveActive(-1);
      }
      if (event.key === 'Enter') {
        if (event.repeat) return;
        event.preventDefault();
        return quickAddService.activate();
      }
    }

    function dialogKeydown(event) {
      if (!event || event.isComposing) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        return quickAddService.close();
      }
      if (event.key !== 'Tab') return;

      var root = $element[0];
      var dialog = root && root.querySelector('.quick-add');
      if (!dialog || !dialog.querySelectorAll) return;
      var focusable = dialog.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), ' +
        '[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      var documentRef = root.ownerDocument;
      var active = documentRef && documentRef.activeElement;
      if (event.shiftKey && (active === first ||
          Array.prototype.indexOf.call(focusable, active) < 0)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last ||
                 Array.prototype.indexOf.call(focusable, active) < 0)) {
        event.preventDefault();
        first.focus();
      }
    }

    function activate(definition) {
      return quickAddService.activate(definition);
    }

    function choosePlacement(choice) {
      return quickAddService.choosePlacement(choice);
    }

    function close() {
      return quickAddService.close();
    }

    function destroy() {
      if (focusPromise) $timeout.cancel(focusPromise);
      close();
    }

    function _focusSearchAfterRender() {
      _focusAfterRender('.quick-add-search');
    }

    function _focusAfterRender(selector) {
      if (focusPromise) $timeout.cancel(focusPromise);
      focusPromise = $timeout(function() {
        focusPromise = null;
        if (!vm.state.open || !$element[0]) return;
        var target = $element[0].querySelector(selector);
        if (target && target.focus) target.focus();
      });
    }
  }
}());
