// RED tests for atomic HistoryManager transactions.
//
// This harness loads the shipping HistoryManager.js and supplies only the
// editor/project/command surface that manager uses. Run with:
//
//   node test/historytransaction.spec.js
//
// The suite is intentionally red until HistoryManager.transaction is added.
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');
var b3e = { project: {} };
var sandbox = { b3e: b3e, console: console };

vm.runInNewContext(
  fs.readFileSync(path.join(ROOT, 'src/editor/utils/Command.js'), 'utf8'),
  sandbox,
  { filename: 'src/editor/utils/Command.js' });

vm.runInNewContext(
  fs.readFileSync(
    path.join(ROOT, 'src/editor/project/managers/HistoryManager.js'),
    'utf8'),
  sandbox,
  { filename: 'src/editor/project/managers/HistoryManager.js' });

var failures = 0;

function fail(message) {
  failures++;
  console.error('FAIL: ' + message);
}

function pass(message) {
  console.log('ok: ' + message);
}

function equal(actual, expected, message) {
  var left = JSON.stringify(actual);
  var right = JSON.stringify(expected);
  if (left !== right) {
    fail(message + '\n  expected ' + right + '\n  got      ' + left);
  } else {
    pass(message);
  }
}

function truthy(value, message) {
  equal(!!value, true, message);
}

function makeTree(name) {
  var tree = {
    name: name,
    _selectedBlocks: [],
    blocks: {
      getSelected: function() { return tree._selectedBlocks.slice(); }
    },
    selection: {
      deselectAll: function() { tree._selectedBlocks = []; },
      select: function(block) {
        if (tree._selectedBlocks.indexOf(block) < 0) {
          tree._selectedBlocks.push(block);
        }
      }
    }
  };
  return tree;
}

function makeHarness() {
  var maxHistory = 100;
  var maxHistoryError = null;
  var tree = makeTree('tree-1');
  var project = {
    trees: {
      selected: tree,
      getSelected: function() { return this.selected; },
      select: function(next) { this.selected = next; }
    }
  };
  var editor = {
    _dirty: 0,
    _settings: {
      get: function(name) {
        if (name === 'max_history') {
          if (maxHistoryError) throw maxHistoryError;
          return maxHistory;
        }
        return undefined;
      }
    }
  };
  return {
    editor: editor,
    project: project,
    tree: tree,
    history: new b3e.project.HistoryManager(editor, project),
    setMaxHistory: function(value) { maxHistory = value; },
    setMaxHistoryError: function(error) { maxHistoryError = error; }
  };
}

function commandFor(list, value, rollbackLog) {
  return {
    context: null,
    redo: function() { list.push(value); },
    undo: function() {
      if (rollbackLog) rollbackLog.push('undo-' + value);
      var index = list.lastIndexOf(value);
      if (index >= 0) list.splice(index, 1);
    }
  };
}

function applyAndRecord(history, list, value, rollbackLog) {
  list.push(value);
  history._add(commandFor(list, value, rollbackLog));
}

function requireTransaction(history, scenario) {
  if (typeof history.transaction !== 'function') {
    fail(scenario + ': HistoryManager.transaction is not implemented');
    return false;
  }
  return true;
}

function expectThrow(fn, message) {
  var threw = false;
  try {
    fn();
  } catch (err) {
    threw = true;
  }
  truthy(threw, message);
}

// Failure must roll back its mutations without destroying history that was
// redoable before the transaction began.
(function failurePreservesRedoTail() {
  var h = makeHarness();
  var values = [];

  applyAndRecord(h.history, values, 'A');
  applyAndRecord(h.history, values, 'B');
  h.history.undo();
  var dirtyBefore = h.editor._dirty;

  if (!requireTransaction(h.history,
      'failed transaction preserves an existing Redo tail')) return;

  expectThrow(function() {
    h.history.transaction(function() {
      applyAndRecord(h.history, values, 'temporary');
      throw new Error('fail after mutation');
    });
  }, 'failed transaction surfaces the callback error');

  equal(values, ['A'], 'failed transaction reverse-undoes its mutation');
  equal(h.editor._dirty, dirtyBefore,
    'failed transaction restores the previous dirty value');
  truthy(h.history.canRedo(),
    'failed transaction preserves the Redo tail');
  h.history.redo();
  equal(values, ['A', 'B'],
    'the pre-existing Redo command still executes after rollback');
})();

