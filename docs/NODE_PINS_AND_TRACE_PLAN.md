# Node Pins, Schema & Execution Trace — Unified Implementation Plan

Status: design frozen, buildable. Single source of truth for the four components
(NODE SCHEMA, EXECUTION TRACE, SCHEMA-DRIVEN PANEL + VALIDATION, DATA PINS).
Every conflict the critic raised (A1–A5, B1–B5, C1–C5, D1–D5, E) is resolved below
and the resolution is referenced inline as `[Cxx]`.

Repos:
- `behavior-tree/` — Go runtime (module `github.com/henrytien/behavior-tree`, pkg `behaviortree` imported as `bt`).
- `behavior-tree-editor/` — AngularJS + Electron editor.
- `haibot/` — Go consumer; custom nodes + protobuf enums (`OpFriendType`, …).

Branches (do not commit/push; orchestrator commits): editor on `feat/node-pins`;
runtime new branch `feat/trace-and-schema` off current.

Verifiability gates:
- Go: `go test ./...` must pass.
- Editor: `node ./node_modules/gulp/bin/gulp.js build` must pass with no new jshint warnings in changed files. ES5 + `"use strict"`.
- No live GUI/game validation in this run — every GUI-dependent claim is marked `NEEDS-GUI-VERIFY` and a human checklist is provided.

---

## 0. Conflict resolutions (the frozen decisions)

| # | Conflict | Resolution |
|---|----------|------------|
| A1 | Two incompatible `nodes.schema.json` shapes | **One frozen format** (Section 1). Object-keyed by node name for O(1) lookup. Types kept as `int`/`float` distinct (runtime distinguishes; see B2). Enum is a `[]{value,label}` list, NOT bare `[1,2,3]`+`enumLabels`. |
| A2 | `category:"tree"` not a Go category | Schema `category` enum = `composite|decorator|action|condition`. `SubTree` reports `action` from runtime (`SubTree` embeds `Action`). The editor's `"tree"` is an editor-only export convention and is **not** a schema category. btschema never emits `tree`. Editor maps SubTree blocks itself. |
| A3 | Trace can't source NodeName/Category/seq from mixed hooks | Prerequisite refactor: **standardize all `Tick` hooks on `IBaseNode`** before writing the tracer (Phase 2, step 2.0). |
| A4 | Trace vs Debugger fight over single `debug` field | Add a **separate `trace` field + `SetTrace()`** on `BehaviorTree`/`Tick`. WS debugger keeps `debug`. They coexist. |
| A5 / D3 | Phase 4 needs output pins schema doesn't define | Extend schema with optional **`outputs`** (blackboard-key producers, e.g. `RecommendFriend → friend_targets`) and **`inputs`** derived from params. Defined in Section 1 so Phase 4 has a contract. |
| B1 | "schema default" is fiction — nodes panic | Schema `default` means **editor placeholder only, NOT a runtime default**. `required:true` is enforced **at export** (Section 3.4), so a red field cannot be saved into a tree that would panic. |
| B2 | int vs float64 | Keep `int`/`float` in schema for UX; validator must NOT claim runtime type-safety beyond "JSON number". Runtime only ever sees `float64`. |
| B3 | Blackboard not goroutine-safe; ~15 accessors | Hook **only `_getMemory` + `Memory.Set`/`Memory.Get`** at the single chokepoint (Section 2.3), not 15 methods. `TraceWriter` nilable → inline `if w != nil`. No new lock on the hot path when off. |
| B4 | `_execute` has no recover() | Tracer `defer` **records then re-panics** (never swallows). Documented in Section 2.2. |
| B5 | SubTree shares parent treeID | Trace hook consults existing `tick.GetLastSubTree()` to label the owning tree. Section 2.4. |
| C1 | Panel controller description ≠ repo | Treat propertiespanel.controller.js as a **rewrite**; schema loaded **once** via singleton cache, not per `blockselected` event. Section 3. |
| C2/C3 | Three registries (Go / b3-lib / schema) drift; RandWait/RandomSleep/Log missing in editor | **Reconcile registries** (Phase 3, step 3.0): editor palette is generated to match the Go-derived schema; missing built-ins (`RandWait`, `RandomSleep`, `Log`) added to editor; validator only flags nodes absent from schema. |
| C4 | `_redraw()` wipes overlays | Data-pin display objects re-applied in `_redraw()` exactly like `_debugShape`/`_debugMarkers`. Section 4. |
| C5 | dataConnections dropped by Import/Export | Edit **both** ExportManager + ImportManager; additive top-level node field; multiplexing rule defined (Section 4). |
| D1 | No tracer attachment point | `SetTrace()` (= A4). |
| D2 | btschema can't read unexported registry | Add exported `Names() []string` / `Each(func(name string, t reflect.Type))` to `RegisterStructMaps`. Section 1.3. |
| D3 | protobuf enum circular dep | btschema generator **runs from haibot** (`haibot/cmd/btschema`), which already imports behavior-tree. Core nodes scanned via exported registry accessor; enum-rich custom nodes scanned in the same binary. Section 1.3. |
| D4 | `required` semantics undefined | required→enforced at editor export (block save) AND optional Go validator (`cmd/btvalidate`). Section 3.4 / 1.4. |
| D5 | Trace BB log vs existing Dump | Trace reuses `Blackboard.Dump` semantics (global+tree merge) for snapshots; per-access log adds op/key/scope without inventing a conflicting view. Section 2. |
| E | `SetTitle` sets name; uint64 precision; jshint | Fix `SetTitle` (Section 2.0). uint64list serialized as **JSON array of numbers within 2^53 OR strings** (`btprops.UInt64Slice` must parse strings — verify). jshint gate honored. |

