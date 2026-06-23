# Human Verification Checklist — Node Pins, Schema Panel & Execution Trace

Status: **NEEDS HUMAN GUI/RUNTIME VERIFICATION.** Nothing in this document has been
verified by an automated agent. The two headless gates below were run and passed;
every step that requires opening the desktop editor or running the live robot is
**unverified** and must be performed by a person.

Date written: 2026-06-13
Companion design: `docs/NODE_PINS_AND_TRACE_PLAN.md`, `docs/NODE_PINS.md`,
`docs/REALTIME_DEBUGGING.md`.

---

## 0. What was auto-verified (and what was NOT)

**Auto-verified (headless, this run):**
- `behavior-tree`: `go build ./...` and `go test ./...` — PASS.
- `behavior-tree-editor`: `node ./node_modules/gulp/bin/gulp.js build` — PASS
  (finished; emitted 20 pre-existing jshint "used out of scope" warnings in
  `src/editor/editor/managers/ImportManager.js`, which are warnings, not build
  failures).

**NOT auto-verified — requires a human (this entire checklist):**
- The Electron desktop editor actually launching and rendering.
- Loading `marvel.b3` in the editor.
- Schema-driven enum dropdowns rendering with labels.
- Wiring a data pin between two nodes.
- Running `haibot` against `marvel.b3` with execution trace enabled.
- Reading the trace output to localize a node.

Do NOT treat any GUI or live-runtime behavior below as confirmed. Each step states
exactly what to look at and what counts as pass/fail.

---

## 1. Prerequisites

- Repos present at:
  - Editor: `E:\GitHub\behavior-tree-lab\behavior-tree-editor`
  - Runtime: `E:\GitHub\behavior-tree-lab\behavior-tree`
  - Consumer/robot: `E:\GitHub\behavior-tree-lab\haibot`
- Tree under test: `E:\GitHub\behavior-tree-lab\haibot\configs\trees\marvel.b3`
- Node.js + the editor's `node_modules` already installed (the gulp build above
  proves this).
- Go toolchain on PATH (the `go test` gate above proves this).

Build the editor's web assets first (the desktop app loads from `build/`):

```
cd E:\GitHub\behavior-tree-lab\behavior-tree-editor
node ./node_modules/gulp/bin/gulp.js build
```

Expected: `Finished 'build'` with no `ERROR`. jshint warnings are acceptable.

---

## 2. Launch the desktop editor

This repo has no `npm start`/`npm run` script. It is an Electron app whose entry
is `build/desktop.js` / `build/index.html` (mirrors `src/desktop.js`). Launch via
the bundled Electron binary:

```
cd E:\GitHub\behavior-tree-lab\behavior-tree-editor
.\node_modules\.bin\electron.cmd .
```

(If `.` does not resolve to the desktop entry on your checkout, point Electron at
the built entry explicitly, e.g. `.\node_modules\.bin\electron.cmd .\build`.)

**PASS:** the editor window opens with the canvas and the left node palette.
**FAIL:** Electron exits, white screen, or a JS error in the dev console
(`View → Toggle Developer Tools`). Record the console error verbatim.

---

## 3. Load `marvel.b3`

1. In the editor, use the project/import menu to open
   `E:\GitHub\behavior-tree-lab\haibot\configs\trees\marvel.b3`.
2. Wait for the tree to render on the canvas.

**PASS:** the tree's root and child nodes render; no import error toast; the
developer console shows no uncaught exception. If `ImportManager` logs warnings
about skipped `dataConnections` with an unknown source, that is the documented
graceful-degradation path (`NODE_PINS_AND_TRACE_PLAN.md` §4.2) — note it but it is
not a failure by itself.
**FAIL:** blank canvas after import, an exception, or nodes missing that exist in
the file. Record the console output and which nodes are missing.

---

## 4. Verify schema-driven enum dropdowns render

This is the core Phase C claim and is **GUI-only** — confirm it directly.

1. Click a node that has an enum parameter. Best candidate in `marvel.b3`:
   a `FriendOp` node (enum param `op`). If none is present, drag a `FriendOp`
   from the palette, or pick any node whose schema declares `type: "enum"`
   (e.g. `Probability` exposes `skip_status`).
2. Look at the right-hand properties panel.

