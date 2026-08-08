(function() {
  'use strict';

  angular
    .module('app')
    .directive('b3QuickAddCanvas', quickAddCanvas);

  quickAddCanvas.$inject = [
    '$window',
    'quickAddService'
  ];

  function quickAddCanvas($window, quickAddService) {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, element) {
      var canvas = element[0];
      if (!canvas || !canvas.addEventListener) return;

      canvas.addEventListener('keydown', onKeydown);
      canvas.addEventListener('contextmenu', onContextMenu);
      scope.$on('$destroy', destroy);

      function onKeydown(event) {
        var isSpace = event &&
          (event.key === ' ' || event.key === 'Spacebar' ||
           event.code === 'Space');
        if (!isSpace || event.repeat || !_isCanvasTarget(event, canvas) ||
            $window.document.activeElement !== canvas) return;

        var context = _context(false, event, canvas, $window);
        if (!context) return;

        event.preventDefault();
        scope.$evalAsync(function() {
          quickAddService.open(context);
        });
      }

      function onContextMenu(event) {
        if (!event || !_isCanvasTarget(event, canvas)) return;

        var context = _context(true, event, canvas, $window);
        if (!context) return;

        event.preventDefault();
        scope.$evalAsync(function() {
          quickAddService.open(context);
        });
      }

      function destroy() {
        canvas.removeEventListener('keydown', onKeydown);
        canvas.removeEventListener('contextmenu', onContextMenu);
        quickAddService.close();
      }
    }

    function _isCanvasTarget(event, canvas) {
      var target = event.target;
      if (target !== canvas || _isEditable(target)) return false;
      return true;
    }

    function _isEditable(target) {
      if (!target) return false;
      var tagName = String(target.tagName || '').toLowerCase();
      return target.isContentEditable || tagName === 'input' ||
        tagName === 'textarea' || tagName === 'select';
    }

    function _context(fromPointer, event, canvas, $window) {
      var editor = $window.editor;
      var project = editor && editor.project && editor.project.get ?
        editor.project.get() : null;
      var tree = project && project.trees && project.trees.getSelected ?
        project.trees.getSelected() : null;
      if (!project || !tree || !tree.blocks) return null;

      var selected = tree.blocks.getSelected ? tree.blocks.getSelected() : [];
      var parent = fromPointer ? null :
        (selected.length === 1 ? selected[0] : null);
      var position = _safePosition(tree, editor, parent);

      if (fromPointer) {
        position = tree.view && tree.view.getLocalPoint ?
          tree.view.getLocalPoint(event.clientX, event.clientY) : position;
        var hit = tree.blocks.getUnderPoint ?
          tree.blocks.getUnderPoint(position.x, position.y) : null;
        if (hit) {
          parent = hit;
          position = _safePosition(tree, editor, parent);
        }
      }

      return {
        project: project,
        tree: tree,
        parent: parent,
        position: {x: position.x, y: position.y},
        selectedBlocks: selected.slice ? selected.slice() : selected,
        invoker: canvas
      };
    }

    function _safePosition(tree, editor, anchor) {
      var layout = _setting(editor, 'layout') || 'horizontal';
      var horizontal = layout === 'horizontal';
      var gridName = horizontal ? 'snap_x' : 'snap_y';
      var grid = Number(_setting(editor, gridName)) || 1;
      var blocks = tree.blocks.getAll ? tree.blocks.getAll() : [];
      var root = tree.blocks.getRoot ? tree.blocks.getRoot() : null;
      var reference = anchor || root || blocks[0] || {x: 0, y: 0};
      var candidateWidth = Number(_setting(editor, 'block_action_width')) || 160;
      var candidateHeight = Number(_setting(editor, 'block_action_height')) || 40;

      if (horizontal) {
        var right = Number(reference.x) || 0;
        blocks.forEach(function(block) {
          var edge = (Number(block.x) || 0) +
            (Number(block._width) || candidateWidth)/2;
          if (edge > right) right = edge;
        });
        return {
          x: Math.ceil((right + candidateWidth/2 + grid)/grid)*grid,
          y: Number(reference.y) || 0
        };
      }

      var bottom = Number(reference.y) || 0;
      blocks.forEach(function(block) {
        var edge = (Number(block.y) || 0) +
          (Number(block._height) || candidateHeight)/2;
        if (edge > bottom) bottom = edge;
      });
      return {
        x: Number(reference.x) || 0,
        y: Math.ceil((bottom + candidateHeight/2 + grid)/grid)*grid
      };
    }

    function _setting(editor, name) {
      return editor && editor._settings && editor._settings.get ?
        editor._settings.get(name) : undefined;
    }
  }
}());
