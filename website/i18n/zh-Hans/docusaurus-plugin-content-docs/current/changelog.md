---
sidebar_position: 99
---

# 更新日志

本文件记录本项目所有值得注意的变更。格式基于
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/)，并遵循
[语义化版本](https://semver.org/lang/zh-CN/)。

## [0.3.1] —— 2026-05-30

### 修复
- **修复树导入错误**（PR #31，samuelben）—— 项目尚无树时也能正常导入；导入树数据前先添加树；正确保留 block 属性；妥善处理嵌套树的导入。
- **修复桌面版的 preload 缺陷**（PR #39，nickytao）—— 解决 Electron preload 与加载状态问题。
- **修复 keytable 指令**（PR #40，tdkr）—— 改进 keytable 指令的行为。

### 新增
- **相机移动增强**（PR #34，finscn）—— 支持 Shift + 鼠标左键平移相机。
- **日志工具** —— 用于调试的 Logger，记录树导入过程，帮助诊断加载和 block 创建问题。

### 改进
- 改善导入时的错误处理。
- 提升对复杂树结构的兼容性。
- 增加调试日志，便于排查问题。

## [0.3.0]

- 本维护 Fork 的首个稳定版本。

---

本次发布合并了四个搁置 5 年以上的社区 Pull Request。
感谢 **samuelben**、**nickytao**、**finscn** 和 **tdkr**。

欢迎贡献 —— 请提交 [issue 和 pull request](https://github.com/henrytien/behavior-tree-editor/issues)。
