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
    'editorService'
  ];

  function projectModel($q,
                          $rootScope,
                          $window,
                          storageService,
                          systemService,
                          localStorageService,
                          editorService) {

    // HEAD //
    var recentPath = systemService.join(systemService.getDataPath(), 'recents.json');
    var recentCache = null;
    var currentProject = null;

    var service = {
      getRecentProjects   : getRecentProjects,
      newProject          : newProject,
      getProject          : getProject,
      saveProject         : saveProject,
      openProject         : openProject,
      importProject       : importProject,
      closeProject        : closeProject,
      removeProject       : removeProject,
    };
    return service;

    // BODY //
    function _saveRecentProjects() {
      storageService.save(recentPath, recentCache);
    }
    function _updateRecentProjects(project) {
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
    function _setProject(project) {
      // Set current open project to the localStorage, so the app can open it
      //   during intialization
      currentProject = project;
      _updateRecentProjects(project);
      $rootScope.$broadcast('dash-projectchanged');
    }

    function getRecentProjects() {
      return $q(function(resolve, reject) {
        if (!recentCache) {
          var data;

          try {
            data = storageService.load(recentPath);
          } catch (e) {}

          if (!data) {
            data = [];
          }

          recentCache = data;
        }
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
        return $q.reject(new Error('This project has no file path (it was imported, not opened). Use "Open Project" on the .b3 file to enable saving back to disk.'));
      }

      project.data = editorService.exportProject();

      return $q(function(resolve, reject) {
        $window.editor.clearDirty();
        storageService.save(project.path, project);
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
        try {
          var project = storageService.load(path);
          editorService.openProject(project.data);
          _setProject(project);
          resolve();
        } catch (e) {
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