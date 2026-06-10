---
sidebar_position: 2
---

# Node Types

The editor ships with the standard set of Behavior3 nodes. Every new project starts with these available in the node panel.

## Composites

Composites control the flow between their children.

| Node | Behavior |
| --- | --- |
| **Sequence** | Ticks children in order. Returns Failure on the first child that fails, Success if all succeed. Restarts from the first child on each tick. |
| **Priority** | Ticks children in order. Returns Success on the first child that succeeds, Failure if all fail. (Also called Selector / Fallback.) |
| **MemSequence** | Like Sequence, but *remembers* the last running child and resumes from it on the next tick instead of restarting. |
| **MemPriority** | Like Priority, but remembers the last running child and resumes from it. |

## Decorators

Decorators wrap a single child and modify its result.

| Node | Behavior |
| --- | --- |
| **Inverter** | Inverts the child's result — Success becomes Failure and vice versa. |
| **Repeater** | Repeats the child a configured number of times. |
| **RepeatUntilFailure** | Repeats the child until it returns Failure. |
| **RepeatUntilSuccess** | Repeats the child until it returns Success. |
| **MaxTime** | Returns Failure if the child runs longer than the configured maximum time. |
| **Limiter** | Allows the child to run only a limited number of times. |

## Actions

Leaf nodes that perform work or return a fixed result.

| Node | Behavior |
| --- | --- |
| **Runner** | Always returns Running. |
| **Failer** | Always returns Failure. |
| **Succeeder** | Always returns Success. |
| **Error** | Always returns Error. |
| **Wait** | Returns Running until a configured amount of time has elapsed, then Success. |

## Creating Your Own

The built-in actions and conditions are intentionally generic. For real agents you'll define domain-specific nodes — see [Custom Nodes](./custom-nodes).
