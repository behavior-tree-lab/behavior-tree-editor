(function() {
  "use strict";

  function outgoingChildren(block) {
    var children = [];
    var connections = (block && block._outConnections) || [];

    for (var i=0; i<connections.length; i++) {
      if (connections[i] && connections[i]._outBlock) {
        children.push({
          block: connections[i]._outBlock,
          connectionIndex: i
        });
      }
    }

    return children;
  }

  function reaches(start, target, visited) {
    if (start === target) return true;
    if (!start || !target) return false;

    visited = visited || [];
    if (visited.indexOf(start) >= 0) return false;
    visited.push(start);

    var children = outgoingChildren(start);
    for (var i=0; i<children.length; i++) {
      if (reaches(children[i].block, target, visited)) return true;
    }
    return false;
  }

  function reject(reason) {
    return {allowed: false, reason: reason};
  }

  function check(parent, child) {
    if (!parent || !child) return reject('missing-block');
    if (parent === child) return reject('self');
    if (child.category === 'root') return reject('target-root');
    if (parent.category !== 'root' &&
        parent.category !== 'decorator' &&
        parent.category !== 'composite') {
      return reject('parent-category');
    }
    if (child._inConnection) return reject('existing-parent');

    if ((parent.category === 'root' || parent.category === 'decorator') &&
        outgoingChildren(parent).length >= 1) {
      return reject('parent-capacity');
    }
    if (reaches(child, parent)) return reject('cycle');

    return {allowed: true, reason: null};
  }

  function getOrderedChildren(parent, layout) {
    var horizontal = layout === 'horizontal';
    var children = outgoingChildren(parent);

    children.sort(function(a, b) {
      var aPosition = horizontal ? a.block.y : a.block.x;
      var bPosition = horizontal ? b.block.y : b.block.x;
      var positionDifference = aPosition - bPosition;
      if (positionDifference !== 0) return positionDifference;
      return a.connectionIndex - b.connectionIndex;
    });

    return children.map(function(item) { return item.block; });
  }

  function snapStrictlyAfter(position, gridSize) {
    return (Math.floor(position/gridSize) + 1)*gridSize;
  }

  function getAppendPosition(parent, layout, gridSize) {
    var horizontal = layout === 'horizontal';
    var children = getOrderedChildren(parent, layout);
    var grid = Number(gridSize);
    if (isNaN(grid) || grid <= 0) grid = 1;

    if (children.length === 0) {
      return {
        x: Number(parent && parent.x) || 0,
        y: Number(parent && parent.y) || 0
      };
    }

    var last = children[children.length-1];
    if (horizontal) {
      return {
        x: Number(last.x) || 0,
        y: snapStrictlyAfter(Number(last.y) || 0, grid)
      };
    }
    return {
      x: snapStrictlyAfter(Number(last.x) || 0, grid),
      y: Number(last.y) || 0
    };
  }

  b3e.ConnectionPolicy = {
    check: check,
    getOrderedChildren: getOrderedChildren,
    getAppendPosition: getAppendPosition
  };
}());