---

## 1. Node Schema (Phase A)

### 1.1 Frozen `nodes.schema.json` shape `[A1]`

Object-keyed, single file, bundled into editor at `src/assets/data/nodes.schema.json`
and committed in `behavior-tree/nodes.schema.json`.

```json
{
  "schemaVersion": 1,
  "nodes": {
    "Wait": {
      "title": "Wait",
      "category": "action",
      "description": "Suspends execution for milliseconds",
      "childCount": { "min": 0, "max": 0 },
      "params": [
        { "name": "milliseconds", "type": "int", "default": 1000,
          "required": true, "description": "Max wait time in ms" }
      ],
      "inputs": [
        { "pin": "milliseconds", "type": "int" }
      ],
      "outputs": []
    },
    "Probability": {
      "title": "Probability",
      "category": "decorator",
      "childCount": { "min": 1, "max": 1 },
      "params": [
        { "name": "probability", "type": "float", "default": 0.5, "required": false,
          "description": "0.0-1.0; aliased by rate/percent" },
        { "name": "skip_status", "type": "enum", "default": 0, "required": false,
          "enum": { "sourceProto": "",
                    "options": [ {"value":0,"label":"success"},
                                 {"value":1,"label":"failure"},
                                 {"value":2,"label":"error"} ] } }
      ],
      "inputs": [], "outputs": []
    },
    "FriendOp": {
      "title": "Friend Operation",
      "category": "action",
      "childCount": { "min": 0, "max": 0 },
      "params": [
        { "name": "op", "type": "enum", "default": 1, "required": true,
          "enum": { "sourceProto": "OpFriendType",
                    "options": [ {"value":1,"label":"SendInvite"},
                                 {"value":2,"label":"Accept"},
                                 {"value":3,"label":"Block"},
                                 {"value":4,"label":"DelFriend"},
                                 {"value":10,"label":"Reject"} ] } },
        { "name": "roleids", "type": "uint64list", "default": null, "required": false,
          "description": "Explicit role IDs; else blackboard" },
        { "name": "limit", "type": "int", "default": 1, "required": false }
      ],
      "inputs": [ { "pin": "roleids", "type": "uint64list" } ],
      "outputs": []
    },
    "RecommendFriend": {
      "title": "Recommend Friend",
      "category": "action",
      "childCount": { "min": 0, "max": 0 },
      "params": [],
      "inputs": [],
      "outputs": [
        { "pin": "friend_targets", "type": "uint64list", "blackboardKey": "friend_targets",
          "scope": "global",
          "description": "RPC result; written to blackboard via SetMem" }
      ]
    }
  }
}
```

