/** @module b3e */

(function () {
  "use strict";

  /**
   * The Block is an instance of a Node that is drawn into the canvas.
   *
   * @class Block
   * @constructor
   * @param {Object} node A `b3e.Node` object.
   */
  var Block = function(node) {
    this.Container_constructor();

    var dict = node.prototype || node;
    this.id          = b3.createUUID();
    this.node        = node;
    this.name        = dict.name;
    this.title       = dict.title || this.name;
    this.category    = dict.category;
    this.description = dict.description || '';
    this.properties  = tine.merge({}, dict.properties);

    this._settings = null;
    this._inConnection = null;
    this._outConnections = [];
    this._isSelected = null;
    this._isDragging = null;
    this._dragOffsetX = null;
    this._dragOffsetY = null;
    this._width = null;
    this._height = null;
    this._displayShape = new createjs.Shape();
    this._displaySymbol = null;
    this._displayShadow = null;
    // Real-time debugging: overlay drawn when a runtime status is set.
    this._debugStatus = null;
    this._debugShape = null;
    // Breakpoint marker (red dot) and paused-at-this-node flag.
    this._debugBreakpoint = false;
    this._debugPaused = false;
    this._debugMarkers = null;
    // Data-pin wiring (Unreal-blueprint-style). Each entry links one of THIS
    // block's input pins to a (sourceBlockId, sourcePin) producer. Purely an
    // editor concern: exported as `dataConnections`, ignored by the runtime.
    // Shape: { targetPin, sourceNodeId, sourcePin, connection }.
    // `connection` is the b3e.DataConnection display object (may be null until
    // the wire is drawn). One input pin holds at most one entry (last-wins).
    this._dataConnections = [];
    this._dataPinMarkers = null;
  };
  var p = createjs.extend(Block, createjs.Container);

  function getSchemaForBlock(block) {
    if (typeof b3e.schema === 'undefined' || !b3e.schema || !b3e.schema.nodes) {
      return null;
    }
    return b3e.schema.nodes[block.name] || null;
  }

  function normalizePin(pin, direction) {
    return {
      pin       : pin.pin,
      type      : pin.type || '',
      direction : direction,
      label     : pin.label || pin.pin,
      description : pin.description || '',
      blackboardKey : pin.blackboardKey || '',
      sourcePath : pin.sourcePath || '',
      targetPath : pin.targetPath || '',
      valuePath : pin.valuePath || ''
    };
  }

  function isCanvasDataPin(pin, direction) {
    if (!pin || !pin.pin) return false;
    if (direction === 'output') return true;
    if (pin.blackboardKey || pin.source || pin.from || pin.data === true) return true;
    return pin.type === 'uint64list';
  }

  function getDataPinColor(pin, settings) {
    var fallback = (settings && settings.get('data_connection_color')) || '#2ECC71';
    if (!pin || !pin.type) return fallback;
    if (pin.type === 'uint64list') return '#20D67B';
    if (pin.type === 'int' || pin.type === 'float') return '#F4B942';
    if (pin.type === 'bool') return '#4DB5FF';
    if (pin.type === 'string') return '#D78BFF';
    return fallback;
  }

  function getDataPinLabelWidth(pin) {
    var label = (pin && (pin.label || pin.pin)) || '';
    var meta = getDataPinMeta(pin);
    return Math.max(88, Math.min(158, Math.max(label.length, meta.length) * 5.5 + 30));
  }

  function getDataPinMeta(pin) {
    if (!pin) return '';
    if (pin.valuePath) return pin.valuePath;
    if (pin.sourcePath) return pin.sourcePath;
    if (pin.targetPath) return pin.targetPath;
    if (pin.blackboardKey) return pin.blackboardKey;
    return pin.type || '';
  }

  function hasDataConnection(block, pin) {
    if (!block._dataConnections || !pin || pin.direction !== 'input') return false;
    for (var i = 0; i < block._dataConnections.length; i++) {
      if (block._dataConnections[i].targetPin === pin.pin) return true;
    }
    return false;
  }
  
  /**
   * Apply the editor settings to this block.
   *
   * @method _applySettings
   * @param Object {b3e.SettingsManager} The settings object.
   * @protected
   */
  p._applySettings = function(settings) {
    this._settings = settings;

    var color = this._settings.get('selection_color');
    this._displayShadow = new createjs.Shadow(color, 0, 0, 5);
    this._redraw();
  };

  /**
   * Redraw the block.
   *
   * @method _redraw
   * @protected
   */
  p._redraw = function() {
    var name = this.name;
    var category = this.category.toLowerCase();
    var shape = b3e.draw.SHAPES[category];
    var symbol = b3e.draw.SYMBOLS[name] || b3e.draw.textSymbol;

    this._width = this._settings.get('block_'+category+'_width');
    this._height = this._settings.get('block_'+category+'_height');
    this.removeAllChildren();

    this._displaySymbol = symbol(this, this._settings);
    this._displayShape.graphics.clear();
    this._displayShape = shape(this, this._settings);

    this.addChild(this._displayShape);
    this.addChild(this._displaySymbol);

    // Re-apply the debug overlay if one is active, since removeAllChildren
    // above dropped it.
    if (this._debugStatus) this._setDebugStatus(this._debugStatus);
    this._redrawDebugMarkers();
    // removeAllChildren above also dropped the data-pin markers; re-apply them
    // exactly like the debug overlay so a category-change/import redraw does
    // not silently lose the pin indicators [C4].
    this._redrawDataPins();
  };

  /**
   * Resolve the highlight color for a status from settings, keyed by the
   * `debug_<status>_color` setting.
   */
  p._debugColor = function(status) {
    return this._settings.get('debug_' + status + '_color');
  };

  /**
   * Draw (or clear) a colored outline reflecting the node's live runtime
   * status. Pass a falsy status to remove the overlay.
   *
   * Colors and outline width come from settings (`debug_*_color`,
   * `debug_outline_width`), so they are configurable on the Settings page.
   *
   * @method _setDebugStatus
   * @param {String} status One of 'running'|'success'|'failure'|'error', or
   *   null/undefined to clear.
   * @protected
   */
  p._setDebugStatus = function(status) {
    this._debugStatus = status || null;

    if (this._debugShape) {
      this.removeChild(this._debugShape);
      this._debugShape = null;
    }
    if (!status) return;

    var color = this._debugColor(status);
    if (!color) return;

    var width = this._settings.get('debug_outline_width') || 5;
    var w = this._width;
    var h = this._height;
    var pad = 8;
    var shape = new createjs.Shape();
    // Thick, clearly-offset outline plus a glow so the highlight reads even
    // over a filled node body.
    shape.graphics
      .setStrokeStyle(width, 'round')
      .beginStroke(color)
      .drawRoundRect(-w/2-pad, -h/2-pad, w+2*pad, h+2*pad, 8);
    shape.graphics.endStroke();
    shape.shadow = new createjs.Shadow(color, 0, 0, 12);

    this._debugShape = shape;
    // Draw the overlay UNDER the node body/symbol so the node text stays
    // readable; addChildAt(...,0) puts it at the back of this container.
    this.addChildAt(shape, 0);
  };

  /**
   * Mark or unmark this block as having a breakpoint (red dot, top-left).
   * @method _setBreakpoint
   * @param {Boolean} on
   * @protected
   */
  p._setBreakpoint = function(on) {
    this._debugBreakpoint = !!on;
    this._redrawDebugMarkers();
  };

  /**
   * Mark or unmark this block as the node the tick is paused on (amber halo).
   * @method _setPaused
   * @param {Boolean} on
   * @protected
   */
  p._setPaused = function(on) {
    this._debugPaused = !!on;
    this._redrawDebugMarkers();
  };

  /**
   * Redraw the breakpoint dot and paused halo from the current flags. Kept
   * separate from the status overlay so the two can change independently.
   * @method _redrawDebugMarkers
   * @protected
   */
  p._redrawDebugMarkers = function() {
    if (this._debugMarkers) {
      this.removeChild(this._debugMarkers);
      this._debugMarkers = null;
    }
    if (!this._debugBreakpoint && !this._debugPaused) return;

    var w = this._width;
    var h = this._height;
    var markers = new createjs.Shape();
    var g = markers.graphics;

    if (this._debugPaused) {
      // Amber halo around the whole block to mark "frozen here".
      var pad = 10;
      g.setStrokeStyle(3, 'round')
       .beginStroke('#F1C40F')
       .drawRoundRect(-w/2-pad, -h/2-pad, w+2*pad, h+2*pad, 10)
       .endStroke();
      markers.shadow = new createjs.Shadow('#F1C40F', 0, 0, 14);
    }

    if (this._debugBreakpoint) {
      // Red dot at the top-left corner.
      g.beginFill('#E74C3C').drawCircle(-w/2, -h/2, 6).endFill();
    }

    this._debugMarkers = markers;
    this.addChild(markers); // on top, so the dot/halo are always visible
  };

  /**
   * Draw a small marker per wired input pin so a wired node reads as "has a
   * data link". Conservative + GUI-unverified: a single dot on the in-anchor
   * side indicates one or more wired inputs. The dot is purely cosmetic; the
   * connection geometry itself is drawn by b3e.DataConnection in the tree's
   * connection layer. Re-applied from `_redraw` after `removeAllChildren`.
   *
   * @method _redrawDataPins
   * @protected
   */
  p._redrawDataPins = function() {
    if (this._dataPinMarkers) {
      this.removeChild(this._dataPinMarkers);
      this._dataPinMarkers = null;
    }

    var w = this._width;
    var h = this._height;
    var pins = this._getDataPins();
    if ((!pins || pins.length === 0) &&
        (!this._dataConnections || this._dataConnections.length === 0)) {
      return;
    }

    var marker = new createjs.Container();
    for (var i = 0; i < pins.length; i++) {
      var pin = pins[i];
      var pos = this._getDataPinPosition(pin);
      var color = getDataPinColor(pin, this._settings);
      var rowWidth = getDataPinLabelWidth(pin);
      var rowHeight = getDataPinMeta(pin) ? 28 : 18;
      var localX = pos.x - this.x;
      var localY = pos.y - this.y;
      var isOutput = pin.direction === 'output';
      var connected = isOutput || hasDataConnection(this, pin);

      var stem = new createjs.Shape();
      stem.graphics
        .setStrokeStyle(2, 'round')
        .beginStroke(color)
        .moveTo(isOutput ? w/2 - 2 : -w/2 + 2, localY)
        .lineTo(localX, localY)
        .endStroke();
      marker.addChild(stem);

      var tray = new createjs.Shape();
      var trayX = isOutput ? (w/2 - rowWidth + 10) : (-w/2 - 10);
      tray.graphics
        .beginFill('rgba(14, 21, 18, 0.94)')
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(255, 255, 255, 0.18)')
        .drawRoundRect(trayX, localY - rowHeight/2, rowWidth, rowHeight, 5)
        .endStroke()
        .endFill();
      marker.addChild(tray);

      var label = new createjs.Text(pin.label || pin.pin, '11px Arial', '#E8F5EE');
      label.textAlign = isOutput ? 'right' : 'left';
      label.x = isOutput ? (w/2 - 11) : (-w/2 + 11);
      label.y = getDataPinMeta(pin) ? localY - 13 : localY - 7;
      marker.addChild(label);

      var meta = getDataPinMeta(pin);
      if (meta) {
        var metaText = new createjs.Text(meta, '9px Arial', 'rgba(210, 224, 216, 0.72)');
        metaText.textAlign = isOutput ? 'right' : 'left';
        metaText.x = label.x;
        metaText.y = localY + 1;
        marker.addChild(metaText);
      }

      var dot = new createjs.Shape();
      dot.graphics
        .beginFill('#111916')
        .drawCircle(localX, localY, 8)
        .endFill()
        .setStrokeStyle(3, 'round')
        .beginStroke(color)
        .drawCircle(localX, localY, 8)
        .endStroke();
      marker.addChild(dot);

      if (connected) {
        var core = new createjs.Shape();
        core.graphics.beginFill(color).drawCircle(localX, localY, 4).endFill();
        marker.addChild(core);
      }
    }

    if (this._dataConnections && this._dataConnections.length > 0) {
      var glow = new createjs.Shape();
      // Thin status strip on the bottom edge so wired consumers still read as
      // "data-fed" when zoomed out.
      glow.graphics
        .beginFill('rgba(32, 214, 123, 0.28)')
        .drawRoundRect(-w/2 + 12, h/2 - 5, w - 24, 3, 2)
        .endFill();
      marker.addChildAt(glow, 0);
    }

    this._dataPinMarkers = marker;
    this.addChild(marker);
  };

  /**
   * Return schema-declared data pins for this block. Direction may be
   * "input", "output", or omitted for both.
   *
   * @method _getDataPins
   * @param {String} direction
   * @returns {Array}
   * @protected
   */
  p._getDataPins = function(direction) {
    var schema = getSchemaForBlock(this);
    if (!schema) return [];
    var pins = [];
    if (!direction || direction === 'input') {
      var inputs = schema.inputs || [];
      for (var i = 0; i < inputs.length; i++) {
        if (isCanvasDataPin(inputs[i], 'input')) {
          pins.push(normalizePin(inputs[i], 'input'));
        }
      }
    }
    if (!direction || direction === 'output') {
      var outputs = schema.outputs || [];
      for (var j = 0; j < outputs.length; j++) {
        if (isCanvasDataPin(outputs[j], 'output')) {
          pins.push(normalizePin(outputs[j], 'output'));
        }
      }
    }
    return pins;
  };

  p._getDataPinPosition = function(pin) {
    var pins = this._getDataPins(pin.direction);
    var index = 0;
    for (var i = 0; i < pins.length; i++) {
      if (pins[i].pin === pin.pin) {
        index = i;
        break;
      }
    }

    var spacing = 22;
    var total = Math.max(1, pins.length);
    var offset = (index - (total - 1) / 2) * spacing;
    var anchorOffset = (this._settings && this._settings.get('anchor_offset_x')) || 4;
    var edgeOffset = anchorOffset + 6;
    var rowY = this._height/2 - 16;

    if (this._settings && this._settings.get('layout') !== 'horizontal') {
      return {
        x: this.x + offset,
        y: this.y + (pin.direction === 'output' ? this._height/2 + edgeOffset :
                                                   -this._height/2 - edgeOffset)
      };
    }

    return {
      x: this.x + (pin.direction === 'output' ? this._width/2 + edgeOffset :
                                                 -this._width/2 - edgeOffset),
      y: this.y + rowY + offset
    };
  };

  p._hitDataPin = function(x, y) {
    var pins = this._getDataPins();
    var radius = 13;
    for (var i = 0; i < pins.length; i++) {
      var pos = this._getDataPinPosition(pins[i]);
      var dx = x - pos.x;
      var dy = y - pos.y;
      if (dx * dx + dy * dy <= radius * radius) {
        return pins[i];
      }
    }
    return null;
  };

  p._canConnectDataPin = function(targetPin, sourcePin, sourceBlock) {
    if (!targetPin || !sourcePin || !sourceBlock || sourceBlock === this) return false;
    if (targetPin.direction !== 'input' || sourcePin.direction !== 'output') return false;
    if (targetPin.type && sourcePin.type && targetPin.type !== sourcePin.type) return false;
    return true;
  };

  /**
   * Wire one of this block's input pins to a producer. Enforces single-source
   * per input (last-wins: an existing wire on the same target pin is replaced)
   * [4.1]. Does NOT itself draw the connection object; the caller (import /
   * interactive wiring) supplies the b3e.DataConnection in `connection`.
   *
   * @method _addDataConnection
   * @param {String} targetPin   This block's input pin name.
   * @param {String} sourceNodeId Producer block id.
   * @param {String} sourcePin   Producer's output pin name.
   * @param {Object} connection  Optional b3e.DataConnection display object.
   * @returns {Object} The stored link record.
   * @protected
   */
  p._addDataConnection = function(targetPin, sourceNodeId, sourcePin, connection) {
    // Last-wire-wins: drop any existing wire on the same input pin.
    this._removeDataConnection(targetPin);
    var record = {
      targetPin    : targetPin,
      sourceNodeId : sourceNodeId,
      sourcePin    : sourcePin,
      connection   : connection || null
    };
    this._dataConnections.push(record);
    this._redrawDataPins();
    return record;
  };

  /**
   * Remove the wire (if any) on the given input pin. Returns the removed
   * record's display connection so the caller can detach it from the canvas.
   *
   * @method _removeDataConnection
   * @param {String} targetPin
   * @returns {Object|null} The removed display connection, or null.
   * @protected
   */
  p._removeDataConnection = function(targetPin) {
    var removedConn = null;
    for (var i = this._dataConnections.length - 1; i >= 0; i--) {
      if (this._dataConnections[i].targetPin === targetPin) {
        removedConn = this._dataConnections[i].connection || null;
        this._dataConnections.splice(i, 1);
      }
    }
    this._redrawDataPins();
    return removedConn;
  };

  /**
   * Copy this block.
   *
   * @method _copy
   * @returns {b3e.Block} A copy of this block.
   * @protected
   */
  p._copy = function() {
    var block = new b3e.Block(this.node);

    block.category    = this.category;
    block.title       = this.title;
    block.description = this.description;
    block.properties  = tine.merge({}, this.properties);
    
    block._applySettings(this._settings);
    block.x           = this.x;
    block.y           = this.y;


    return block;
  };

  /**
   * Snap the block according to the snap settings.
   *
   * @method _snap
   * @protected
   */
  p._snap = function() {
    var snap_x = this._settings.get('snap_x');
    var snap_y = this._settings.get('snap_y');
    var dx = this.x%snap_x;
    var dy = this.y%snap_y;

    if (dx < 0) dx = snap_x+dx;
    if (dy < 0) dy = snap_y+dy;

    this.x -= dx;
    this.y -= dy;
  };

  /**
   * Returns the center position of the in anchor.
   *
   * @method _getInAnchorPosition
   * @returns {Object} An object {x, y}.
   * @protected
   */
  p._getInAnchorPosition = function() {
    return {
      x: this.x-this._width/2-this._settings.get('anchor_offset_x'),
      y: this.y-this._height/2-this._settings.get('anchor_offset_x')
    };
  };

  /**
   * Returns the center position of the out anchor.
   *
   * @method _getOutAnchorPosition
   * @returns {Object} An object {x, y}.
   * @protected
   */
  p._getOutAnchorPosition = function() {
    return {
      x: this.x+this._width/2+this._settings.get('anchor_offset_x'),
      y: this.y+this._height/2+this._settings.get('anchor_offset_x')
    };
  };

  /**
   * Select a block, adding a shadow effect to it.
   *
   * @method _select
   * @protected
   */
  p._select = function() {
    this._isSelected = true;
    this._displayShape.shadow = this._displayShadow;
  };

  /**
   * Deselect a block, removing the shadow effect.
   *
   * @method _deselect
   * @protected
   */
  p._deselect = function() {
    this._isSelected = false;
    this._displayShape.shadow = null;
  };

  p._collapse = function() {};
  p._expand = function() {};

  /**
   * Verifies if the position (x, y) hits any part of the block. This is 
   * equivalent to:
   *
   *     block._hitBody(x, y) || block._hitInAnchor(x, y) || block._hitOutAnchor(x, y)
   *
   * @method _hitTest
   * @param {Integer} x The x position.
   * @param {Integer} y The y position.
   * @returns {Boolean} Whether hit the block or not.
   * @protected
   */
  p._hitTest = function(x, y) {
    return this._displayShape.hitTest(x-this.x, y-this.y);
  };

  /**
   * Verifies if the position (x, y) hits the body of the block.
   * 
   * @method _hitBody
   * @param {Integer} x The x position.
   * @param {Integer} y The y position.
   * @returns {Boolean} Whether hit the block's body or not.
   * @protected
   */
  p._hitBody = function(x, y) {
    if (this._settings.get('layout') === 'horizontal') {
      return (Math.abs(x-this.x) < this._width/2);
    }
    return (Math.abs(y-this.y) < this._height/2);
  };

  /**
   * Verifies if the position (x, y) hits the in anchor of the block.
   * 
   * @method _hitInAnchor
   * @param {Integer} x The x position.
   * @param {Integer} y The y position.
   * @returns {Boolean} Whether hit the in anchor or not.
   * @protected
   */
  p._hitInAnchor = function(x, y) {
    if (this._settings.get('layout') === 'horizontal') {
      var dx = x-this.x;
      return (Math.abs(dx) > this._width/2 && dx < 0);
    }
    var dy = y-this.y;
    return (Math.abs(dy) > this._height/2 && dy < 0);
  };

  /**
   * Verifies if the position (x, y) hits the out anchor of the block.
   * 
   * @method _hitInAnchor
   * @param {Integer} x The x position.
   * @param {Integer} y The y position.
   * @returns {Boolean} Whether hit the out anchor or not.
   * @protected
   */
  p._hitOutAnchor = function(x, y) {
    if (this._settings.get('layout') === 'horizontal') {
      var dx = x-this.x;
      return (Math.abs(dx) > this._width/2 && dx > 0);
    }
    var dy = y-this.y;
    return (Math.abs(dy) > this._height/2 && dy > 0);
  };

  /**
   * Verifies if this block is contained inside a given rectangle.
   * 
   * @method _isContainedIn
   * @param {Integer} x1 The x position.
   * @param {Integer} y1 The y position.
   * @param {Integer} x2 The x+w position.
   * @param {Integer} y2 The y+h position.
   * @returns {Boolean} Whether the block is contained in the rectangle or not.
   * @protected
   */
  p._isContainedIn = function(x1, y1, x2, y2) {
    if (x1 < this.x-this._width/2 &&
        y1 < this.y-this._height/2 &&
        x2 > this.x+this._width/2 &&
        y2 > this.y+this._height/2) {
      return true;
    }

    return false;
  };


  /**
   * Get the compiled title of the block. You can use patterns like `<varname>`
   * in the block title and this method will look through block properties for 
   * the var name. For example.
   *
   *     block.title = 'A <thing> title';
   *     block.properties['thing'] = 'pretty';
   *     block.getTitle() === 'A pretty title';
   * 
   * @method getTitle
   * @returns {String} The compiled title.
   */
  p.getTitle = function() {
    var s = this.title || this.name;
    var this_ = this;
    return s.replace(/(<\w+>)/g, function(match, key) {
      var attr = key.substring(1, key.length-1);
      if (this_.properties.hasOwnProperty(attr))
        return this_.properties[attr];
      else
        return match;
    });
  };

  /**
   * Runs a traversal over the subtree which this block is root.
   *
   *     block.traversal(function(block) {
   *       console.log(block);
   *     })
   * 
   * @method traversal
   * @param {Function} callback The callback called for each block in the 
   *                            subtree. The current block will be passed as 
   *                            argument to the callback.
   * @param {Object} thisarg The object for `this` reference.
   */
  p.traversal = function(callback, thisarg) {
    var blocks = [this];
    while (blocks.length > 0) {
      var block = blocks.pop();
      if (callback.call(thisarg, block) === false) return;

      for (var i=block._outConnections.length-1; i>=0; i--) {
        var c = block._outConnections[i];
        if (c._outBlock) blocks.push(c._outBlock);
      }
    }
  };

  b3e.Block = createjs.promote(Block, 'Container');
})();
