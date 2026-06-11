---
title: Behavior Tree Editor
---

# Behavior Tree Editor

## 用于设计行为树的可视化编辑器

**Behavior Tree Editor** 是一款开源的可视化工具，用于创建和设计行为树（Behavior Tree）。它提供了一套通用方案，为游戏及其他应用（如仿真、机器人等）建模智能体。它采用开放且简单的 JSON 格式，因此你可以轻松地适配到自己的库、工具或框架中。

![界面预览](/img/preview.png)

### 快速链接

- [文档](/docs/) —— 概念、节点类型与用法
- [快速开始](/docs/getting-started) —— 下载并运行编辑器
- [GitHub 仓库](https://github.com/henrytien/behavior-tree-editor) —— 源码与发布
- [反馈问题](https://github.com/henrytien/behavior-tree-editor/issues) —— Bug 与功能建议

### 为什么选择 Behavior Tree Editor？

- **开源** —— MIT 许可。可自由使用、修改，甚至在公司内部发布定制版本。
- **开放格式** —— 按简单的开放格式将树导出为 JSON。可用任意语言编写自己的读取器。
- **自定义节点** —— 在四个基本类别中创建你自己的节点类型：*组合*、*装饰*、*动作*、*条件*。
- **多树与多项目** —— 创建并管理任意数量的行为树。
- **导入 / 导出 JSON** —— 项目、树和节点可往返导入导出。
- **无依赖** —— 不依赖任何其他工具、编辑器或引擎。

### 关于这个 Fork

这是原始 [behavior3editor](https://github.com/behavior3/behavior3editor)（由 Renato de Pontes Pereira 创建）的持续维护 Fork。它合并了长期搁置的社区 Pull Request，并现代化了构建工具（Electron、当前 Node 工具链）。详见[更新日志](/docs/changelog)。
