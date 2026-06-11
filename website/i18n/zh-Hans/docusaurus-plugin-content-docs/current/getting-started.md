---
sidebar_position: 2
---

# 快速开始

使用 Behavior3 Editor 有两种方式：下载预编译的桌面应用，或从源码构建。

## 下载桌面应用

预编译的二进制文件发布在 [Releases 页面](https://github.com/henrytien/behavior-tree-editor/releases)。下载对应你平台的安装包，解压后运行可执行文件即可，无需安装。

## 从源码构建

### 环境要求

- [Node.js](https://nodejs.org) 18+
- [Bower](https://bower.io)（`npm install -g bower`）

### 安装依赖

```bash
git clone https://github.com/henrytien/behavior-tree-editor.git
cd behavior-tree-editor

npm install
bower install
```

`npm install` 拉取构建工具和 Electron；`bower install` 拉取 CSS/JS 前端依赖库。

### 在浏览器中运行（开发模式）

每次改动都会自动构建并热重载，服务地址为 `http://127.0.0.1:8000`：

```bash
gulp serve
```

### 运行桌面版本

```bash
gulp dev      # 构建应用包
gulp dist     # 构建并打包成可分发的桌面应用
```

`gulp dist` 会在构建/输出目录下生成打包好的 Electron 应用。

## 下一步

- 了解行为树的[核心概念](./guide/concepts)
- 查看可用的[节点类型](./guide/node-types)
- 创建你自己的[自定义节点](./guide/custom-nodes)
- 理解[导入 / 导出](./guide/import-export)与 JSON 格式
