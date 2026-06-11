---
sidebar_position: 4
---

# 导入 / 导出

Behavior3 Editor 使用开放的 JSON 格式。你可以导出整个项目、单棵树，或你的自定义节点定义，之后再导入回来，或在你自己的运行时中加载它们。

## 你可以导出什么

- **项目（Project）** —— 一个文件包含所有树和自定义节点定义。
- **树（Tree）** —— 单棵行为树。
- **节点（Nodes）** —— 你的自定义节点类型定义。

## 树的 JSON 结构

一棵行为树大致导出成这样：

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

关键字段：

- **`root`** —— 入口节点的 id。
- **`nodes`** —— 节点 id → 节点定义的映射。
- **`name`** —— 节点的*类型*，运行时据此查找实现该节点的类。
- **`children`** —— 有序的子节点 id 列表（组合节点），或单个子节点（装饰节点）。
- **`properties`** —— 该节点自定义属性的逐实例取值。

## 使用这些 JSON

在你的行为树运行时中加载导出的 JSON，把每个节点的 `name` 对应到一个已注册的类即可。该格式简单且稳定，所以你可以用任意语言编写读取器。

本编辑器配套的运行时是 [henrytien/behavior-tree](https://github.com/henrytien/behavior-tree)，一个 Go 语言实现的行为树。

## 导入

使用导入功能把项目、树或节点集合带回编辑器。引用了自定义节点名称的树，只要项目中存在这些节点定义就能正确显示（先导入节点或整个项目即可）。