// A nested failure poisons the outer transaction even if user code catches the
// inner exception and continues adding commands.
(function nestedCaughtErrorIsAbortOnly() {
  var h = makeHarness();
  var values = [];

  if (!requireTransaction(h.history,
      'nested caught errors make the outer transaction abort-only')) return;

  expectThrow(function() {
    h.history.transaction(function() {
      applyAndRecord(h.history, values, 'outer-before');
      try {
        h.history.transaction(function() {
          applyAndRecord(h.history, values, 'inner');
          throw new Error('nested failure');
        });
      } catch (ignore) {}
      applyAndRecord(h.history, values, 'outer-after');
    });
  }, 'outer transaction remains failed after a caught nested error');

  equal(values, [], 'abort-only nested failure rolls back every mutation');
  equal(h.history.canUndo(), false,
    'abort-only nested failure commits no history entry');
})();

// Rollback order is part of atomicity: later mutations are undone first.
(function rollbackRunsInReverseOrder() {
  var h = makeHarness();
  var values = [];
  var rollbackLog = [];

  if (!requireTransaction(h.history,
      'rollback executes buffered commands in reverse order')) return;

  expectThrow(function() {
    h.history.transaction(function() {
      applyAndRecord(h.history, values, 'first', rollbackLog);
      applyAndRecord(h.history, values, 'second', rollbackLog);
      throw new Error('rollback');
    });
  }, 'rollback scenario surfaces its failure');

  equal(rollbackLog, ['undo-second', 'undo-first'],
    'rollback executes undo in reverse command order');
  equal(values, [], 'reverse rollback restores mutation state');
})();

// A callback may fail after a manager opened a legacy batch but before it
// reached _endBatch. The transaction boundary must not poison later history.
(function failedTransactionClearsUnfinishedLegacyBatch() {
  var h = makeHarness();
  var values = [];

  expectThrow(function() {
    h.history.transaction(function() {
      h.history._beginBatch();
      applyAndRecord(h.history, values, 'temporary');
      throw new Error('manager failed before _endBatch');
    });
  }, 'failed transaction surfaces an unfinished legacy batch error');

  applyAndRecord(h.history, values, 'after');
  truthy(h.history.canUndo(),
    'history accepts a normal command after failed unfinished batch');
  h.history.undo();
  equal(values, [],
    'normal command after failed unfinished batch is independently undoable');
})();

// Existing HistoryManager changes dirty even when no command exists. The new
// transaction contract also fixes those no-op boundaries.
(function noOpUndoRedoPreserveDirty() {
  var h = makeHarness();
  h.editor._dirty = 7;

  h.history.undo();
  equal(h.editor._dirty, 7, 'no-op Undo leaves dirty unchanged');

  h.editor._dirty = 7;
  h.history.redo();
  equal(h.editor._dirty, 7, 'no-op Redo leaves dirty unchanged');
})();

(function shrinkingMaxHistoryKeepsIndexValid() {
  var h = makeHarness();
  var values = [];
  applyAndRecord(h.history, values, 'A');
  applyAndRecord(h.history, values, 'B');
  applyAndRecord(h.history, values, 'C');
  h.setMaxHistory(1);
  h.history._applySettings(h.editor._settings);

  h.history.undo();
  equal(values, ['A', 'B'],
    'shrinking max history keeps index on the retained newest command');
  equal(h.history.canUndo(), false,
    'only the retained newest command remains undoable after shrink');
})();

// A transaction started by code already inside a legacy batch remains part of
// that caller's single user action.
(function successfulTransactionJoinsOuterLegacyBatch() {
  var h = makeHarness();
  var values = [];

  h.history._beginBatch();
  applyAndRecord(h.history, values, 'outer-before');
  h.history.transaction(function() {
    applyAndRecord(h.history, values, 'transaction');
  });
  applyAndRecord(h.history, values, 'outer-after');
  h.history._endBatch();

  h.history.undo();
  equal(values, [],
    'one Undo reverses a transaction and its surrounding legacy batch');
  equal(h.history.canUndo(), false,
    'a transaction inside a legacy batch creates only one history entry');
  equal(h.editor._dirty, 0,
    'a transaction inside a legacy batch increments dirty only once');
})();

// The grouped command owns explicit before/after selection snapshots. Generic
// command context restoration must not overwrite the pre-transaction tree.
(function transactionRestoresSelectionAcrossTrees() {
  var h = makeHarness();
  var values = [];
  var beforeBlock = {id: 'before-block'};
  var afterBlock = {id: 'after-block'};
  var afterTree = makeTree('tree-2');
  h.tree.selection.select(beforeBlock);

  h.history.transaction(function() {
    h.project.trees.select(afterTree);
    afterTree.selection.select(afterBlock);
    applyAndRecord(h.history, values, 'cross-tree-change');
  });

  h.history.undo();
  equal(h.project.trees.getSelected().name, 'tree-1',
    'Undo restores the tree selected before the transaction');
  equal(h.tree.blocks.getSelected(), [beforeBlock],
    'Undo restores blocks selected before the transaction');

  h.history.redo();
  equal(h.project.trees.getSelected().name, 'tree-2',
    'Redo restores the tree selected after the transaction');
  equal(afterTree.blocks.getSelected(), [afterBlock],
    'Redo restores blocks selected after the transaction');
})();