Rules:
- `category` ∈ `composite|decorator|action|condition` only `[A2]`.
- `type` ∈ `int|float|bool|string|enum|uint64list`. `int`/`float` kept distinct `[B2]`.
- `enum.options` is `[]{value:int,label:string}`; storage is numeric value, label is display only. i18n deferred (schema v2).
- `default` = editor placeholder, NOT runtime default `[B1]`.
- `inputs[]` derive from settable params (the wirable subset). `outputs[]` are blackboard-key producers (`SetMem`) — this is what Phase 4 wires from `[A5]`. `outputs` requires manual declaration in the node's `Schema()` (the runtime can't introspect a `SetMem` call).
- `childCount` resolves the decorator/composite child-count contract.

### 1.2 Go schema interface + types — `behavior-tree/schema/schema.go` (NEW)

```go
package schema

// Schemaer is OPTIONAL. A node opts in by implementing Schema(); the generator
// skips nodes that don't.
type Schemaer interface {
    Schema() *NodeSchema
}

type NodeSchema struct {
    Name        string         `json:"-"`          // map key, not emitted inline
    Title       string         `json:"title"`
    Category    string         `json:"category"`   // composite|decorator|action|condition
    Description string         `json:"description,omitempty"`
    ChildCount  ChildCount     `json:"childCount"`
    Params      []*ParamSchema `json:"params"`
    Inputs      []*PinSchema   `json:"inputs"`
    Outputs     []*PinSchema   `json:"outputs"`
}

type ChildCount struct {
    Min int `json:"min"`
    Max int `json:"max"` // -1 = unlimited
}

type ParamSchema struct {
    Name        string      `json:"name"`
    Type        string      `json:"type"` // int|float|bool|string|enum|uint64list
    Default     interface{} `json:"default"`  // PLACEHOLDER ONLY, not runtime default
    Required    bool        `json:"required"`
    Description string      `json:"description,omitempty"`
    Enum        *EnumDef    `json:"enum,omitempty"` // only when Type=="enum"
}

type EnumDef struct {
    SourceProto string       `json:"sourceProto,omitempty"`
    Options     []EnumOption `json:"options"`
}
type EnumOption struct {
    Value int    `json:"value"`
    Label string `json:"label"`
}

// PinSchema: input = wirable param; output = blackboard-key producer.
type PinSchema struct {
    Pin          string `json:"pin"`
    Type         string `json:"type"`
    BlackboardKey string `json:"blackboardKey,omitempty"` // outputs only
    Scope        string `json:"scope,omitempty"`          // "global"|"tree"
    Description  string `json:"description,omitempty"`
}

// File is the top-level emitted shape (object-keyed) [A1].
type File struct {
    SchemaVersion int                    `json:"schemaVersion"`
    Nodes         map[string]*NodeSchema `json:"nodes"`
}
```

### 1.3 Registry accessor + generator `[D2][D3]`

Add to `behavior-tree/b3.functions.go` (exported iterator over the unexported map):

```go
// Each iterates every registered name and its concrete type.
func (rsm *RegisterStructMaps) Each(fn func(name string, t reflect.Type)) {
    for name, t := range rsm.maps { fn(name, t) }
}
// Names returns all registered node names (sorted by caller if needed).
func (rsm *RegisterStructMaps) Names() []string {
    out := make([]string, 0, len(rsm.maps))
    for name := range rsm.maps { out = append(out, name) }
    return out
}
```

