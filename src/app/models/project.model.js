(function () {
  'use strict';

  angular
    .module('app')
    .factory('projectModel', projectModel);

  projectModel.$inject = [
    '$q',
    '$rootScope',
    '$window',
    'storageService',
    'systemService',
    'localStorageService',
	'editorService',
	'treeValidatorService'
  ];

  function projectModel($q,
                          $rootScope,
                          $window,
                          storageService,
                          systemService,
                          localStorageService,
						  editorService,
						  treeValidatorService) {

    // HEAD //
    var recentPath = systemService.join(systemService.getDataPath(), 'recents.json');
    var recentCache = null;
    var currentProject = null;

    var service = {
      getRecentProjects   : getRecentProjects,
      newProject          : newProject,
      getProject          : getProject,
      saveProject         : saveProject,
      saveAsProject       : saveAsProject,
      openProject         : openProject,
      importProject       : importProject,
      closeProject        : closeProject,
      removeProject       : removeProject,
    };
    return service;

    // BODY //
    function _ensureRecentProjects() {
      if (recentCache) return;

      try {
        recentCache = storageService.load(recentPath);
      } catch (e) {}

      if (!recentCache) {
        recentCache = [];
      }
      recentCache = recentCache.filter(function(item) {
        return item && item.path;
      });
    }
    function _saveRecentProjects() {
      _ensureRecentProjects();
      storageService.save(recentPath, recentCache);
    }
    function _updateRecentProjects(project) {
      _ensureRecentProjects();
      if (project) {
        for (var i=recentCache.length-1; i>=0; i--) {
          if (recentCache[i].path === project.path) {
            recentCache.splice(i, 1);
          } else {
            recentCache[i].isOpen = false;
          }
        }

        var data = {
          name        : project.name,
          description : project.description,
          path        : project.path,
          isOpen      : true,
        };
        
        recentCache.splice(0, 0, data);
      } else {
        for (var j=0; j<recentCache.length; j++) {
          recentCache[j].isOpen = false;
        }
      }
      _saveRecentProjects();
    }
    function _clearOpenRecent(path) {
      _ensureRecentProjects();
      for (var i=0; i<recentCache.length; i++) {
        if (!path || recentCache[i].path === path) {
          recentCache[i].isOpen = false;
        }
      }
      _saveRecentProjects();
    }
    function _setProject(project) {
      // Set current open project to the localStorage, so the app can open it
      //   during intialization
      currentProject = project;
      _updateRecentProjects(project);
      $rootScope.$broadcast('dash-projectchanged');
    }

    function getRecentProjects() {
      return $q(function(resolve, reject) {
        _ensureRecentProjects();
        resolve(recentCache);
      });
    }
    function newProject(path, name) {
      return $q(function(resolve, reject) {
        var project = {
          name: name,
          description: '',
          data: [],
          path: path
        };

        editorService.newProject();
        project.data = editorService.exportProject();
        saveProject(project)
          .then(function() { 
            _setProject(project);
            resolve();
          });
      });
    }
    function getProject() {
      return currentProject;
    }
    function _getNameFromPath(path) {
      if (!path) return 'Opened Project';
      var normalized = String(path).replace(/\\/g, '/');
      var name = normalized.split('/').pop() || 'Opened Project';
      return name.replace(/\.(b3|json)$/i, '');
    }
    function _wrapLoadedProject(data, path) {
      if (data && data.data && (data.data.trees || data.data.custom_nodes)) {
        data.path = path;
        data._fileShape = 'envelope';
        return data;
      }

      return {
        name        : data.name || _getNameFromPath(path),
        description : data.description || '',
        data        : data,
        path        : path,
        _fileShape  : 'project'
      };
    }
    function _dataToSave(project) {
      if (project._fileShape === 'project') {
        return project.data;
      }

      var data = {};
      for (var key in project) {
        if (!project.hasOwnProperty(key) || key === '_fileShape') continue;
        data[key] = project[key];
      }
      return data;
    }
    function saveAsProject(path, project) {
      project = project || currentProject;
      if (!project) {
        return $q.reject(new Error('No open project to save.'));
      }

      project.path = path;
      if (!project._fileShape) {
        project._fileShape = 'envelope';
      }
      return saveProject(project);
    }
    function saveProject(project) {
      project = project || currentProject;

      // Guard: a project imported via "Import Project" never went through
      // openProject/newProject, so currentProject may be null (no associated
      // file path). Without this guard, `project.data = ...` throws on null and
      // wedges the Angular digest, which is what makes Ctrl+S do nothing and
      // the window unclosable. Fail loudly instead.
      if (!project) {
        return $q.reject(new Error('No open project to save. Use "Open Project" so the file path is known, or "Save As".'));
      }
      if (!project.path) {
        return $q.reject(new Error('This project has no file path. Use Save As to choose where it should be written.'));
      }

	  var candidate = editorService.exportProject();
	  var validation = treeValidatorService.validateTreeData(candidate);
	  if (!validation.valid) {
		var first = validation.issues[0] || {};
		var detail = first.message || 'invalid behavior tree data';
		if (first.param) detail = first.param + ' ' + detail;
		var validationError = new Error('Project validation failed: ' + detail);
		validationError.validation = validation;
		return $q(function(resolve, reject) { reject(validationError); });
	  }
	  project.data = candidate;

      return $q(function(resolve, reject) {
        $window.editor.clearDirty();
        storageService.save(project.path, _dataToSave(project));
        _updateRecentProjects(project);
        resolve();
      });
    }

    // importProject loads project data into the editor AND registers it with a
    // file path, so it behaves like Open (saveable) rather than the old Import
    // (which left currentProject null and crashed on save). path may be null,
    // in which case the user must Save As before saving works.
    function importProject(data, path, name) {
      return $q(function(resolve, reject) {
        try {
          editorService.openProject(data);
          _setProject({
            name        : name || data.name || 'Imported Project',
            description : data.description || '',
            data        : data,
            path        : path || null,
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }
    function openProject(path) {
      return $q(function(resolve, reject) {
        if (!path) {
          _clearOpenRecent(path);
          reject(new Error('No project file path was provided.'));
          return;
        }

        try {
          var project = _wrapLoadedProject(storageService.load(path), path);
          editorService.openProject(project.data);
          _setProject(project);
          resolve();
        } catch (e) {
          _clearOpenRecent(path);
          reject(e);
        }
      });
    }
    function closeProject() {
      return $q(function(resolve, reject) {
        $window.editor.clearDirty();
        editorService.closeProject();
        _setProject(null);
        resolve();
      }); 
    }
    function removeProject(path) {
      return $q(function(resolve, reject) {
        for (var i=0; i<recentCache.length; i++) {
          if (recentCache[i].path === path) {
            recentCache.splice(i, 1);
            break;
          }
        }

        _saveRecentProjects();
        resolve();
      });
    }
  }
})();