// Joining a legacy batch must not hide the transaction's explicit selection
// snapshots behind the outer Commands wrapper.
(function outerLegacyBatchPreservesTransactionSelection() {
  var h = makeHarness();
  var values = [];
  var beforeBlock = {id: 'outer-before-block'};
  var afterBlock = {id: 'outer-after-block'};
  var afterTree = makeTree('tree-2');
  h.tree.selection.select(beforeBlock);

  h.history._beginBatch();
  applyAndRecord(h.history, values, 'outer-before');
  h.history.transaction(function() {
    h.project.trees.select(afterTree);
    afterTree.selection.select(afterBlock);
    applyAndRecord(h.history, values, 'transaction');
  });
  applyAndRecord(h.history, values, 'outer-after');
  h.history._endBatch();

  h.history.undo();
  equal(values, [],
    'Undo reverses the transaction and surrounding legacy commands');
  equal(h.project.trees.getSelected().name, 'tree-1',
    'legacy-batched transaction Undo preserves its before-tree snapshot');
  equal(h.tree.blocks.getSelected(), [beforeBlock],
    'legacy-batched transaction Undo preserves its before-block snapshot');

  h.history.redo();
  equal(values, ['outer-before', 'transaction', 'outer-after'],
    'Redo reapplies the transaction and surrounding legacy commands');
  equal(h.project.trees.getSelected().name, 'tree-2',
    'legacy-batched transaction Redo preserves its after-tree snapshot');
  equal(afterTree.blocks.getSelected(), [afterBlock],
    'legacy-batched transaction Redo preserves its after-block snapshot');
})();

// A failing command is a critical invariant error, but it must not leak the
// manager lock and silently discard every later history command.
(function undoRedoExceptionsReleaseHistoryLock() {
  var undoHarness = makeHarness();
  var undoValues = ['bad-undo'];
  undoHarness.history._add({
    redo: function() { undoValues.push('bad-undo'); },
    undo: function() { throw new Error('undo failed'); }
  });

  expectThrow(function() {
    undoHarness.history.undo();
  }, 'Undo surfaces a command exception');
  applyAndRecord(undoHarness.history, undoValues, 'after-undo-error');
  truthy(undoHarness.history.canUndo(),
    'history accepts a new command after an Undo exception');
  undoHarness.history.undo();
  equal(undoValues, ['bad-undo'],
    'the command after an Undo exception remains independently undoable');

  var redoHarness = makeHarness();
  var redoValues = ['bad-redo'];
  redoHarness.history._add({
    redo: function() { throw new Error('redo failed'); },
    undo: function() { redoValues.pop(); }
  });
  redoHarness.history.undo();

  expectThrow(function() {
    redoHarness.history.redo();
  }, 'Redo surfaces a command exception');
  applyAndRecord(redoHarness.history, redoValues, 'after-redo-error');
  truthy(redoHarness.history.canUndo(),
    'history accepts a new command after a Redo exception');
  redoHarness.history.undo();
  equal(redoValues, [],
    'the command after a Redo exception remains independently undoable');
})();

// If a later grouped undo succeeds before an earlier undo fails, compensate
// the completed step so both the model and cursor still describe "applied".
(function partialGroupedUndoIsCompensated() {
  var h = makeHarness();
  var values = ['A', 'B'];
  var failAUndo = true;
  var dirtyBefore;

  h.history.transaction(function() {
    h.history._add({
      redo: function() { values.push('A'); },
      undo: function() {
        if (failAUndo) {
          failAUndo = false;
          throw new Error('A undo failed once');
        }
        commandFor(values, 'A').undo();
      }
    });
    h.history._add(commandFor(values, 'B'));
  });
  dirtyBefore = h.editor._dirty;

  expectThrow(function() {
    h.history.undo();
  }, 'grouped Undo surfaces a partial command failure');
  equal(values, ['A', 'B'],
    'failed grouped Undo compensates commands already undone');
  equal(h.editor._dirty, dirtyBefore,
    'failed grouped Undo leaves dirty at the applied cursor');
  truthy(h.history.canUndo(),
    'failed grouped Undo leaves the transaction applied and undoable');
  equal(h.history.canRedo(), false,
    'failed grouped Undo does not expose a Redo for an applied transaction');

  h.history.undo();
  equal(values, [], 'grouped Undo can be retried after compensation');
  equal(h.history.canUndo(), false,
    'successful retry advances the cursor to the undone state');
  truthy(h.history.canRedo(),
    'successful retry exposes the transaction for Redo');
})();

