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
    // statusListeners are called with (nodeStatusMap) after every applied frame.
    var statusListeners = [];

    var service = {
      connect          : connect,
      disconnect       : disconnect,
      isConnected      : isConnected,
      getStatuses      : getStatuses,
      getTreeId        : getTreeId,
      onStatusChange   : onStatusChange,
      offStatusChange  : offStatusChange,
    };
    return service;

    function isConnected() {
      return connected;
    }

    function getStatuses() {
      return nodeStatus;
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
      lastSeq = -1;
      _notifyListeners();
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

      // 'blackboard' and future message types are ignored for now.
    }
  }
})();
