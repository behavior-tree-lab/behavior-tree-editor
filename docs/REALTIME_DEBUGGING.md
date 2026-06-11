# Real-Time Debugging — Design Document

Status: **Design approved, implementation pending**
Branch: `feat/realtime-debugging`
Last updated: 2026-06-11

This document describes the design for a real-time debugging loop between
**Behavior Tree Editor** (this repo) and the **Go runtime**
([henrytien/behavior-tree](https://github.com/henrytien/behavior-tree)).

The goal: run a Go program that executes a behavior tree, and watch the editor
highlight each node's live status (running / success / failure) as it ticks —
the same experience as Unreal Engine's behavior tree debugger.

---

## 1. Architecture

```
┌─────────────────────┐         WebSocket          ┌──────────────────────┐
│  Behavior Tree       │ ◄───── ws://host:port ───► │  Go runtime          │
│  Editor (Electron)   │                            │  (your game/program) │
│                      │   ① node status (Go→editor)│                      │
│  - debug client      │   ────────────────────────►│  - Debugger impl     │
│  - node highlighting  │                            │  - WebSocket SERVER  │
│  - blackboard viewer  │   ② control (editor→Go)    │  - hooks into Tick   │
└─────────────────────┘   ◄────────────────────────└──────────────────────┘
        CLIENT                                              SERVER
```

The editor is an Electron app (has Node, runs a WS client). The Go runtime is a
separate, long-lived process, so it hosts the WebSocket **server**; the editor
connects to it as a **client**.

---

## 2. Decisions (locked)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Who is the server** | Go runtime is the server; editor is the client | The game/program process is long-lived and naturally acts as a server. The editor connects to it. |
| **Go WebSocket library** | `gorilla/websocket` | De-facto standard, well documented, stable. |
| **Throttling high-frequency ticks** | Send only on node **status change**, aggregated at ~10 Hz | A 60 fps game would flood the channel and the editor's renderer. Coalescing keeps bandwidth low and the UI smooth. Tunable during implementation. |
| **Development isolation** | Work on branch `feat/realtime-debugging`, never on `master` | Keep `master` shippable while this feature is built. |

### Default connection
- **Address**: `ws://localhost:6112/debug` (port chosen to avoid common ports; configurable on both ends)

---

## 3. Protocol (JSON over WebSocket)

All messages are JSON objects with a `type` field.

### 3.1 Go → Editor

**`hello`** — sent once when the editor connects, so it can verify it is viewing
the same tree.
```json
{ "type": "hello", "treeId": "67e3047e-...", "treeTitle": "A behavior tree", "nodeCount": 17 }
```

**`tick`** — node statuses for a tick batch. Keyed by node `id` (the UUID the
editor exported). Sent only when at least one status changed, at most ~10 Hz.
```json
{
  "type": "tick",
  "treeId": "67e3047e-...",
  "seq": 1284,
  "nodes": {
    "8b514f0a-...": "running",
    "7deef17b-...": "success",
    "af4ac079-...": "failure"
  }
}
```
- `seq` is monotonically increasing; the editor drops frames older than the last applied `seq`.
- Status enum: `running` | `success` | `failure` | `error` (maps to Go `b3.Status`).

**`blackboard`** (optional, phase 5) — runtime variable snapshot.
```json
{ "type": "blackboard", "treeId": "...", "data": { "nodeCount": 17, "...": "..." } }
```

### 3.2 Editor → Go (optional, future)

Reserved for control commands (pause/step/breakpoints). Not in the MVP.
```json
{ "type": "command", "action": "pause" }
```

### 3.3 Status mapping

| Go `b3.Status` | Protocol string | Editor highlight |
|----------------|-----------------|------------------|
| `RUNNING`      | `"running"`     | yellow/blue pulsing border |
| `SUCCESS`      | `"success"`     | green border |
| `FAILURE`      | `"failure"`     | red border |
| `ERROR`        | `"error"`       | purple border |

---

## 4. Go Runtime Changes (minimal — ~80 LOC) — ✅ DONE (Phase 1)

> Implemented on `behavior-tree@feat/realtime-debugging`. Tests in
> `loader/debug_test.go` (`go test ./...` green).

The runtime had the hooks half-built. `core/Tick.go` has a `debug interface{}`
field and `BehaviorTree.SetDebug()` was already in place.

### 4.1 Define the Debugger interface — done
In `core/Debugger.go`:
```go
type Debugger interface {
    OnTickStart(treeID string)
    OnNodeStatus(treeID, nodeID string, status bt.Status)
    OnTickEnd(treeID string)
}
```

### 4.2 Wire the hooks — done

**Correction to the original design:** the status is *not* available at the
`_tickNode` TODO placeholder. `_tickNode(this)` runs *before* `OnTick` returns,
so the node has no status yet at that point. The status is only known in
`BaseNode._execute`, after `status := this._tick(tick)`. That is where
`OnNodeStatus` is emitted (via `tick.reportNodeStatus`). `GetID()` was promoted
onto the `IBaseNode` interface so the tick can read the node id.

- `OnTickStart` / `OnTickEnd`: emitted in `BehaviorTree.Tick`, with `OnTickEnd`
  deferred so it fires on every return path (including the early-return when the
  open-node set is unchanged).
- `OnNodeStatus`: emitted in `BaseNode._execute` for every visited node.

```go
// core/Tick.go
func (this *Tick) reportNodeStatus(node IBaseNode, status bt.Status) {
    if d, ok := this.debug.(Debugger); ok && d != nil {
        d.OnNodeStatus(this.tree.id, node.GetID(), status)
    }
}
```
> Zero overhead when debugging is off: `debug == nil`, so the type assertion /
> nil check is skipped. Existing `examples/` and `loader` tests are unaffected.

### 4.3 WebSocket server package — ✅ DONE (Phase 2)

> Implemented in `debug/wsserver.go` with tests in `debug/wsserver_test.go`
> (httptest-driven, real WS round-trips). Demo: `examples/debug_server`.

Package `debug`:
- Implements `core.Debugger`.
- Runs a `gorilla/websocket` server; clients connect to `/debug`.
- Coalesces status changes and flushes at ~10 Hz to all connected clients
  (only nodes whose status changed are sent; `seq` increments per frame).
- A late-joining client gets a `hello` plus a snapshot of current statuses, so
  it sees live state immediately rather than only future changes.
- Slow clients drop frames (bounded send buffer) instead of stalling the tick.
- One-line integration in user code:
```go
dbg := debug.NewWSServer(":6112")
defer dbg.Close()
tree.SetDebug(dbg)
```

> Verified end-to-end: a client connecting to the demo receives `hello` then a
> `tick` frame keyed by the editor's exported node UUIDs.

---

## 5. Editor Changes (front-end only, medium) — ✅ DONE (Phases 3 & 4)

### 5.1 Debug client service — done
`src/app/services/debug.service.js` (AngularJS factory `debugService`):
- WebSocket client connecting to the Go server (default `ws://localhost:6112/debug`).
- Maintains a `nodeStatus` map (`id → status`).
- Applies frames respecting `seq` ordering (drops stale/duplicate `seq`).
- Exposes `onStatusChange` / `offStatusChange` so the highlighter subscribes
  without the service knowing about rendering.
- Surfaces connect / error / disconnect via `notificationService`.

### 5.2 Node status rendering — done
`src/editor/utils/Block.js`:
- Added `_debugStatus` / `_debugShape` fields and `p._setDebugStatus(status)`,
  which draws a colored rounded-rect outline overlay (one color per status,
  `Block.DEBUG_COLORS`) or clears it.
- `_redraw()` re-applies the overlay (it calls `removeAllChildren`, so the
  overlay is restored if a status is active).
- The menubar subscribes to `debugService` and paints each block via
  `tree.blocks.each(...)`, looking up by the editor's exported node id.

### 5.3 Debug menu — done
`menubar.html` + `menubar.controller.js`: a **Debug** menu with
**Connect to runtime** (prompts for the ws address) and **Disconnect**
(shown/hidden by `debugService.isConnected()`). Connect wires the status
listener; Disconnect clears all highlights and unsubscribes.

### 5.4 Blackboard panel (optional, phase 5) — not started
Right-side tab showing runtime variables from `blackboard` messages.

---

## 6. JSON Compatibility Prerequisite

The Go runtime distinguishes custom nodes / subtrees using the `category` field
(`core/BehaviorTree.go`, `Load`). When the editor exports a **single tree**, it
may omit `category`. Before debugging works for custom-node trees, ensure the
editor's single-tree export always includes `category`.

This is tracked as **Phase 0** below. ✅ Done: `ExportManager.treeToData` now
writes `category` on every exported node. Re-import is unaffected (ImportManager
derives category from the node definition, not from `spec.category`).

---

## 7. Phased Implementation Plan

Each phase is independently verifiable.

| Phase | Repo | Work | Verify | Risk |
|-------|------|------|--------|------|
| **0. JSON compatibility** ✅ | editor | Single-tree export always writes `category` | Go loads a custom-node tree without error | Low |
| **1. Go Debugger interface** ✅ | runtime | Define interface + wire hooks | Unit test: hooks fire on tick with correct id/status | Low |
| **2. Go WS server** ✅ | runtime | `debug/` package, coalesce + broadcast | Demo in `examples/`; a browser/wscat receives frames | Medium |
| **3. Editor WS client** ✅ | editor | `debug.service.js` + Debug menu | Connect to Go demo; log frames in console | Low |
| **4. Node highlighting** ✅ | editor | Block status stroke rendering | Run Go demo; nodes change color live | Medium (CreateJS render) |
| **5. Blackboard panel** (optional) | editor | Right-side variable viewer | — | Low |

**MVP = phases 0–4 — COMPLETE.** The full loop works: run a Go program with a
`debug.WSServer` attached → connect the editor's Debug menu → nodes change color
live as they tick.

> Remaining manual check: open the built editor, load the demo tree
> (`examples/load_from_tree/tree.json` exported with matching node UUIDs), run
> `go run ./examples/debug_server`, and confirm nodes light up. Automated JS
> testing is not set up in this repo; the gulp build + jshint is the gate.

---

## 8. Open Items / Future Work

- **Control channel** (editor → Go): pause / step / breakpoints. Protocol slot
  reserved in §3.2.
- **Multiple trees / targets**: the runtime can drive many targets with one tree
  (Blackboard-per-target). A future protocol revision may add a `targetId` to
  disambiguate which target's execution is being visualized.
- **Throttle tuning**: 10 Hz is a starting point; expose as a server option if
  needed.
- **Security**: localhost-only by default. If exposed over a network, consider a
  token handshake.

---

## 9. Cross-Repo Coordination

- This document lives in the editor repo (the primary entry point).
- The Go runtime repo should add a short pointer (e.g. in its README or a
  `docs/DEBUGGING.md`) linking here, plus its own implementation notes for the
  `debug/` package once built.
- Protocol changes must be reflected in **both** repos; treat §3 as the single
  source of truth.