// The symmetric Redo case must undo completed forward steps when a later
// command fails, leaving the model and cursor at the fully-undone state.
(function partialGroupedRedoIsCompensated() {
  var h = makeHarness();
  var values = ['A', 'B'];
  var failBRedo = true;
  var dirtyBefore;

  h.history.transaction(function() {
    h.history._add(commandFor(values, 'A'));
    h.history._add({
      redo: function() {
        if (failBRedo) {
          failBRedo = false;
          throw new Error('B redo failed once');
        }
        values.push('B');
      },
      undo: function() { commandFor(values, 'B').undo(); }
    });
  });
  h.history.undo();
  dirtyBefore = h.editor._dirty;

  expectThrow(function() {
    h.history.redo();
  }, 'grouped Redo surfaces a partial command failure');
  equal(values, [],
    'failed grouped Redo compensates commands already redone');
  equal(h.editor._dirty, dirtyBefore,
    'failed grouped Redo leaves dirty at the undone cursor');
  equal(h.history.canUndo(), false,
    'failed grouped Redo does not expose Undo for an undone transaction');
  truthy(h.history.canRedo(),
    'failed grouped Redo leaves the transaction undone and redoable');

  h.history.redo();
  equal(values, ['A', 'B'], 'grouped Redo can be retried after compensation');
  truthy(h.history.canUndo(),
    'successful retry advances the cursor to the applied state');
  equal(h.history.canRedo(), false,
    'successful retry consumes the transaction Redo entry');
})();

// Shrinking at an undone cursor must keep a contiguous continuation from the
// current model state, rather than retaining a newer command whose prerequisite
// was evicted.
(function shrinkingMaxHistoryKeepsRedoChainContiguous() {
  var h = makeHarness();
  var values = [];
  applyAndRecord(h.history, values, 'A');
  applyAndRecord(h.history, values, 'B');
  applyAndRecord(h.history, values, 'C');
  h.history.undo();
  h.history.undo();
  equal(values, ['A'], 'history cursor is positioned after A');

  h.setMaxHistory(1);
  h.history._applySettings(h.editor._settings);
  truthy(h.history.canRedo(),
    'shrinking history retains the next redoable command');
  h.history.redo();
  equal(values, ['A', 'B'],
    'Redo after shrinking does not skip an evicted prerequisite');
})();

// Commit is atomic even if bookkeeping fails after the callback succeeds.
// The prior queue and Redo tail must survive just like a callback failure.
(function commitFailurePreservesQueueAndRedoTail() {
  var h = makeHarness();
  var values = [];
  applyAndRecord(h.history, values, 'A');
  applyAndRecord(h.history, values, 'B');
  h.history.undo();
  var dirtyBefore = h.editor._dirty;
  h.setMaxHistoryError(new Error('max history unavailable'));

  expectThrow(function() {
    h.history.transaction(function() {
      applyAndRecord(h.history, values, 'temporary');
    });
  }, 'transaction surfaces a commit bookkeeping exception');
  h.setMaxHistoryError(null);

  equal(values, ['A'],
    'failed commit reverse-undoes the transaction mutation');
  equal(h.editor._dirty, dirtyBefore,
    'failed commit restores the previous dirty value');
  truthy(h.history.canRedo(),
    'failed commit preserves the pre-existing Redo tail');
  h.history.redo();
  equal(values, ['A', 'B'],
    'the prior Redo command still executes after commit failure');
})();

// Two recorded mutations inside one successful transaction are one user action
// and therefore one undoable/redoable history entry.
(function successfulTransactionIsOneHistoryEntry() {
  var h = makeHarness();
  var values = [];

  if (!requireTransaction(h.history,
      'successful transaction creates one history entry')) return;

  h.history.transaction(function() {
    applyAndRecord(h.history, values, 'node');
    applyAndRecord(h.history, values, 'edge');
  });

  equal(values, ['node', 'edge'],
    'successful transaction keeps all mutations applied');
  equal(h.editor._dirty, 1,
    'successful transaction increments dirty exactly once');
  truthy(h.history.canUndo(), 'successful transaction is undoable');

  h.history.undo();
  equal(values, [], 'one Undo reverses the whole successful transaction');
  equal(h.history.canUndo(), false,
    'successful transaction produced only one history entry');

  h.history.redo();
  equal(values, ['node', 'edge'],
    'one Redo reapplies the whole successful transaction');
})();

if (failures > 0) {
  console.error('\n' + failures + ' assertion(s) failed (expected RED).');
  process.exit(1);
}

console.log('\nAll HistoryManager transaction tests passed.');