**PASS, ALL of:**
- The `op` (or chosen enum) field renders as a **dropdown / `<select>`**, not a
  free-text key/value row.
- The dropdown shows **human labels** (e.g. `SendInvite`, `Accept`, `Block`,
  `DelFriend`, `Reject`) rather than raw numbers.
- Selecting an option and re-selecting the node shows the choice persisted; the
  stored value is the numeric enum value (inspect via Export, step 7, if unsure).
- Numeric params render as number inputs, bool as a checkbox, string as text.
- A node type NOT in the schema falls back to the old `b3-key-table` editor
  (expected, not a failure).

**FAIL, ANY of:**
- Enum shows as a plain text box, or shows bare numbers with no labels.
- Selecting a value throws in the console.
- The panel is empty for a node that the schema covers.

Cross-check the schema actually loaded: open dev tools console and confirm no
404/parse error for `src/assets/data/nodes.schema.json` (bundled as
`assets/data/nodes.schema.json` in `build/`). If that file failed to load, the
dropdowns cannot be schema-driven — record it.

### 4b. Required-field validation (optional, same panel)

Clear a `required` enum/number field. **PASS:** the field turns red / shows an
error row, and attempting to Export/Save is blocked (per plan §3.4). **FAIL:** the
invalid tree saves silently.

---

## 5. Wire a data pin between two nodes

This is the riskiest Phase D claim and is **GUI-only**.

1. Identify a node with an **output pin** (a blackboard-key producer, e.g.
   `RecommendFriend → friend_targets`) and a node with a matching **input pin**
   (e.g. `FriendOp.roleids`, type `uint64list`). Add them from the palette if
   `marvel.b3` lacks them.
2. Ensure the source node topologically precedes the target (forward wiring only).
3. Drag from the source's output pin to the target's input pin.

**PASS, ALL of:**
- A **data connection** is drawn, visually **distinct** from parent-child tree
  edges (data wires are dashed/green; tree edges solid/blue per plan §4.2).
- The wire connects the correct pins (output→input), no occlusion confusion.
- Wiring a second source into the same input replaces the first (last-wire-wins).
- A cycle attempt (wire back into an ancestor) is rejected.

**FAIL, ANY of:**
- No wire is created, the drag throws, or the wire attaches to the wrong pin.
- Data and tree edges are visually indistinguishable.

### 5b. Round-trip survival

1. Export/Save the tree, then re-import it (step 3).
2. Also trigger a `_redraw` by changing a node's category, if available.

**PASS:** the data wire returns at the same pins after reload and after redraw
(plan §4.4 items 2 and 5). **FAIL:** the wire is dropped on save/reload or wiped
by redraw. Inspect the exported JSON (step 7) for a top-level `dataConnections`
array on the source/target node.

---

## 6. Run haibot with execution trace and localize a node

> IMPORTANT HONESTY NOTE — read before doing this step.
> Two distinct "trace" mechanisms exist; do not conflate them:
> 1. **`packet_trace`** in `haibot/configs/robot.json` (`packet_trace_enabled:true`)
>    — this is a NETWORK packet trace, NOT the behavior-tree node trace.
> 2. **`ExecutionTracer`** — the behavior-tree node-level trace from
>    `behavior-tree/core/ExecutionTrace.go` (Phase B). As of this checkout,
>    `haibot/cmd/main.go` does **NOT** call `SetTrace()` to attach an
>    `ExecutionTracer` to the live robot's tree. So a normal `haibot` run does not
>    emit node-level execution trace on its own.
>
> Therefore there are two honest paths for "run with trace and localize a node":

### Path A — Reference trace via the example (no haibot code change)

This exercises the exact ExecutionTracer query API a debugger would use, against a
multi-node + cross-tree blackboard scenario including a failing node.

```
cd E:\GitHub\behavior-tree-lab\behavior-tree
go run ./examples/trace_example
```

Read the output sections it prints:
- `== all node records ==` — one line per node per tick:
  `tick=… seq=… tree=… node=<id>(<NodeName>) status=<S|F|E> dur=…ns`.
- `== errors only ==` — filtered to failing/erroring nodes, with `node=<id>` and
  the error string.
- `== cross-tree blackboard accesses ==` — `set`/`get` of `friend_targets`
  with the owning node and tree.
- `== full trace JSON ==` — the exportable record set.

