# Behavior3Editor 编译脚本

快速一键编译脚本，轻松生成 Windows 二进制应用。

## 架构说明

- **build.py** — 核心编译引擎（Python，避免编码问题）
- **build.ps1** — PowerShell 包装脚本，调用 build.py
- **build.bat** — Windows Batch 包装脚本，调用 build.py  
- **build.sh** — Bash 包装脚本，调用 build.py

**优势**：Python 脚本跨平台，一次编写，无编码/乱码问题。所有包装脚本都只负责参数转发。

## 快速开始

### PowerShell 用户 (推荐 Windows)

```powershell
# 编译桌面版本 (默认)
.\scripts\build.ps1

# 编译 Web 版本
.\scripts\build.ps1 -Target web

# 编译所有版本
.\scripts\build.ps1 -Target all

# 清空依赖并重新编译
.\scripts\build.ps1 -Clean

# 显示帮助
.\scripts\build.ps1 -Help
```

### Batch 用户 (cmd.exe)

```cmd
REM 编译桌面版本 (默认)
.\scripts\build.bat

REM 编译 Web 版本
.\scripts\build.bat -t web

REM 编译所有版本
.\scripts\build.bat -t all

REM 清空依赖并重新编译
.\scripts\build.bat -c

REM 显示帮助
.\scripts\build.bat -h
```

### Bash 用户 (Git Bash / WSL / Linux)

```bash
# 编译桌面版本 (默认)
./scripts/build.sh

# 或用 bash 显式执行 (Windows 上)
bash scripts/build.sh

# 编译 Web 版本
./scripts/build.sh -t web

# 编译所有版本
./scripts/build.sh -t all

# 清空依赖并重新编译
./scripts/build.sh -c

# 显示帮助
./scripts/build.sh -h
```

### Python 用户 (直接调用核心引擎)

```bash
# 编译桌面版本 (默认)
python scripts/build.py

# 编译 Web 版本
python scripts/build.py -t web

# 编译所有版本
python scripts/build.py -t all

# 清空依赖并重新编译
python scripts/build.py -c

# 显示帮助
python scripts/build.py --help
```

## 脚本说明

### build.py (Python - 核心引擎)

- **作者**: Behavior3Editor
- **用途**: 跨平台编译引擎，无编码/乱码问题
- **依赖**: Python 3.6+, Node.js v6-v12, npm

**选项**:
- `-t, --target web` - 仅编译 Web 版本
- `-t, --target desktop` - 仅编译 Electron 桌面版本 (默认)
- `-t, --target all` - 编译 Web 和桌面版本
- `-c, --clean` - 清空 node_modules 并重新安装
- `--help` - 显示帮助信息

### build.ps1 (PowerShell 包装)

- **作者**: Behavior3Editor
- **用途**: Windows PowerShell 包装器，调用 build.py
- **依赖**: Python 3.6+, PowerShell 5+

**选项**:
- `-Target web` - 仅编译 Web 版本
- `-Target desktop` - 仅编译 Electron 桌面版本 (默认)
- `-Target all` - 编译 Web 和桌面版本
- `-Clean` - 清空 node_modules 并重新安装
- `-Help` - 显示帮助信息

### build.bat (Batch 包装)

- **作者**: Behavior3Editor
- **用途**: Windows Batch 包装器，调用 build.py
- **依赖**: Python 3.6+, cmd.exe

**选项**:
- `-t web` - 仅编译 Web 版本
- `-t desktop` - 仅编译 Electron 桌面版本 (默认)
- `-t all` - 编译 Web 和桌面版本
- `-c` - 清空 node_modules 并重新安装
- `-h, --help, /?, -?` - 显示帮助信息

### build.sh (Bash 包装)

- **作者**: Behavior3Editor
- **用途**: Git Bash / WSL 包装器，调用 build.py
- **依赖**: Python 3.6+, Bash

**选项**:
- `-t, --target web` - 仅编译 Web 版本
- `-t, --target desktop` - 仅编译 Electron 桌面版本 (默认)
- `-t, --target all` - 编译 Web 和桌面版本
- `-c, --clean` - 清空 node_modules 并重新安装
- `-h, --help` - 显示帮助信息

## 编译流程

脚本自动执行以下步骤：

