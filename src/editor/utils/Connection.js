/** @module b3e */

(function () {
  "use strict";

  /**
   * Represents a connection between two blocks.
   *
   * @class Connection
   * @constructor
   */
  var Connection = function() {
    this.Shape_constructor();

    this._settings = null;
    this._inBlock = null;
    this._outBlock = null;
    // Real-time debugging: when true, the connection is drawn highlighted to
    // mark the active execution path.
    this._debugActive = false;
  };
  var p = createjs.extend(Connection, createjs.Shape);
 
  /**
   * Apply the editor settings to this connection.
   *
   * @method _applySettings
   * @param Object {b3e.SettingsManager} The settings object.
   * @protected
   */
  p._applySettings = function(settings) {
    this._settings = settings;
    this._redraw();
  };

  /**
   * Redraw the connection.
   *
   * @method _redraw
   * @protected
   */
  p._redraw = function(x1, y1, x2, y2) {
    if (! ((this._inBlock||x1||y1) && (this._outBlock||x2||y2)) ) {
      return;
    }

    var s          = this._settings;
    var graphics   = this.graphics;
    var width      = s.get('connection_width');
    var color      = s.get('connection_color');
    if (this._debugActive) {
      width = s.get('debug_connection_width') || (width + 2);
      color = s.get('debug_running_color');
    }
    var diff       = s.get('anchor_radius') + s.get('anchor_border_width');
    var arrowWidth = s.get('anchor_radius')/2;
    var layout     = s.get('layout');

    var dx=0; var dy=0; var angle=0; var ax=0; var ay=0;
    // var inAnchor = this._outBlock._getInAnchorPosition();
    // var outAnchor = this._inBlock._getOutAnchorPosition();

    if (!(x1 === 0||x1)) {
      var outAnchor = this._inBlock._getOutAnchorPosition();
      if (layout === 'horizontal') {
        x1 = outAnchor.x;
        y1 = this._inBlock.y;
      } else {
        x1 = this._inBlock.x;
        y1 = outAnchor.y;
      }
    }

    if (!(x2 === 0||x2)) {
      var inAnchor = this._outBlock._getInAnchorPosition();
      if (layout === 'horizontal') {
        x2 = inAnchor.x - diff;
        y2 = this._outBlock.y;
      } else {
        x2 = this._outBlock.x;
        y2 = inAnchor.y - diff;
      }
    }

    if (layout === 'horizontal') {
      dx = 2.5*(x2 - x1)/4;
      ax = -arrowWidth;
    } else {
      dy = 2.5*(y2 - y1)/4;
      ay = -arrowWidth;
      angle = 90;
    }

    graphics.clear();
    graphics.setStrokeStyle(width, 'round');
    graphics.beginStroke(color);
    graphics.moveTo(x1, y1);
    graphics.bezierCurveTo(x1+dx, y1+dy, x2-dx, y2-dy, x2, y2);
    graphics.beginFill(color);
    graphics.drawPolyStar(x2+ax, y2+ay, arrowWidth, 3, 0, angle);
    graphics.endFill();
    graphics.endStroke();
  };

  /**
   * Toggle the active-path highlight. Redraws only when the state changes.
   *
   * @method _setDebugActive
   * @param {Boolean} active
   * @protected
   */
  p._setDebugActive = function(active) {
    active = !!active;
    if (this._debugActive === active) return;
    this._debugActive = active;
    this._redraw();
  };

  b3e.Connection = createjs.promote(Connection, 'Shape');

  /**
   * Represents a DATA connection between an output pin of one block and an
   * input pin of another block (Unreal-blueprint-style data wiring), as
   * opposed to the parent/child tree edge drawn by `Connection`.
   *
   * It is a distinct class (not a flag on `Connection`) so the tree-edge
   * render/hit/event code does not have to branch on a data flag [C4]. A
   * data connection is purely visual + a model link; the runtime ignores it.
   *
   * @class DataConnection
   * @constructor
   */
  var DataConnection = function() {
    this.Shape_constructor();

    this._settings   = null;
    // Source block (the producer / output side) and its output pin name.
    this._sourceBlock = null;
    this._sourcePin   = null;
    // Target block (the consumer / input side) and its input pin name.
    this._targetBlock = null;
    this._targetPin   = null;
  };
  var dp = createjs.extend(DataConnection, createjs.Shape);

  dp._applySettings = function(settings) {
    this._settings = settings;
    this._redraw();
  };

  /**
   * Redraw the data wire as a dashed curve from the source block's output
   * anchor to the target block's input anchor. Drawn defensively: if either
   * endpoint or settings are missing it simply clears, so a partially-built
   * connection never throws during organize/import.
   *
   * @method _redraw
   * @protected
   */
  dp._redraw = function(x1, y1, x2, y2) {
    var graphics = this.graphics;
    graphics.clear();

    if (!this._settings || !this._sourceBlock || (!this._targetBlock && !(x2 === 0 || x2))) {
      return;
    }

    var s      = this._settings;
    var width  = s.get('data_connection_width') || 3;
    var color  = s.get('data_connection_color') || '#2ECC71';
    var layout = s.get('layout');

    var srcPin = {
      pin: this._sourcePin,
      type: '',
      direction: 'output'
    };
    var src = this._sourceBlock._getDataPinPosition ?
      this._sourceBlock._getDataPinPosition(srcPin) :
      this._sourceBlock._getOutAnchorPosition();
    x1 = src.x;
    y1 = src.y;

    if (this._targetBlock) {
      var dstPin = {
        pin: this._targetPin,
        type: '',
        direction: 'input'
      };
      var dst = this._targetBlock._getDataPinPosition ?
        this._targetBlock._getDataPinPosition(dstPin) :
        this._targetBlock._getInAnchorPosition();
      x2 = dst.x;
      y2 = dst.y;
    }

    var dx = 0, dy = 0;
    if (layout === 'horizontal') {
      dx = 2.5 * (x2 - x1) / 4;
    } else {
      dy = 2.5 * (y2 - y1) / 4;
    }

    // Draw a solid, rounded spline so data flow reads as a first-class wire
    // rather than a temporary debug mark.
    graphics.setStrokeStyle(width + 3, 'round');
    graphics.beginStroke('rgba(0, 0, 0, 0.38)');
    graphics.moveTo(x1, y1);
    graphics.bezierCurveTo(x1 + dx, y1 + dy, x2 - dx, y2 - dy, x2, y2);
    graphics.endStroke();

    graphics.setStrokeStyle(width, 'round');
    graphics.beginStroke(color);
    graphics.moveTo(x1, y1);
    graphics.bezierCurveTo(x1 + dx, y1 + dy, x2 - dx, y2 - dy, x2, y2);
    graphics.endStroke();
  };

  b3e.DataConnection = createjs.promote(DataConnection, 'Shape');
})();
