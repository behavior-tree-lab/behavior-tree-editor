(function() {
  'use strict';

  /**
   * debugService — real-time debugging client.
   *
   * Connects over WebSocket to the Go runtime's debug server (package `debug`
   * in henrytien/behavior-tree) and tracks live node statuses. The wire
   * protocol is documented in docs/REALTIME_DEBUGGING.md, the single source of
   * truth shared by both repos.
   *
   * This service owns only the connection and the status map; rendering the
   * highlight is the menubar/Block layer's job. It exposes a small callback
   * (onStatus) the highlighter subscribes to.
   */
  angular
    .module('app')
    .factory('debugService', debugService);

  debugService.$inject = ['$rootScope', 'notificationService'];

  function debugService($rootScope, notificationService) {
    var DEFAULT_URL = 'ws://localhost:6112/debug';

    var ws = null;
    var connected = false;
    var lastSeq = -1;
    var treeId = null;
    // nodeStatus: node id -> status string ('running'|'success'|'failure'|'error')
    var nodeStatus = {};
    // blackboard: latest runtime variable snapshot (key -> value).
    var blackboard = {};
    // statusListeners are called with (nodeStatusMap) after every applied frame.
    var statusListeners = [];
    // blackboardListeners are called with (blackboardMap) on each snapshot.
    var blackboardListeners = [];
    // pausedNodeId is the node the tick is frozen on, or null when running.
    var pausedNodeId = null;
    // breakpoints: node id -> true, mirrored locally so the UI can show markers.
    var breakpoints = {};
    // pauseListeners are called with (pausedNodeId|null) on pause/resume.
    var pauseListeners = [];

    var service = {
      connect             : connect,
      disconnect          : disconnect,
      isConnected         : isConnected,
      getStatuses         : getStatuses,
      getBlackboard       : getBlackboard,
      getTreeId           : getTreeId,
      onStatusChange      : onStatusChange,
      offStatusChange     : offStatusChange,
      onBlackboardChange  : onBlackboardChange,
      offBlackboardChange : offBlackboardChange,
      // breakpoints / stepping
      toggleBreakpoint    : toggleBreakpoint,
      hasBreakpoint       : hasBreakpoint,
      getBreakpoints      : getBreakpoints,
      clearAllBreakpoints : clearAllBreakpoints,
      continueRun         : continueRun,
      step                : step,
      isPaused            : isPaused,
      getPausedNodeId     : getPausedNodeId,
      onPauseChange       : onPauseChange,
      offPauseChange      : offPauseChange,
    };
    return service;

    function isConnected() {
      return connected;
    }

    function getStatuses() {
      return nodeStatus;
    }

    function getBlackboard() {
      return blackboard;
    }

    function getTreeId() {
      return treeId;
    }

    /**
     * Subscribe to status updates. Returns the listener so it can be removed.
     */
    function onStatusChange(listener) {
      statusListeners.push(listener);
      return listener;
    }

    function offStatusChange(listener) {
      var i = statusListeners.indexOf(listener);
      if (i >= 0) statusListeners.splice(i, 1);
    }

    /**
     * Subscribe to blackboard snapshots. Returns the listener for removal.
     */
    function onBlackboardChange(listener) {
      blackboardListeners.push(listener);
      return listener;
    }

    function offBlackboardChange(listener) {
      var i = blackboardListeners.indexOf(listener);
      if (i >= 0) blackboardListeners.splice(i, 1);
    }

    // --- breakpoints & stepping ---

    function _send(obj) {
      if (ws && connected) {
        try { ws.send(JSON.stringify(obj)); } catch (e) {}
      }
    }

    function hasBreakpoint(nodeId) {
      return !!breakpoints[nodeId];
    }

    function getBreakpoints() {
      return breakpoints;
    }

    /**
     * Toggle a breakpoint on a node and inform the runtime. Works offline too:
     * the local marker is kept and (re)sent on the next connect via the UI.
     */
    function toggleBreakpoint(nodeId) {
      if (breakpoints[nodeId]) {
        delete breakpoints[nodeId];
        _send({ type: 'clearBreakpoint', nodeId: nodeId });
      } else {
        breakpoints[nodeId] = true;
        _send({ type: 'setBreakpoint', nodeId: nodeId });
      }
      return !!breakpoints[nodeId];
    }

    function clearAllBreakpoints() {
      breakpoints = {};
      _send({ type: 'clearAllBreakpoints' });
    }

    function continueRun() {
      _send({ type: 'continue' });
    }

    function step() {
      _send({ type: 'step' });
    }

    function isPaused() {
      return pausedNodeId !== null;
    }

    function getPausedNodeId() {
      return pausedNodeId;
    }

    function onPauseChange(listener) {
      pauseListeners.push(listener);
      return listener;
    }

    function offPauseChange(listener) {
      var i = pauseListeners.indexOf(listener);
      if (i >= 0) pauseListeners.splice(i, 1);
    }

    function _notifyPause() {
      for (var i = 0; i < pauseListeners.length; i++) {
        try {
          pauseListeners[i](pausedNodeId);
        } catch (e) {
          // A listener must not break the others or the socket.
        }
      }
    }

    function _notifyBlackboard() {
      for (var i = 0; i < blackboardListeners.length; i++) {
        try {
          blackboardListeners[i](blackboard);
        } catch (e) {
          // A listener must not break the others or the socket.
        }
      }
    }

    function _notifyListeners() {
      for (var i = 0; i < statusListeners.length; i++) {
        try {
          statusListeners[i](nodeStatus);
        } catch (e) {
          // A listener must not break the others or the socket.
        }
      }
    }

    /**
     * Open a connection. url defaults to ws://localhost:6112/debug.
     */
    function connect(url) {
      if (ws) disconnect();
      url = url || DEFAULT_URL;

      try {
        ws = new WebSocket(url);
      } catch (e) {
        notificationService.error('Debug', 'Invalid address: ' + url);
        return;
      }

      ws.onopen = function() {
        connected = true;
        lastSeq = -1;
        // Re-send any breakpoints the user set before/while disconnected, so
        // the runtime's set matches the editor's markers.
        for (var nodeId in breakpoints) {
          if (breakpoints.hasOwnProperty(nodeId)) {
            _send({ type: 'setBreakpoint', nodeId: nodeId });
          }
        }
        $rootScope.$applyAsync(function() {
          notificationService.success('Debug', 'Connected to ' + url);
        });
      };

      ws.onmessage = function(event) {
        var msg;
        try {
          msg = JSON.parse(event.data);
        } catch (e) {
          return;
        }
        _handleMessage(msg);
      };

      ws.onerror = function() {
        $rootScope.$applyAsync(function() {
          notificationService.error('Debug', 'Connection error');
        });
      };

      ws.onclose = function() {
        connected = false;
        ws = null;
        $rootScope.$applyAsync(function() {
          notificationService.info('Debug', 'Disconnected');
        });
      };
    }

    function disconnect() {
      if (ws) {
        // Drop handlers first so onclose's notification does not double-fire
        // when the user explicitly disconnects.
        ws.onopen = ws.onmessage = ws.onerror = ws.onclose = null;
        try { ws.close(); } catch (e) {}
        ws = null;
      }
      connected = false;
      _clearStatuses();
    }

    function _clearStatuses() {
      nodeStatus = {};
      blackboard = {};
      lastSeq = -1;
      if (pausedNodeId !== null) {
        pausedNodeId = null;
        _notifyPause();
      }
      _notifyListeners();
      _notifyBlackboard();
    }

    /**
     * Apply one decoded protocol message.
     */
    function _handleMessage(msg) {
      if (!msg || !msg.type) return;

      if (msg.type === 'hello') {
        treeId = msg.treeId;
        return;
      }

      if (msg.type === 'tick') {
        // Drop out-of-order / stale frames.
        if (typeof msg.seq === 'number' && msg.seq <= lastSeq) return;
        lastSeq = (typeof msg.seq === 'number') ? msg.seq : lastSeq;

        if (msg.nodes) {
          for (var id in msg.nodes) {
            if (msg.nodes.hasOwnProperty(id)) {
              nodeStatus[id] = msg.nodes[id];
            }
          }
        }
        _notifyListeners();
        return;
      }

      if (msg.type === 'blackboard') {
        blackboard = msg.data || {};
        $rootScope.$applyAsync(_notifyBlackboard);
        return;
      }

      if (msg.type === 'paused') {
        pausedNodeId = msg.nodeId;
        $rootScope.$applyAsync(_notifyPause);
        return;
      }

      if (msg.type === 'resumed') {
        if (pausedNodeId !== null) {
          pausedNodeId = null;
          $rootScope.$applyAsync(_notifyPause);
        }
        return;
      }

      // Future message types are ignored for now.
    }
  }
})();
