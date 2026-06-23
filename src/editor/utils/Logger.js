/**
 * Logger utility for behavior-tree-editor debugging
 */
(function () {
  'use strict';

  var Logger = function() {
    this.logs = [];
    this.maxLogs = 1000;
    this.enableConsole = true;
    this.enableFile = false;
  };

  Logger.prototype.log = function(level, message, data) {
    var timestamp = new Date().toISOString();
    var logEntry = {
      timestamp: timestamp,
      level: level,
      message: message,
      data: data
    };

    this.logs.push(logEntry);

    // Keep logs under max size
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Output to console
    if (this.enableConsole) {
      var consoleMessage = '[' + timestamp + '] [' + level + '] ' + message;
      if (data) {
        console.log(consoleMessage, data);
      } else {
        console.log(consoleMessage);
      }
    }

    // Try to output to file (if in Electron/Node context)
    if (this.enableFile && typeof window !== 'undefined' && window.process) {
      this._writeToFile(logEntry);
    }
  };

  Logger.prototype.debug = function(message, data) {
    this.log('DEBUG', message, data);
  };

  Logger.prototype.info = function(message, data) {
    this.log('INFO', message, data);
  };

  Logger.prototype.warn = function(message, data) {
    this.log('WARN', message, data);
  };

  Logger.prototype.error = function(message, data) {
    this.log('ERROR', message, data);
  };

  Logger.prototype.getLogs = function() {
    return this.logs;
  };

  Logger.prototype.clearLogs = function() {
    this.logs = [];
  };

  Logger.prototype.exportLogs = function() {
    return JSON.stringify(this.logs, null, 2);
  };

  Logger.prototype._writeToFile = function(logEntry) {
    try {
      var fs = window.require('fs');
      var path = window.require('path');
      var app = window.require('app') || window.require('electron').app;
      var logDir = path.join(app.getPath('userData'), 'logs');
      var logFile = path.join(logDir, 'behavior-tree-editor.log');

      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }

      var logLine = JSON.stringify(logEntry) + '\n';
      fs.appendFileSync(logFile, logLine);
    } catch (e) {
      // Silently fail if file writing is not available
    }
  };

  window.b3e = window.b3e || {};
  window.b3e.Logger = Logger;
  window.b3e.logger = new Logger();

})();
