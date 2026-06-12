b3e.editor.DebugSystem = function(editor) {
  "use strict";

  // Accumulated time (seconds) driving the running-node pulse. Not wall-clock,
  // so it can be reset and stays deterministic across frames.
  var elapsed = 0;

  // Pulse tuning: alpha oscillates between MIN and 1.0 at PULSE_HZ cycles/sec.
  var PULSE_HZ = 1.6;
  var PULSE_MIN = 0.35;
  var TWO_PI = Math.PI * 2;

  this.update = function(delta) {
    var project = editor.project.get();
    if (!project) return;

    var tree = project.trees.getSelected();
    if (!tree) return;

    elapsed += delta;

    // Pulse alpha for RUNNING overlays; solid for terminal statuses.
    var t = (Math.sin(elapsed * PULSE_HZ * TWO_PI) + 1) / 2; // 0..1
    var pulseAlpha = PULSE_MIN + (1 - PULSE_MIN) * t;

    var anyRunning = false;
    tree.blocks.each(function(block) {
      var shape = block._debugShape;
      if (!shape) return;
      if (block._debugStatus === 'running') {
        shape.alpha = pulseAlpha;
        anyRunning = true;
      } else {
        shape.alpha = 1;
      }
    });

    // Highlight the active execution path: a connection is active when its
    // child (the _outBlock it feeds into) is currently running. This lights
    // up the chain from a parent down to each running node.
    tree.connections.each(function(conn) {
      var child = conn._outBlock;
      var active = !!(child && child._debugStatus === 'running');
      conn._setDebugActive(active);
    });

    // Avoid an unused-var warning while documenting intent: anyRunning could
    // later drive a global indicator (e.g. a "live" badge in the toolbar).
    void anyRunning;
  };
};