1. ✓ 验证 Node.js 和 npm 版本
2. ✓ 配置 npm registry (HTTP，避免 SSL 问题)
3. ✓ 安装项目依赖 (首次运行需要 2-5 分钟)
4. ✓ 编译 Web 资源 (CSS, JavaScript, HTML)
5. ✓ 打包 Electron 应用为 Windows 二进制
6. ✓ 验证输出文件

## 输出位置

编译完成后，输出文件位置：

```
behavior-tree-editor/
├── build/                              # Web 版本
│   ├── js/
│   │   ├── vendor.min.js
│   │   ├── app.min.js
│   │   └── templates.min.js
│   ├── css/
│   │   ├── vendor.min.css
│   │   └── app.min.css
│   └── fonts/
│
└── dist/                               # Electron 版本
    ├── behavior3editor-win32-x64/      # Windows 二进制
    │   ├── behavior3editor.exe         # 主应用文件
    │   ├── resources/
    │   │   └── app.asar
    │   └── [其他 Electron 文件]
    ├── behavior3editor-darwin-x64/     # macOS 版本 (如果编译)
    ├── behavior3editor-linux-x64/      # Linux 版本 (如果编译)
    └── [压缩包]
```

## 运行编译后的应用

### Windows 二进制

```powershell
# 直接运行
.\dist\behavior3editor-win32-x64\behavior3editor.exe

# 或双击打开文件管理器中的 exe 文件
```

### Web 版本 (开发)

```bash
# 启动开发服务器
.\node_modules\.bin\gulp serve

# 或在 Bash 中
./node_modules/.bin/gulp serve

# 打开浏览器
http://127.0.0.1:8000
```

## 常见问题

### Q: npm install 很慢怎么办？

A: 脚本已经配置使用 HTTP registry。如果仍然很慢：

```powershell
# 更换为其他镜像
npm config set registry http://registry.cnpmjs.org  # 中国用户
npm config set registry http://registry.npmjs.org   # 默认
```

### Q: 出现 SSL/EPROTO 错误怎么办？

A: 脚本已禁用 SSL 验证。如果仍有问题：

```powershell
npm config set strict-ssl false
```

### Q: 怎样清空重新编译？

A: 使用 `-Clean` 或 `-c` 选项：

```powershell
# PowerShell
.\scripts\build.ps1 -Clean

# Bash
./scripts/build.sh -c
```

### Q: 能否只编译 Web 版本而不编译 Electron？

A: 可以，使用 `-Target web` 或 `-t web`：

```powershell
# PowerShell
.\scripts\build.ps1 -Target web

# Bash
./scripts/build.sh -t web
```

## 编译时间预计

| 步骤 | 时间 | 说明 |
|------|------|------|
| npm install | 2-5 分钟 | 仅在首次或使用 -Clean 时 |
| gulp build | 1-2 分钟 | Web 资源编译 |
| gulp dist | 3-5 分钟 | Electron 打包 |
| **总计** | **6-12 分钟** | 首次完整编译 |

## 故障排除

如果编译失败，按以下步骤排查：

1. **检查 Node 版本** (应该是 v6-v12)
   ```bash
   node --version
   npm --version
   ```

2. **手动清理**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   ```

3. **重新运行脚本**
   ```powershell
   .\scripts\build.ps1 -Clean
   ```

4. **查看详细日志**
   ```powershell
   .\scripts\build.ps1 -Verbose
   ```

## 进阶用法

### 仅在需要时安装依赖

默认情况下，如果 node_modules 已存在，脚本会跳过 npm install。
使用 `-Clean` 强制重新安装：

```powershell
.\scripts\build.ps1 -Clean -Target all
```

### 后台编译 (留在后台运行)

```powershell
# PowerShell
Start-Job -ScriptBlock { .\scripts\build.ps1 }

# Bash
./scripts/build.sh &
```

### 集成到 CI/CD

脚本设计为可在自动化流程中使用：

```yaml
# GitHub Actions 示例
- name: Build Behavior3Editor
  run: |
    cd behavior-tree-editor
    .\scripts\build.ps1 -Target all
```

## 文件说明

- **build.ps1** - PowerShell 版本编译脚本
- **build.sh** - Bash 版本编译脚本  
- **README.md** - 本文件

## 许可证

这些脚本是 Behavior3Editor 项目的一部分，遵循项目的原始许可证。

## 获取帮助

```powershell
# PowerShell 帮助
.\scripts\build.ps1 -Help

# Bash 帮助
./scripts/build.sh -h
```

---

**祝你编译顺利！** 🚀
