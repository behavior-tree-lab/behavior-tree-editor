b3e.editor.ConnectionSystem = function(editor) {
  "use strict";

  var connection = null;
  var lastOutBlock = null;
  var dataConnection = null;
  var dataSourceBlock = null;
  var dataSourcePin = null;

  this.update = function(delta) {};

  this.onMouseDown = function(e) {
    if (e.nativeEvent.which !== 1) return;

    var project = editor.project.get();
    if (!project) return;

    var tree = project.trees.getSelected();
    if (!tree) return;

    // if clicked on block
    var point = tree.view.getLocalPoint();
    var x = point.x;
    var y = point.y;
    var block = tree.blocks.getUnderPoint(x, y);

    if (connection || dataConnection || !block) return;

    var dataPin = block._hitDataPin ? block._hitDataPin(x, y) : null;
    if (dataPin && dataPin.direction === 'output') {
      dataConnection = new b3e.DataConnection();
      dataConnection._sourceBlock = block;
      dataConnection._sourcePin = dataPin.pin;
      dataConnection._applySettings(editor._settings);
      tree._connections.addChild(dataConnection);
      dataSourceBlock = block;
      dataSourcePin = dataPin;
      return;
    }

    if (block._hitOutAnchor(x, y)) {
      // if user clicked at the outAnchor
      connection = tree.connections.add(block, null);

    } else if (block._hitInAnchor(x, y)) {
      // if user clicked at the inAnchor
      var c = block._inConnection;
      if (!c)
          return;

      block._inConnection = null;
      c._outBlock = null;
      lastOutBlock = block;

      connection = c;
    }
  };

  this.onMouseMove = function(e) {
    // if no connection, return
    if (!connection && !dataConnection) return;

    var project = editor.project.get();
    if (!project) return;

    var tree = project.trees.getSelected();
    if (!tree) return;

    var point = tree.view.getLocalPoint();
    var x = point.x;
    var y = point.y;

    if (dataConnection) {
      dataConnection._redraw(null, null, x, y);
    } else {
      connection._redraw(null, null, x, y);
    }
  };

  this.onMouseUp = function(e) {
    if (e.nativeEvent.which !== 1) return;

    // if no connection, return
    if (!connection && !dataConnection) return;

    var project = editor.project.get();
    if (!project) return;

    var tree = project.trees.getSelected();
    if (!tree) return;


    var point = tree.view.getLocalPoint();
    var x = point.x;
    var y = point.y;
    var block = tree.blocks.getUnderPoint(x, y);

    if (dataConnection) {
      var targetPin = block && block._hitDataPin ? block._hitDataPin(x, y) : null;
      if (block && targetPin &&
          block._canConnectDataPin(targetPin, dataSourcePin, dataSourceBlock)) {
        var removed = block._removeDataConnection(targetPin.pin);
        if (removed) tree._connections.removeChild(removed);

        dataConnection._targetBlock = block;
        dataConnection._targetPin = targetPin.pin;
        dataConnection._redraw();
        block._addDataConnection(targetPin.pin, dataSourceBlock.id,
                                 dataSourcePin.pin, dataConnection);
        editor.trigger('dataconnectionadded', dataConnection);
      } else {
        tree._connections.removeChild(dataConnection);
      }

      dataConnection = null;
      dataSourceBlock = null;
      dataSourcePin = null;
      return;
    }

    // if not connection or connection but no block
    project.history._beginBatch();
    if (!block || block === connection._inBlock || block.category === 'root') {
      if (lastOutBlock) {
        // Add again to connection in order to create history 
        lastOutBlock._inConnection = connection;
        connection._outBlock = lastOutBlock;
      }
      tree.connections.remove(connection);
    } else {
      var c;

      // if double parent on node
      if (block._inConnection) {

        c = block._inConnection;
        tree.connections.remove(c);
      }

      // if double children on root
      if ((connection._inBlock.category === 'root' ||
           connection._inBlock.category === 'decorator') &&
           connection._inBlock._outConnections.length > 1) {

        c = connection._inBlock._outConnections[0];
        tree.connections.remove(c);
      }

      connection._outBlock = block;
      block._inConnection = connection;

      var _old = [tree.connections, tree.connections._remove, [block]];
      var _new = [tree.connections, tree.connections.add, [connection._inBlock, block]];
      project.history._add(new b3e.Command(_old, _new));

      connection._redraw();
    }
    project.history._endBatch();

    connection = null;
  };

  editor._game.stage.on('stagemousedown', this.onMouseDown, this);
  editor._game.stage.on('stagemousemove', this.onMouseMove, this);
  editor._game.stage.on('stagemouseup', this.onMouseUp, this);
};