**Localize a node:** find the `Error` node in `== errors only ==`; its `node=<id>`
plus `tree=<id>` and `seq` uniquely identify which node failed and on which tick.
Confirm the same `node_id` appears in the full JSON with `status:"error"`.

**PASS:** the example prints node records, an errors-only entry pointing at the
`Error` node, and the cross-tree `friend_targets` set→get pair. **FAIL:** missing
sections, no error record, or a panic.

### Path B — Live haibot run (network/packet trace + WS debugger)

This runs the real robot against `marvel.b3` and gives runtime visibility, but via
the packet trace + the WebSocket tree debugger (`debug_tree_*`), NOT the
ExecutionTracer (unless someone has wired `SetTrace` into haibot — verify first
with `grep -rn SetTrace E:\GitHub\behavior-tree-lab\haibot`; if it returns nothing,
node-level ExecutionTrace is NOT active in the live run).

1. Confirm `haibot/configs/robot.json` has:
   - `"tree_file": "../configs/trees/marvel.b3"`,
   - `"packet_trace_enabled": true`, `"packet_trace_verbose": true`,
   - `"debug_tree_enabled": true`, `"debug_tree_listen": "127.0.0.1:6112"`,
     `"debug_tree_wait_client": true`.
   With `debug_tree_wait_client:true` the robot waits for the editor to connect
   before ticking — set it `false` if you want it to run standalone.
2. Build and run the robot (run from `haibot/cmd` so the relative
   `../configs/robot.json` resolves; or set `HAIBOT_CONFIG` to an absolute path):
   ```
   cd E:\GitHub\behavior-tree-lab\haibot\cmd
   go run .
   ```
   (A prebuilt `cmd/haibot` ELF exists but is a Linux binary — on Windows build
   from source as above.)
3. Watch the log file it writes under `haibot/cmd/logs/haibot-<date>.log`
   (`log_dir: "logs"`), and stderr (`also_log_to_stderr: true`).

**Localize a node via the WS debugger (optional, GUI):** with
`debug_tree_listen` at `127.0.0.1:6112`, point the editor's real-time debug client
at `ws://localhost:6112/debug` (see `docs/REALTIME_DEBUGGING.md`) and watch nodes
highlight running/success/failure as the tree ticks. The highlighted failing node
is the localization.

**PASS:** the robot starts, loads `marvel.b3`, ticks, and either the log shows the
tree progressing (packet trace lines / node status) or the editor debugger
highlights live node statuses. **FAIL:** robot exits with a config/tree error
(record the stderr), or no node activity is observable.

> If you need node-level ExecutionTrace from the LIVE robot (not just the example),
> that requires a code change in `haibot/cmd/main.go` to construct an
> `core.NewExecutionTracer()`, call `tree.SetTrace(tracer)` on the loaded tree, and
> dump `tracer.ExportJSON()` on shutdown. This is NOT present today — treat live
> node-level trace as UNAVAILABLE until that wiring exists.

---

## 7. Inspect exported JSON (supports steps 4, 5)

After editing in the GUI, Export the tree and open the resulting `.b3` JSON:
- Enum params store the **numeric value** (e.g. `"op": 1`), confirming the dropdown
  maps label→value correctly.
- Wired pins appear as a per-node `"dataConnections": [{ "targetPin": …,
  "sourceNodeId": …, "sourcePin": … }]` array (plan §4.1). Tree (parent-child)
  structure is unchanged.

**PASS:** values and `dataConnections` match what you set in the GUI.
**FAIL:** enum stored as a label string, missing `dataConnections`, or corrupted
node structure.

---

## 8. Sign-off

Record, for each section, PASS / FAIL / NOT-RUN plus any console or log output:

- [ ] 2. Editor launches
- [ ] 3. `marvel.b3` loads
- [ ] 4. Enum dropdowns render with labels
- [ ] 4b. Required-field validation blocks save (optional)
- [ ] 5. Data pin wires between two nodes
- [ ] 5b. Wire survives round-trip + redraw
- [ ] 6A. trace_example localizes the failing node
- [ ] 6B. Live haibot run observable (packet trace / WS debugger)
- [ ] 7. Exported JSON matches GUI edits

Until every GUI/runtime box above is checked by a human, none of the
schema-panel, data-pin, or live-trace claims may be reported as verified.