Add to `behavior-tree/loader/BevTreeFactory.go` an exported accessor so the
generator can obtain the base registry without re-declaring it:

```go
// BaseStructMaps returns the registry of built-in node types.
func BaseStructMaps() *bt.RegisterStructMaps { return createBaseStructMaps() }
```

Generator lives in **`haibot/cmd/btschema/main.go` (NEW)** — NOT in
`behavior-tree/cmd` — because protobuf enums (`OpFriendType`) live in haibot and
`haibot` already imports `behavior-tree` (the reverse import would be circular) `[D3]`.

Generator algorithm:
1. `base := loader.BaseStructMaps()`; build the haibot custom registry the same way haibot's `RegisterNodes` does.
2. For each registered name, `reflect.New(t)`, type-assert to `schema.Schemaer`. If it implements `Schema()`, call it; set `NodeSchema.Name`. Skip otherwise.
3. Enum-bearing custom nodes (`FriendOp`) source `enum.options` from the protobuf enum maps in haibot (e.g. `OpFriendType_name`), giving readable labels with no manual drift.
4. Marshal `schema.File{SchemaVersion:1, Nodes:...}` to:
   - `behavior-tree/nodes.schema.json` (committed reference), and
   - `behavior-tree-editor/src/assets/data/nodes.schema.json` (bundled into build).

Nodes contribute schema via the **same optional `Schemaer` interface** — base
nodes in `behavior-tree/actions|decorators|composites`, custom nodes in
`haibot/service/*/register.go`.

### 1.4 Optional Go validator — `behavior-tree/cmd/btvalidate/main.go` (NEW)

Loads a `.b3` tree config + `nodes.schema.json`, checks every node's `properties`
against schema (`required` present, enum value in options, type plausibility),
reports errors, non-zero exit on failure `[D4]`. Pure Go, fully `go test`-able.

### 1.5 `SetTitle` fix `[E]`

`BaseNode.SetTitle` currently sets `this.name`. Fix to set `this.title`. Add a
regression test asserting `GetName()`/`GetTitle()` independence.

---

## 2. Execution Trace System (Phase B)

Goal: per-tick per-node enter/exit/status/duration/error + blackboard read/writes
(esp. cross-tree global `SetMem`/`GetMem`), keyed by tree id + node id + seq,
exportable + queryable. Zero cost when off `[D5]`.

### 2.0 Prerequisite refactor `[A3][E]`

- Standardize **all** `Tick` hooks (`_openNode`, `_tickNode`, `_closeNode`, `_exitNode`) on `IBaseNode` to match `_enterNode`/`reportNodeStatus`. This lets the trace read `GetID()/GetName()/GetCategory()/GetTitle()` polymorphically.
- Fix `SetTitle` (Section 1.5) since trace records `NodeTitle`.

### 2.1 Structs — `behavior-tree/core/ExecutionTrace.go` (NEW)

```go
package core

import "sync"

type TraceRecord struct {
    TickID    uint64 `json:"tick_id"`
    TreeID    string `json:"tree_id"`     // owning tree (subtree-aware, see 2.4)
    NodeID    string `json:"node_id"`
    Seq       uint32 `json:"seq"`         // 0-based per-tick
    NodeName  string `json:"node_name"`
    NodeTitle string `json:"node_title"`
    Category  string `json:"category"`
    EnterTime int64  `json:"enter_time_ns"`
    ExitTime  int64  `json:"exit_time_ns"`
    Duration  int64  `json:"duration_ns"`
    Status    string `json:"status"`
    Error     string `json:"error,omitempty"`
}

type BlackboardAccess struct {
    TickID    uint64      `json:"tick_id"`
    TreeID    string      `json:"tree_id"`
    NodeID    string      `json:"node_id"`
    Seq       uint32      `json:"seq"`
    Timestamp int64       `json:"timestamp_ns"`
    Op        string      `json:"op"`         // "set" | "get"
    Key       string      `json:"key"`
    TreeScope string      `json:"tree_scope"` // "" = global
    NodeScope string      `json:"node_scope"` // "" = per-tree
    Value     interface{} `json:"value,omitempty"`
    OldValue  interface{} `json:"old_value,omitempty"`
    Found     bool        `json:"found"`
}

// TraceWriter is the nilable hook the Blackboard calls. nil = zero cost [B3].
type TraceWriter interface {
    OnSet(*BlackboardAccess)
    OnGet(*BlackboardAccess)
}

type ExecutionTracer struct {
    mu          sync.Mutex
    buffer      []*TraceRecord
    head, size  int
    maxRecords  int      // ring buffer, default 1000
    bbAccessBuf []*BlackboardAccess
    captureBBOld bool    // capture OldValue (extra map read on Set) [B3]
    tickCounter uint64
}
```

