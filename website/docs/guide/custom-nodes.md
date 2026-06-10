---
sidebar_position: 3
---

# Custom Nodes

The built-in nodes cover the generic control flow, but your agents need domain-specific **actions** and **conditions** — `MoveTo`, `IsHungry`, `Attack`, and so on. The editor lets you define these as custom node types.

## Creating a Node Type

1. In the node panel, choose the category for your node — **composite**, **decorator**, **action** or **condition**.
2. Add a new node type and give it a **name** (this is the identifier exported to JSON and matched by your runtime library).
3. Set a **title** (the label shown on the canvas) and an optional **description**.
4. Define any **properties** the node needs — these become editable fields on each instance.

## Properties

Properties are key/value pairs attached to a node type. Common uses:

- A `MoveTo` action might expose a `target` property.
- A `Wait` decorator might expose a `duration`.

Each instance of the node on the canvas can override these values individually, so one node type can be reused with different parameters.

## Matching Nodes to Code

The node **name** is the contract between the editor and your runtime. When you export to JSON, each node carries its `name`; your behavior tree runtime looks up a class registered under that same name and instantiates it with the node's properties.

Keep names stable — renaming a node type in the editor means updating the corresponding class registration in your code.

## Next

See [Import / Export](./import-export) for the JSON structure that carries these definitions.
