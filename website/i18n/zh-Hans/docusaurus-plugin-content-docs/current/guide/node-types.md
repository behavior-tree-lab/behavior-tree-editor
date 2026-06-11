---
sidebar_position: 2
---

# 节点类型

编辑器内置了标准的 Behavior3 节点集合。每个新建项目都会在节点面板中自带这些节点。

## 组合节点（Composites）

组合节点控制其子节点之间的执行流程。

| 节点 | 行为 |
| --- | --- |
| **Sequence** | 按顺序 tick 子节点。遇到第一个失败的子节点就返回 Failure；全部成功则返回 Success。每次 tick 都从第一个子节点重新开始。 |
| **Priority** | 按顺序 tick 子节点。遇到第一个成功的子节点就返回 Success；全部失败则返回 Failure。（也称 Selector / Fallback。） |
| **MemSequence** | 类似 Sequence，但会*记住*上次运行中的子节点，下次 tick 时从该节点继续，而不是重新开始。 |
| **MemPriority** | 类似 Priority，但会记住上次运行中的子节点并从该处继续。 |

## 装饰节点（Decorators）

装饰节点包装单个子节点并修改其结果。

| 节点 | 行为 |
| --- | --- |
| **Inverter** | 反转子节点的结果 —— Success 变 Failure，反之亦然。 |
| **Repeater** | 将子节点重复执行配置的次数。 |
| **RepeatUntilFailure** | 重复执行子节点，直到它返回 Failure。 |
| **RepeatUntilSuccess** | 重复执行子节点，直到它返回 Success。 |
| **MaxTime** | 如果子节点运行时间超过配置的最大值，则返回 Failure。 |
| **Limiter** | 限制子节点只能运行有限的次数。 |

## 动作节点（Actions）

执行工作或返回固定结果的叶子节点。

| 节点 | 行为 |
| --- | --- |
| **Runner** | 始终返回 Running。 |
| **Failer** | 始终返回 Failure。 |
| **Succeeder** | 始终返回 Success。 |
| **Error** | 始终返回 Error。 |
| **Wait** | 在配置的时间流逝前返回 Running，之后返回 Success。 |

## 创建你自己的节点

内置的动作和条件节点是刻意做得通用的。真实的智能体需要你定义领域相关的节点 —— 详见[自定义节点](./custom-nodes)。