`ExecutionTracer` implements both `Debugger`-independent trace AND `TraceWriter`.
Ring buffer auto-rolls preserving per-tick boundaries. Queries
(`QueryRecords(filter)`), `ExportJSON()`, `ExportJSONL(io.Writer)` are in-memory.

### 2.2 Hook points

- **`BehaviorTree.go` (MODIFY):** add `trace *ExecutionTracer` field + `SetTrace(*ExecutionTracer)`; copy to `tick.trace` in tick setup, parallel to `debug` `[A4]`. WS debugger continues to use `debug`. Both run together.
- **`Tick.go` (MODIFY):** add `trace *ExecutionTracer`; on tick start increment `tickCounter`, reset per-tick `seq`. Assign each visited node a `seq`.
- **`BaseNode.go _execute` (MODIFY):** wrap with enter/exit recording. Use a `defer` that records `ExitTime`/`Duration`/`Status` and, on panic, records `Error` then **re-panics** `[B4]` — never swallow (`GetProperty` panics must still propagate). Zero cost when `tick.trace == nil`.

### 2.3 Blackboard hook — minimal surface `[B3]`

Do NOT wrap all ~15 typed accessors. Hook the **single chokepoint**:
- `Blackboard` gets a nilable `trace TraceWriter` field + current `tickCtx` (tickID/nodeID/seq/treeID) set by the tick.
- Instrument `Memory.Set`/`Memory.Get` is wrong (Memory has no scope context); instead instrument `Blackboard.Set`/`Blackboard.Get` (every typed getter funnels through `Blackboard.Get`; every setter through `Blackboard.Set`/`SetMem`/`SetTree` which call `_getMemory`+`memory.Set`).
- Concretely: in `Blackboard.Set` (and `SetMem`/`SetTree`) — `if this.trace != nil { old := memory.Get(key) /* only if captureBBOld */; this.trace.OnSet(&BlackboardAccess{...}) }`. In `Blackboard.Get` — `if this.trace != nil { this.trace.OnGet(...) }`. All typed getters already call `Get`, so they are covered for free.
- `OldValue` capture is opt-in (`captureBBOld`) because it adds a read-before-write `[B3]`.
- No new mutex added to the blackboard hot path; the tracer's own `mu` guards only its buffer. (Concurrent ticks on one blackboard remain the caller's responsibility — unchanged from today; documented.)

### 2.4 SubTree tree-id correctness `[B5]`

