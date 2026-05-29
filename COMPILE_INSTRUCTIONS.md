# Behavior3Editor 编译说明

## 问题分析

当前项目配置使用非常旧的依赖：
- `electron-prebuilt@0.33.8` (已废弃，改为 @electron/prebuilt)
- `electron-packager@5.1.1` (很旧，现在是 @electron/packager)
- `gulp@3.9.0` (仍可用但已过时)

这导致直接编译存在兼容性问题。

## 编译选项

### 方案 A: Web 版本 (推荐 - 最简单) ⭐

```bash
cd E:\GitHub\behavior-tree-editor

# 安装依赖（跳过 electron）
npm install --ignore-scripts --no-optional

# 启动开发服务器
npx gulp serve
```

打开浏览器: http://127.0.0.1:8000

**优点:**
- 无需 Electron 依赖
- 立即可以使用
- 包含所有日志功能
- 支持实时编辑和热重载

**缺点:**
- 不是独立可执行文件
- 需要 Node.js 运行环境

---

### 方案 B: 手动修复并编译 Electron 版本 (复杂)

#### 步骤 1: 更新 package.json

替换 `devDependencies` 为现代版本：

```json
{
  "devDependencies": {
    "@electron/packager": "^18.0.0",
    "@electron/prebuilt": "^28.0.0",
    "electron": "^28.0.0",
    "gulp": "^3.9.1",
    "gulp-angular-templatecache": "^1.7.0",
    "gulp-concat": "^2.6.1",
    "gulp-connect": "^2.3.1",
    "gulp-foreach": "^0.1.0",
    "gulp-jshint": "^2.1.0",
    "gulp-less": "^4.0.1",
    "gulp-minify-css": "^1.2.4",
    "gulp-minify-html": "^1.0.6",
    "gulp-replace": "^1.1.4",
    "gulp-uglify": "^3.0.2",
    "gulp-zip": "^5.1.0",
    "jshint": "^2.13.6",
    "jshint-stylish": "^2.2.1",
    "merge-stream": "^2.0.0",
    "rimraf": "^5.0.1"
  }
}
```

#### 步骤 2: 更新 gulpfile.js

在 gulpfile.js 顶部修改：

```javascript
// 改为
var packager = require('@electron/packager');
// 而不是
var packager = require('electron-packager');
```

#### 步骤 3: 安装并编译

```bash
npm install
npx bower install --allow-root
npx gulp build
npx gulp dist
```

编译输出会在 `dist/` 目录中。

---

### 方案 C: 使用 Electron Forge (最现代) ⭐⭐

完全重写项目以使用现代 Electron 工具：

```bash
npx create-electron-app behavior3editor --template webpack
# 然后迁移代码...
```

这需要较多工作量。

---

## 当前推荐方案

### 立即可用 (不需要编译)
```
现有二进制: D:\Downloads\behavior3editor-win32-x64\...
版本: v0.34.2
状态: ✅ 可用
```

### 如果需要 Web 版本 (推荐诊断用)
```bash
cd E:\GitHub\behavior-tree-editor
npm install --ignore-scripts --no-optional
npx gulp serve
# 打开 http://127.0.0.1:8000
```

### 如果一定要独立 .exe
需要完成方案 B 的所有步骤（较复杂且耗时）

---

## 目录结构

完成编译后的输出：

```
dist/
├── behavior3editor-win32-x64/
│   ├── behavior3editor.exe
│   ├── resources/
│   │   └── app.asar
│   └── [其他必要文件]
├── behavior3editor-darwin-x64/
├── behavior3editor-linux-x64/
└── [.zip 打包文件]
```

---

## 故障排除

### 问题: bower install 失败
```bash
# 解决方案
npx bower install --allow-root --force-latest
```

### 问题: gulp 找不到任务
```bash
# 验证 gulpfile.js 的语法
node -c gulpfile.js

# 列出所有任务
npx gulp --tasks-simple
```

### 问题: electron-packager 版本冲突
```bash
# 使用特定版本
npm install electron-packager@5.2.1
```

### 问题: node_modules 损坏
```bash
# 完全重新安装
rm -rf node_modules package-lock.json
npm install --ignore-scripts --no-optional
```

---

## 快速参考

| 目标 | 命令 | 输出位置 |
|------|------|---------|
| Web 版本 | `npx gulp serve` | http://127.0.0.1:8000 |
| Web 编译 | `npx gulp build` | `build/` |
| Electron 打包 | `npx gulp dist` | `dist/` |
| 所有任务 | `npx gulp --tasks` | 列表 |

---

## 总结

- ✅ **现有二进制** (v0.34.2) 可以直接使用
- ✅ **Web 版本** 可以通过 `npx gulp serve` 快速启动
- ⏳ **新 Electron 编译** 需要修复依赖 (复杂)
- 🎯 **推荐**: 使用 Web 版本进行诊断和测试
