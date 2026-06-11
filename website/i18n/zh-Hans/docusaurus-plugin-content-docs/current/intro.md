---
sidebar_position: 1
slug: /
---

# Behavior Tree Editor

欢迎阅读 **Behavior Tree Editor** 的文档。它是一款开源的可视化工具，用于创建和设计行为树（Behavior Tree）。

![界面预览](/img/preview.png)

## 这是什么

Behavior Tree Editor 提供了一套通用方案，用于为游戏及其他应用（如仿真、机器人等）建模智能体。它基于 Behavior3 模型构建，而该模型源自行为树的形式化描述。

- **自定义节点** —— 在四个基本类别中创建你自己的节点类型：*组合（composite）*、*装饰（decorator）*、*动作（action）* 或 *条件（condition）*。
- **独立的节点属性** —— 修改节点的标题、描述和自定义属性。
- **手动与自动排版** —— 拖动节点排列，或按 `a` 键自动整理整棵树。
- **多棵树管理** —— 创建并管理任意数量的行为树。
- **导入 / 导出 JSON** —— 将项目、树或节点导出为 JSON，也能再导入回来。在你自己的库或工具中使用这些 JSON。

## 关于这个 Fork

这是原始 behavior3editor 的一个持续维护的 Fork，原项目由 **Renato de Pontes Pereira** 创建。原项目已不再积极维护。本 Fork：

- 合并了多年来悬而未决的社区 Pull Request
- 现代化了构建工具链（Electron、当前的 Node）
- 通过 [GitHub Releases](https://github.com/henrytien/behavior-tree-editor/releases) 发布桌面端二进制文件

完整历史请见[更新日志](/docs/changelog)。

## 配套运行时

要运行你在这里设计的行为树，请使用配套运行时 [henrytien/behavior-tree](https://github.com/henrytien/behavior-tree) —— 一个 Go 语言实现的行为树。将你的树导出为 JSON，然后在那里加载即可。
