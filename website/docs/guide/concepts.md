---
sidebar_position: 1
---

# Concepts

A **Behavior Tree** is a model for describing the decision-making of an agent. It is a tree of nodes that are evaluated (ticked) from the root downward. Each node returns a **status** when ticked:

- **Success** — the node completed its goal
- **Failure** — the node could not complete its goal
- **Running** — the node needs more ticks to finish

Parent nodes use the status of their children to decide what to do next. This makes behavior trees easy to reason about, modular, and reusable.

## Node Categories

Every node in the editor belongs to one of four categories:

| Category | Role |
| --- | --- |
| **Composite** | Controls the flow between multiple children (e.g. Sequence, Priority). Has many children. |
| **Decorator** | Modifies or wraps the result of a single child (e.g. Inverter, Repeater). Has exactly one child. |
| **Action** | A leaf that *does* something in the world (e.g. MoveTo, Attack). Has no children. |
| **Condition** | A leaf that *checks* something and returns Success/Failure (e.g. IsHungry). Has no children. |

## A Simple Example

```
Priority
├── Sequence
│   ├── IsEnemyVisible   (condition)
│   └── Attack           (action)
└── Patrol               (action)
```

The agent attacks if an enemy is visible; otherwise it patrols.

## The Tick

When the tree is ticked, evaluation starts at the **root** and propagates down according to each composite's rules. The editor lets you design this structure visually — see [Node Types](./node-types) for the built-in nodes.
