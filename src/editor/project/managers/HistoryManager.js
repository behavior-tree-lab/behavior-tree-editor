b3e.project.HistoryManager = function(editor, project) {
  "use strict";

  var queue = [];
  var index = 0;
  var lockRequests = 0;
  var batchRequests = 0;
  var commandBuffer = [];
  var activeTransaction = null;

  function snapshotSelection() {
    var tree = project.trees.getSelected();
    var blocks = [];
    if (tree && tree.blocks && tree.blocks.getSelected) {
      blocks = tree.blocks.getSelected();
    }
    return {tree: tree, blocks: blocks.slice()};
  }

  function restoreSelection(snapshot) {
    if (!snapshot || !snapshot.tree) return;
    project.trees.select(snapshot.tree);
    var selection = snapshot.tree.selection;
    if (!selection) return;
    selection.deselectAll();
    for (var i=0; i<snapshot.blocks.length; i++) {
      selection.select(snapshot.blocks[i]);
    }
  }

  function push(command) {
    var max = editor._settings.get('max_history');
    var nextQueue = queue.slice(0, index);
    command.context = project.trees.getSelected();
    nextQueue.push(command);

    if (nextQueue.length > max) {
      nextQueue.splice(0, nextQueue.length-max);
    }
    queue = nextQueue;
    index = queue.length;
    if (editor._dirty < 0) editor._dirty = 0;
    editor._dirty++;
  }

  this.clear = function() {
    queue = [];
    index = 0;
  };
  this.undo = function() {
    if (!this.canUndo()) return;
    this._lock();
    var target = index-1;
    try {
      queue[target].undo();
      index = target;
      if (!queue[target].restoresSelection) {
        project.trees.select(queue[target].context);
      }
      editor._dirty--;
    } finally {
      this._unlock();
    }
  };
  this.redo = function() {
    if (!this.canRedo()) return;
    this._lock();
    try {
      queue[index].redo();
      if (!queue[index].restoresSelection) {
        project.trees.select(queue[index].context);
      }
      index++;
      editor._dirty++;
    } finally {
      this._unlock();
    }
  };
  this.canUndo = function() {
    return index>0;
  };
  this.canRedo = function() {
    return index<queue.length;
  };

  /**
   * Add commands to the historic.
   *
   *     history.add(target, command, args)
   */
  this._add = function(command, merge) {
    if (lockRequests > 0) return;

    if (activeTransaction) {
      activeTransaction.commands.push(command);
      return;
    }

    if (batchRequests > 0) {
      commandBuffer.push(command);
    } else {
      push(command);
    }
  };

  this.transaction = function(callback) {
    if (typeof callback !== 'function') throw new Error('History transaction requires a callback');

    if (activeTransaction) {
      try {
        callback();
      } catch (nestedError) {
        activeTransaction.failed = true;
        activeTransaction.error = activeTransaction.error || nestedError;
        throw nestedError;
      }
      if (activeTransaction.failed) throw activeTransaction.error;
      return;
    }

    var before = snapshotSelection();
    var dirty = editor._dirty;
    var transaction = {
      commands: [],
      failed: false,
      error: null,
      batchRequests: batchRequests,
      commandBuffer: commandBuffer.slice()
    };
    activeTransaction = transaction;

    try {
      callback();
      if (transaction.failed) throw transaction.error;
      if (batchRequests !== transaction.batchRequests) {
        throw new Error('History transaction ended with an unfinished batch');
      }

      if (transaction.commands.length > 0) {
        var commands = new b3e.Commands(transaction.commands);
        var after = snapshotSelection();
        var grouped = {
          context: null,
          restoresSelection: true,
          undo: function() {
            commands.undo();
            restoreSelection(before);
          },
          redo: function() {
            commands.redo();
            restoreSelection(after);
          }
        };
        activeTransaction = null;
        this._add(grouped);
      } else {
        activeTransaction = null;
      }
    } catch (error) {
      activeTransaction = null;
      batchRequests = transaction.batchRequests;
      commandBuffer = transaction.commandBuffer;
      var rollbackError = null;
      this._lock();
      try {
        for (var i=transaction.commands.length-1; i>=0; i--) {
          transaction.commands[i].undo();
        }
      } catch (undoError) {
        rollbackError = undoError;
      }
      this._unlock();
      editor._dirty = dirty;
      restoreSelection(before);
      if (rollbackError) {
        rollbackError.transactionCause = error;
        throw rollbackError;
      }
      throw error;
    }
  };

  /**
   * Lock the manager, so it can't receive more commands.
   */
  this._lock = function() {
    // if (lockRequests===0) console.log('------- LOCK -------');
    lockRequests++;
  };
  this._unlock = function() {
    lockRequests--;
    // if (lockRequests===0) console.log('------- UNLOCK -------');
  };

  /**
   * While in batch, merges all added commands to a single command
   */
  this._beginBatch = function() {
    batchRequests++;
  };
  this._endBatch = function() {
    batchRequests = Math.max(0, batchRequests-1);

    if (batchRequests === 0) {
      if (commandBuffer.length > 0) {
        var command = new b3e.Commands(commandBuffer);
        command.restoresSelection = commandBuffer.some(function(item) {
          return item.restoresSelection;
        });
        command.context = project.trees.getSelected();
        this._add(command);
      }
      commandBuffer = [];
    }
  };


  this._applySettings = function(settings) {
    var max = settings.get('max_history');
    if (queue.length > max) {
      var start = Math.max(0, index-max+1);
      start = Math.min(start, queue.length-max);
      queue = queue.slice(start, start+max);
      index = Math.max(0, Math.min(queue.length, index-start));
    }
  };
};
