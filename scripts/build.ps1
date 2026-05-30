# Behavior3Editor Build Script
# 编译脚本 - 一键编译为 Windows 二进制

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("web", "desktop", "all")]
    [string]$Target = "desktop",

    [Parameter(Mandatory=$false)]
    [switch]$Clean = $false,

    [Parameter(Mandatory=$false)]
    [switch]$Help = $false
)

# 显示帮助
if ($Help) {
    Write-Host @"
用法: .\scripts\build.ps1 [options]

选项:
  -Target web       编译 Web 版本 (输出到 build/)
  -Target desktop   编译 Electron 桌面版本 (输出到 dist/) [默认]
  -Target all       编译 Web 和桌面版本
  -Clean            清空 node_modules 并重新安装依赖
  -Help             显示此帮助信息

示例:
  .\scripts\build.ps1                    # 编译桌面版本
  .\scripts\build.ps1 -Target web        # 仅编译 Web
  .\scripts\build.ps1 -Target all -Clean # 完整编译 (重新安装依赖)

@"
    exit 0
}

# 颜色输出
function Write-Status { Write-Host "✓ $args" -ForegroundColor Green }
function Write-Header { Write-Host "`n╔════════════════════════════════════════╗" -ForegroundColor Cyan; Write-Host "║ $args" -ForegroundColor Cyan; Write-Host "╚════════════════════════════════════════╝`n" -ForegroundColor Cyan }
function Write-Error { Write-Host "✗ $args" -ForegroundColor Red }
function Write-Info { Write-Host "► $args" -ForegroundColor Yellow }

# 记录时间
$StartTime = Get-Date

# 获取脚本目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

Write-Header "Behavior3Editor 编译脚本 v0.3.1"

# 第1步：验证环境
Write-Info "验证构建环境..."

# 检查 Node.js
$NodePath = "C:\Program Files\Unity 2020.3.48f1\Editor\Data\Tools\nodejs"
if (-Not (Test-Path $NodePath)) {
    Write-Error "未找到 Node.js v6"
    Write-Info "请安装 Node.js v6-v12，或使用 Unity 2020.3.48f1 附带的版本"
    exit 1
}

# 设置环境
$env:PATH = "$NodePath;$env:PATH"

# 验证版本
$NodeVersion = & node --version
$NpmVersion = & npm --version

Write-Status "Node.js: $NodeVersion"
Write-Status "npm: $NpmVersion"

# 第2步：进入项目目录
cd $ProjectRoot
Write-Status "项目目录: $(Get-Location)"

# 第3步：清理 (如果指定 -Clean)
if ($Clean) {
    Write-Info "清空现有依赖..."
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue | Out-Null
    Remove-Item package-lock.json -ErrorAction SilentlyContinue | Out-Null
    Write-Status "已清空"
}

# 第4步：配置 npm
Write-Info "配置 npm registry..."
& npm config set registry http://registry.npmjs.org
& npm config set strict-ssl false
Write-Status "npm 已配置"

# 第5步：安装依赖
if (-Not (Test-Path "node_modules")) {
    Write-Header "安装依赖 (这可能需要 2-5 分钟)"
    & npm install --ignore-scripts --no-optional

    if ($LASTEXITCODE -ne 0) {
        Write-Error "npm install 失败"
        exit 1
    }
    Write-Status "依赖安装完成"
} else {
    Write-Status "依赖已存在，跳过安装"
}

# 第6步：编译 Web 版本
if (($Target -eq "web") -or ($Target -eq "all")) {
    Write-Header "编译 Web 版本"

    & .\node_modules\.bin\gulp build

    if ($LASTEXITCODE -ne 0) {
        Write-Error "gulp build 失败"
        exit 1
    }
    Write-Status "Web 版本编译完成"
    Write-Status "输出目录: build/"
}

# 第7步：编译桌面版本
if (($Target -eq "desktop") -or ($Target -eq "all")) {
    Write-Header "编译 Electron 桌面版本"

    if ($Target -eq "all") {
        Write-Info "已完成 Web 版本编译，继续编译桌面版本..."
    } else {
        Write-Info "先编译 Web 版本..."
        & .\node_modules\.bin\gulp build
        if ($LASTEXITCODE -ne 0) {
            Write-Error "gulp build 失败"
            exit 1
        }
    }

    Write-Info "打包 Electron 应用..."
    & .\node_modules\.bin\gulp dist

    if ($LASTEXITCODE -ne 0) {
        Write-Error "gulp dist 失败"
        exit 1
    }
    Write-Status "Electron 应用打包完成"
    Write-Status "输出目录: dist/"
}

# 第8步：验证输出
Write-Info "验证编译结果..."

$ExeFile = "dist\behavior3editor-win32-x64\behavior3editor.exe"
if ($Target -eq "desktop" -or $Target -eq "all") {
    if (Test-Path $ExeFile) {
        $Size = (Get-Item $ExeFile).Length / 1MB
        Write-Status "✓ 找到可执行文件: $ExeFile ($([math]::Round($Size, 1)) MB)"
    } else {
        Write-Error "未找到可执行文件: $ExeFile"
    }
}

# 显示完成信息
$EndTime = Get-Date
$Duration = $EndTime - $StartTime

Write-Header "编译完成！"

if ($Target -eq "web" -or $Target -eq "all") {
    Write-Host "📁 Web 版本: build/" -ForegroundColor Green
    Write-Host "   可用于开发测试，包含所有源代码" -ForegroundColor Gray
}

if ($Target -eq "desktop" -or $Target -eq "all") {
    Write-Host "📦 Windows 二进制: dist\behavior3editor-win32-x64\behavior3editor.exe" -ForegroundColor Green
    Write-Host "   完整的 Electron 应用，可直接运行" -ForegroundColor Gray
}

Write-Host "`n⏱️  编译耗时: $($Duration.TotalSeconds) 秒" -ForegroundColor Cyan
Write-Host "🚀 下一步: 运行编译后的应用" -ForegroundColor Cyan

if ($Target -eq "desktop" -or $Target -eq "all") {
    Write-Host "`n   .\dist\behavior3editor-win32-x64\behavior3editor.exe" -ForegroundColor Yellow
}

Write-Host ""
