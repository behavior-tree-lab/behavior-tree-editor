b3e.editor.ProjectManager = function(editor) {
  "use strict";

  /**
   * Creates a new project.
   */
  this.create = function() {
    this.close();

    var project = new b3e.project.Project(editor);
    editor.addChild(project);
    editor._project = project;
    editor.trigger('projectcreated', editor._project);
    
    editor._project.trees.add();
  };

  /**
   * Loads a project from data.
   */
  this.open = function(data) {
    b3e.logger.info('Opening project', {trees: data.trees ? data.trees.length : 0});

    try {
      this.close();

      var project = new b3e.project.Project(editor);
      editor.addChild(project);
      editor._project = project;

      b3e.logger.info('Project instance created, importing data...');
      editor.import.projectAsData(data);
      b3e.logger.info('Project imported successfully');
      editor.trigger('projectopened', editor._project);
      editor.clearDirty();
      b3e.logger.info('Project opened and initialized');
    } catch (e) {
      b3e.logger.error('Error opening project', {message: e.message, stack: e.stack});
      throw e;
    }
  };

  /**
   * Exit the current project.
   */
  this.close = function() {
    var project = editor._project;
    if (project) {
      editor.removeChild(project);
      editor.trigger('projectclosed', project);
    }
  };

  /**
   * Gets the current project. Returns `null` if none.
   */
  this.get = function() {
    return editor._project;
  };


  this._applySettings = function(settings) {
    if (editor._project) {
      editor._project._applySettings(settings);
    }
  };
};