When recording, the owning tree is `tick.GetLastSubTree()` (if non-nil, use that
subtree's tree id) else `tick.tree.id`. This makes cross-tree `friend_targets`
writes attributed to the correct subtree, which is the whole point of the trace.

### 2.5 Snapshot reuse `[D5]`

Optional periodic snapshot uses `Blackboard.Dump(treeScope)` (global+tree merge),
the same view the WS debugger's variable panel shows — no parallel/contradicting
snapshot logic.

### 2.6 Debugger coexistence `[A4]`

`ExecutionTracer` is independent of `Debugger`. Optional: a `TraceExporter`
interface a debugger MAY consume, but no hard coupling. WS debugger keeps the
`debug` slot; tracer uses the `trace` slot.

---

## 3. Schema-Driven Panel + Validation (Phase C)

### 3.0 Registry reconciliation (prerequisite) `[C2][C3]`

- The editor palette built-ins (`Project.js _initialize`) currently omit `RandWait`, `RandomSleep`, `Log` that exist in the Go registry. Add them to the editor palette so palette ⊇ schema-buildable nodes.
- Generated `nodes.schema.json` is the reference. Validator flags only nodes **absent from schema**. The b3-lib node definitions remain the block-construction source; reconcile their `properties` defaults to match schema param names so panel fields and block objects agree.

### 3.1 SchemaService — `src/app/services/schema.service.js` (NEW)

Singleton AngularJS factory. `loadSchema(path)` returns a `$q` promise, **caches
once** in memory `[C1]`. API: `getNodeSchema(name)`, `validateNodeParams(name, props)`,
`getEnumOptions(name, paramName)`. Offline-first, local file only (no network).

### 3.2 b3-typed-properties directive `[C1]`

- `src/app/directives/typedproperties.directive.js` (NEW) + `typedproperties.html` (NEW).
- Renders per `param.type`: `enum→<select>` (options from `enum.options`, label shown, numeric value stored), `int|float→<input type=number>`, `bool→<input type=checkbox>`, `string→<input type=text>`, `uint64list→list editor`.
- uint64list editor: serialize as a **JSON array of numbers** when all ≤ 2^53, otherwise as strings, to avoid float64 precision loss for role IDs `[E]`. Verify `btprops.UInt64Slice` parses both string and array.
- `ng-change` triggers inline validation; invalid param gets `ng-class` red + error row. Default shown as **placeholder** (`Default: 1000`), not pre-filled `[B1]`.

### 3.3 Panel controller rewrite `[C1]`

- `propertiespanel.controller.js` (MODIFY → effectively rewrite): inject `schemaService`; add `vm.schema`, `vm.validationErrors`, `vm.getErrorMessage(paramName)`. The existing `_activate` fires on every `blockselected` via the `setTimeout`+`$apply` bridge — call `schemaService.getNodeSchema(vm.block.name)` from the cached singleton (no per-event reload).
- `propertiespanel.html` (MODIFY): replace `<b3-key-table>` block with `<b3-typed-properties>`. Keep title/description fields. Fallback to `<b3-key-table>` when `getNodeSchema` returns null (custom/unknown node).
- `b3-key-table` retained for the custom_nodes editor.

### 3.4 Validation (bi-level) + required enforcement `[D4]`

- `src/app/validators/parametertypes.validator.js` (NEW): `validateEnum/Number/Bool/String/UInt64List/Required`.
- Phase C inline: `schemaService.validateNodeParams` on change.
- Pre-export: `src/app/services/treevalidator.service.js` (NEW) walks the tree and **blocks export/save when a `required` param is missing or an enum value is illegal** — this is the contract that prevents the runtime panic `[B1]`. Permissive on *extra* unknown properties (old `.b3` backward compat).

---

## 4. Data-Pin Connections (Phase D) — NEEDS-GUI-VERIFY

This is the riskiest change and the GUI wiring/rendering **cannot be verified in
this run**. Everything below is marked accordingly; only JSON round-trip + import/
export logic is testable headlessly.

### 4.1 Additive JSON model

Existing node JSON unchanged. New **additive** top-level field per node:

```json
{ "...": "existing id/name/category/properties/children/child/display",
  "dataConnections": [
    { "targetPin": "roleids", "sourceNodeId": "<uuid>", "sourcePin": "friend_targets" }
  ]
}
```

Rules:
- No type stored — derived from schema (`inputs`/`outputs`, Section 1.1) `[A5]`.
- Same-tree only (initial). Source must topologically precede target (acyclic; forward-wiring).
- Multiplexing: one output → many inputs allowed; **one input accepts at most one connection** (last-wire-wins replaces) — resolves the open multiplexing question.
- Fallback: unwired pin or missing source → node uses explicit `properties` value (today's behavior). Wired overrides explicit when present.

### 4.2 Editor changes

- `src/editor/utils/Block.js` (MODIFY): add `_dataConnections` array + `_addDataConnection()`. In `_redraw()` re-apply data-pin **display objects** the same way `_debugShape`/`_debugMarkers` are re-applied after `removeAllChildren()` `[C4]`.
- `src/editor/utils/Connection.js` (MODIFY): `DataConnection` (dashed/dotted, distinct color: data=green, tree=blue) via a class (not a flag) to avoid branching all render/event code.
- `ExportManager.js` (MODIFY): in `treeToData`, emit `d.dataConnections` when non-empty `[C5]`. (Note: editor uses `properties`, runtime config also reads `properties`.)
- `ImportManager.js` (MODIFY): parse + validate `spec.dataConnections` against schema; reconstruct `DataConnection`s after blocks exist. Unknown/missing source → skip with logged warning (graceful) `[C5]`.
- `BlockManager.js` (MODIFY): initialize `_dataConnections: []` on block creation.

### 4.3 Go runtime: NO CHANGES `[A5]`

`dataConnections` is ignored by `btprops`/loader (`BTNodeCfg` has no such field;
`json.Unmarshal` drops unknown keys). Backward compatible with any deployment.

### 4.4 NEEDS-GUI-VERIFY checklist (human)

1. Drag from a node's output pin to another node's input pin creates a DataConnection (dashed/green).
2. Reloading the saved `.b3` restores the wire at the same pins (round-trip).
3. Deleting the source node leaves target falling back to its `properties` value, with a warning.
4. Data wires render distinctly from tree (parent-child) connections; no occlusion confusion.
5. `_redraw` (triggered by category change on import) does not drop data wires.
6. Cyclic wiring attempt is rejected.

---

## 5. Implementation order, testability, file list

### Phase A — Schema (Go) — fully `go test`-able
Gate: `go test ./...` green; generated `nodes.schema.json` matches a golden fixture.
Files:
- `behavior-tree/schema/schema.go` (NEW)
- `behavior-tree/schema/schema_test.go` (NEW)
- `behavior-tree/b3.functions.go` (MODIFY — `Each`/`Names`)
- `behavior-tree/loader/BevTreeFactory.go` (MODIFY — `BaseStructMaps()`)
- `behavior-tree/actions/*.go`, `decorators/*.go`, `composites/*.go` (MODIFY — opt-in `Schema()` on base nodes)
- `behavior-tree/core/BaseNode.go` (MODIFY — fix `SetTitle` `[E]`)
- `behavior-tree/core/BaseNode_test.go` (NEW/MODIFY — SetTitle regression)
- `haibot/cmd/btschema/main.go` (NEW — generator, sources protobuf enums) `[D3]`
- `haibot/service/*/register.go` (MODIFY — custom nodes implement `Schema()`, declare `outputs`)
- `behavior-tree/cmd/btvalidate/main.go` (NEW — schema validator) `[D4]`
- `behavior-tree/cmd/btvalidate/main_test.go` (NEW)
- Output: `behavior-tree/nodes.schema.json`, `behavior-tree-editor/src/assets/data/nodes.schema.json` (generated)

### Phase B — Trace (Go) — fully `go test`-able
Gate: `go test ./...` green; trace test asserts records for a multi-node + SubTree tick, BB set/get capture, ring-buffer roll, panic re-propagation, zero-cost-when-nil.
Files:
- `behavior-tree/core/Tick.go` (MODIFY — hooks → `IBaseNode` `[A3]`; `trace` field; per-tick seq)
- `behavior-tree/core/BaseNode.go` (MODIFY — `_execute` trace wrap + defer re-panic `[B4]`)
- `behavior-tree/core/Blackboard.go` (MODIFY — nilable `trace TraceWriter` at `Set`/`SetMem`/`SetTree`/`Get` chokepoint `[B3]`)
- `behavior-tree/core/BehaviorTree.go` (MODIFY — `trace` field + `SetTrace()` `[A4]`)
- `behavior-tree/core/ExecutionTrace.go` (NEW)
- `behavior-tree/core/ExecutionTrace_test.go` (NEW)
- `behavior-tree/core/Debugger.go` (MODIFY — optional `TraceExporter` interface, no coupling)
- `behavior-tree/examples/trace_example/main.go` (NEW)

### Phase C — Schema-driven panel + validation (Editor) — partial: logic `gulp build`/jshint + unit-testable; rendering NEEDS-GUI-VERIFY
Gate: `node ./node_modules/gulp/bin/gulp.js build` clean, no new jshint warnings. SchemaService + validators unit-tested headlessly. Panel rendering = NEEDS-GUI-VERIFY.
Files:
- `src/editor/project/Project.js` (MODIFY — add RandWait/RandomSleep/Log to palette `[C3]`)
- `src/app/services/schema.service.js` (NEW)
- `src/app/validators/parametertypes.validator.js` (NEW)
- `src/app/directives/typedproperties.directive.js` (NEW)
- `src/app/directives/typedproperties.html` (NEW)
- `src/app/pages/editor/components/propertiespanel.controller.js` (MODIFY/rewrite)
- `src/app/pages/editor/components/propertiespanel.html` (MODIFY)
- `src/app/services/treevalidator.service.js` (NEW — pre-export, blocks save on missing required `[D4]`)
- `src/assets/data/nodes.schema.json` (BUNDLED, generated in Phase A)
- Tests: `test/SchemaService.test.js`, `test/ParameterTypesValidator.test.js`, `test/TreeValidator.test.js` (NEW)
NEEDS-GUI-VERIFY checklist (human): select each node type → typed controls render; enum dropdown shows labels, stores values; missing required → red + error; export blocked when required missing; fallback to keytable for unknown node.

### Phase D — Data pins (Editor) — partial: round-trip unit-testable; wiring/rendering NEEDS-GUI-VERIFY
Prereq: Phase A schema (`inputs`/`outputs`) complete. Gate: `gulp build` clean; round-trip test green.
Files:
- `src/editor/utils/Block.js` (MODIFY — `_dataConnections`, re-apply in `_redraw` `[C4]`)
- `src/editor/utils/Connection.js` (MODIFY — `DataConnection` class)
- `src/editor/editor/managers/ExportManager.js` (MODIFY — emit `dataConnections` `[C5]`)
- `src/editor/editor/managers/ImportManager.js` (MODIFY — parse/validate/reconstruct `[C5]`)
- `src/editor/tree/managers/BlockManager.js` (MODIFY — init `_dataConnections`)
- `behavior-tree/core/BaseNode.go` — NO CHANGES `[A5]`
- `test/DataConnections.test.js` (NEW — export→JSON→import round-trip, missing source fallback, duplicate-input last-wins, schema pin lookup)
NEEDS-GUI-VERIFY checklist: Section 4.4.

### Testability summary

| Phase | go test | gulp build + jshint | Headless unit | NEEDS-GUI-VERIFY |
|-------|---------|---------------------|---------------|------------------|
| A Schema | ✅ all | n/a | ✅ generator/validator/golden json | none |
| B Trace | ✅ all | n/a | ✅ records/BB/subtree/panic/zero-cost | none |
| C Panel | n/a | ✅ | ✅ SchemaService/validators | ✅ rendering, dropdowns, red errors, export-block |
| D Pins | n/a (no Go change) | ✅ | ✅ round-trip/fallback/multiplex | ✅ drag-to-wire, rendering, redraw survival, cycle reject |

### Build order
A → B (independent of A; can parallel) → C (needs A's `nodes.schema.json`) → D (needs A's `inputs`/`outputs`).
Recommended serial gate sequence: **A, then B, then C, then D** — each gate green before the next.
