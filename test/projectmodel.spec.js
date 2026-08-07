// Headless tests for projectModel open/save path handling.
//
// Run: node test/projectmodel.spec.js
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');

var registry = { factories: {} };
var moduleApi = {
  factory: function(name, fn) { registry.factories[name] = fn; return moduleApi; },
  value: function() { return moduleApi; },
  controller: function() { return moduleApi; },
  directive: function() { return moduleApi; }
};
var angular = { module: function() { return moduleApi; } };

function loadSource(rel) {
  var code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  var sandbox = { angular: angular, console: console };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: rel });
}

loadSource('src/app/models/project.model.js');

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

function makeQ() {
  return function(fn) {
    var promise = {
      _resolved: false,
      _rejected: false,
      _value: undefined,
      then: function(resolve, reject) {
        if (promise._resolved && resolve) resolve(promise._value);
        if (promise._rejected && reject) reject(promise._value);
        return promise;
      }
    };
    fn(function(v) {
      promise._resolved = true;
      promise._value = v;
    }, function(e) {
      promise._rejected = true;
      promise._value = e;
    });
    return promise;
  };
}

function createModel(loadMap, validate) {
  var saved = {};
  var opened = [];
  var broadcasts = [];
  var currentExport = null;
	var clearDirtyCount = 0;

  var storageService = {
    load: function(p) {
      if (!loadMap.hasOwnProperty(p)) return undefined;
      return JSON.parse(JSON.stringify(loadMap[p]));
    },
    save: function(p, data) { saved[p] = JSON.parse(JSON.stringify(data)); }
  };
  var editorService = {
    openProject: function(data) { opened.push(JSON.parse(JSON.stringify(data))); },
    exportProject: function() { return JSON.parse(JSON.stringify(currentExport)); },
    newProject: function() {},
    closeProject: function() {}
  };
  var model = registry.factories.projectModel(
    makeQ(),
    { $broadcast: function(name) { broadcasts.push(name); } },
	{ editor: { clearDirty: function() { clearDirtyCount++; } } },
    storageService,
    { join: function() { return Array.prototype.join.call(arguments, '/'); },
      getDataPath: function() { return 'data'; } },
    {},
	editorService,
	{ validateTreeData: validate || function() { return { valid: true, issues: [] }; } }
  );

  return {
    model: model,
    saved: saved,
    opened: opened,
    broadcasts: broadcasts,
	getClearDirtyCount: function() { return clearDirtyCount; },
    setExport: function(data) { currentExport = data; }
  };
}

var barePath = 'E:/trees/marvel.editor.b3';
var bareProject = {
  version: '0.3.1',
  scope: 'project',
  selectedTree: 'tree-1',
  trees: [ { id: 'tree-1', title: 'mail_tree', nodes: {} } ],
  custom_nodes: []
};
var hBare = createModel((function() {
  var m = {};
  m[barePath] = bareProject;
  return m;
})());
hBare.setExport({ version: '0.3.1', scope: 'project', selectedTree: 'tree-1',
                  trees: [ { id: 'tree-1', title: 'mail_tree_saved', nodes: {} } ],
                  custom_nodes: [] });
hBare.model.openProject(barePath);
hBare.model.saveProject();
eq(hBare.opened[0].scope, 'project', 'bare project opens inner project data');
eq(hBare.saved[barePath].scope, 'project', 'bare project saves back as bare project');
eq(hBare.saved[barePath].trees[0].title, 'mail_tree_saved',
   'bare project save uses exported project data');

var actualPath = 'E:/trees/mail_tree.b3';
var envelope = {
  name: 'mail_tree',
  description: 'Mail module',
  path: 'configs/trees\\mail_tree.b3',
  data: {
    scope: 'project',
    trees: [ { id: 'mail', title: 'mail_tree', nodes: {} } ],
    custom_nodes: []
  }
};
var hEnvelope = createModel((function() {
  var m = {};
  m[actualPath] = envelope;
  return m;
})());
hEnvelope.setExport({ scope: 'project',
                      trees: [ { id: 'mail', title: 'mail_tree_saved', nodes: {} } ],
                      custom_nodes: [] });
hEnvelope.model.openProject(actualPath);
hEnvelope.model.saveProject();
eq(!!hEnvelope.saved['configs/trees\\mail_tree.b3'], false,
   'envelope save ignores stale embedded path');
eq(hEnvelope.saved[actualPath].path, actualPath,
   'envelope save records actual opened path');
eq(hEnvelope.saved[actualPath].data.trees[0].title, 'mail_tree_saved',
   'envelope save keeps wrapper and updates inner project data');

var recentPath = 'data/recents.json';
var hRecent = createModel((function() {
  var m = {};
  m[recentPath] = [
    { name: 'Imported Project', path: null, isOpen: true },
    { name: 'mail_tree', path: actualPath, isOpen: false }
  ];
  return m;
})());
hRecent.model.getRecentProjects().then(function(recents) {
  eq(recents.length, 1, 'recent projects filters entries without a path');
  eq(recents[0].path, actualPath, 'recent projects keeps valid paths');
});

var hSaveAs = createModel({});
hSaveAs.setExport({ scope: 'project',
                    trees: [ { id: 'new', title: 'saved_as', nodes: {} } ],
                    custom_nodes: [] });
hSaveAs.model.importProject({ scope: 'project', trees: [], custom_nodes: [] },
                            null, 'Imported Project');
hSaveAs.model.saveAsProject('E:/trees/imported_saved.b3');
eq(hSaveAs.saved['E:/trees/imported_saved.b3'].path,
   'E:/trees/imported_saved.b3',
   'saveAsProject assigns a real path to imported projects');
eq(hSaveAs.saved['E:/trees/imported_saved.b3'].data.trees[0].title,
   'saved_as',
   'saveAsProject writes exported project data');

var invalidPath = 'E:/trees/invalid_rpc.b3';
var invalidLoad = {};
invalidLoad[invalidPath] = bareProject;
var hInvalid = createModel(invalidLoad, function() {
  return {
    valid: false,
    issues: [{ nodeId: 'rpc-1', param: 'catalogFingerprint', message: 'is stale' }]
  };
});
hInvalid.setExport({ scope: 'project', trees: [{ id: 'tree-1', nodes: {} }] });
hInvalid.model.openProject(invalidPath);
var validationError = null;
hInvalid.model.saveProject().then(null, function(error) { validationError = error; });
eq(!!validationError, true, 'invalid project save rejects');
eq(!!hInvalid.saved[invalidPath], false, 'invalid project is not written');
eq(hInvalid.getClearDirtyCount(), 0, 'invalid project remains dirty');

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed.');
  process.exit(1);
} else {
  console.log('\nAll project model path tests passed.');
}
