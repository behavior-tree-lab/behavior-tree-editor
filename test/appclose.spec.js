// Headless tests for Electron window close handling in AppController.
//
// Run: node test/appclose.spec.js
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');

var registry = { controllers: {} };
var moduleApi = {
  controller: function(name, fn) { registry.controllers[name] = fn; return moduleApi; },
  factory: function() { return moduleApi; },
  value: function() { return moduleApi; },
  directive: function() { return moduleApi; }
};
var angular = { module: function() { return moduleApi; } };

function loadSource(rel) {
  var code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  var sandbox = {
    angular: angular,
    console: console,
    window: {},
    require: function() { throw new Error('nw unavailable'); }
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: rel });
}

loadSource('src/app/app.controller.js');

var failures = 0;
function eq(actual, expected, msg) {
  var a = JSON.stringify(actual);
  var e = JSON.stringify(expected);
  if (a !== e) {
    failures++;
    console.error('FAIL: ' + msg + '\n  expected ' + e + '\n  got      ' + a);
  } else {
    console.log('ok: ' + msg);
  }
}

function immediatePromise(ok, value) {
  return {
    then: function(resolve, reject) {
      if (ok && resolve) resolve(value);
      if (!ok && reject) reject(value);
      return this;
    }
  };
}

function runCloseCase(choice, saveOk) {
  var closeHandler = null;
  var prevented = false;
  var closeCount = 0;
  var saveCount = 0;
  var errors = [];

  var win = {
    on: function(name, cb) {
      if (name === 'close') closeHandler = cb;
    },
    close: function() {
      closeCount++;
    }
  };
  var nodejsService = {
    ok: true,
    remote: { getCurrentWindow: function() { return win; } },
    dialog: { showMessageBoxSync: function() { return choice; } }
  };
  var projectModel = {
    saveProject: function() {
      saveCount++;
      return immediatePromise(saveOk, saveOk ? null : new Error('disk full'));
    }
  };

  registry.controllers.AppController(
    {},
    { editor: { isDirty: function() { return true; } } },
    {},
    nodejsService,
    projectModel,
    { error: function(title, message) { errors.push({ title: title, message: message }); } }
  );

  closeHandler({ preventDefault: function() { prevented = true; } });
  return {
    prevented: prevented,
    closeCount: closeCount,
    saveCount: saveCount,
    errors: errors
  };
}

var cancel = runCloseCase(2, true);
eq(cancel.prevented, true, 'dirty close is intercepted before cancel');
eq(cancel.closeCount, 0, 'cancel keeps window open');
eq(cancel.saveCount, 0, 'cancel does not save');

var discard = runCloseCase(1, true);
eq(discard.closeCount, 1, 'discard closes the window');
eq(discard.saveCount, 0, 'discard does not save');

var save = runCloseCase(0, true);
eq(save.saveCount, 1, 'save-and-exit calls save');
eq(save.closeCount, 1, 'save success closes the window');

var failed = runCloseCase(0, false);
eq(failed.saveCount, 1, 'failed save was attempted');
eq(failed.closeCount, 0, 'save failure keeps the window open');
eq(failed.errors[0].message, 'disk full', 'save failure shows root error message');

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed.');
  process.exit(1);
} else {
  console.log('\nAll app close tests passed.');
}
