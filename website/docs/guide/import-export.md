---
sidebar_position: 4
---

# Import / Export

Behavior3 Editor uses an open JSON format. You can export a whole project, a single tree, or your custom node definitions, and import them back later or load them in your own runtime.

## What You Can Export

- **Project** — all trees and custom node definitions in one file.
- **Tree** — a single behavior tree.
- **Nodes** — your custom node type definitions.

## Tree JSON Structure

A behavior tree exports roughly like this:

```json
{
  "id": "...",
  "title": "My Tree",
  "root": "node-1",
  "nodes": {
    "node-1": {
      "id": "node-1",
      "name": "Priority",
      "title": "Priority",
      "children": ["node-2", "node-3"]
    },
    "node-2": {
      "id": "node-2",
      "name": "IsEnemyVisible",
      "title": "Enemy visible?",
      "properties": {}
    },
    "node-3": {
      "id": "node-3",
      "name": "Patrol",
      "title": "Patrol",
      "properties": { "speed": 1.5 }
    }
  }
}
```

Key fields:

- **`root`** — id of the entry node.
- **`nodes`** — map of node id → node definition.
- **`name`** — the node *type*, used by your runtime to look up the implementing class.
- **`children`** — ordered list of child ids (composites) or a single child (decorators).
- **`properties`** — per-instance values for the node's custom properties.

## Using the JSON

Load the exported JSON in your behavior tree runtime, matching each node's `name` to a registered class. The format is simple and stable, so you can write a reader in any language.

The companion runtime for this editor is [henrytien/behavior-tree](https://github.com/henrytien/behavior-tree), a behavior tree implementation in Go.

## Importing

Use the import option to bring a project, tree, or node set back into the editor. Trees referencing custom node names will display correctly as long as those node definitions are present in the project (import the nodes or the full project first).
