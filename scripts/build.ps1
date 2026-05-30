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
    Write-Host "Behavior3Editor Build Script"
    Write-Host ""
    Write-Host "Usage: .\scripts\build.ps1 [options]"
    Write-Host ""
    Write-Host "Options:"
    Write-Host "  -Target web       Compile Web version only (output to build/)"
    Write-Host "  -Target desktop   Compile Electron desktop (output to dist/) [Default]"
    Write-Host "  -Target all       Compile both Web and desktop"
    Write-Host "  -Clean            Clean node_modules and reinstall dependencies"
    Write-Host "  -Help             Show this help message"
    Write-Host ""
    Write-Host "Examples:"
    Write-Host "  .\scripts\build.ps1                    # Compile desktop"
    Write-Host "  .\scripts\build.ps1 -Target web        # Web only"
    Write-Host "  .\scripts\build.ps1 -Target all -Clean # Full rebuild"
    Write-Host ""
    exit 0
}

# 颜色输出
function Write-Status { Write-Host "✓ $args" -ForegroundColor Green }
function Write-Header {
    Write-Host ""
    Write-Host "════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "  $args" -ForegroundColor Cyan
    Write-Host "════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host ""
}
function Write-Error { Write-Host "✗ $args" -ForegroundColor Red }
function Write-Info { Write-Host "► $args" -ForegroundColor Yellow }

# 记录时间
$StartTime = Get-Date

# 获取脚本目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

Write-Header "Behavior3Editor Build Script v0.3.1"

# 第1步：验证环境
Write-Info "Verifying build environment..."

# 检查 Node.js
$NodePath = "C:\Program Files\Unity 2020.3.48f1\Editor\Data\Tools\nodejs"
if (-Not (Test-Path $NodePath)) {
    Write-Error "Node.js v6 not found at $NodePath"
    Write-Info "Please install Node.js v6-v12 or use Unity 2020.3.48f1"
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
Write-Status "Project directory: $(Get-Location)"

# 第3步：清理 (如果指定 -Clean)
if ($Clean) {
    Write-Info "Cleaning old dependencies..."
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue | Out-Null
    Remove-Item package-lock.json -ErrorAction SilentlyContinue | Out-Null
    Write-Status "Cleaned"
}

# 第4步：配置 npm
Write-Info "Configuring npm registry..."
& npm config set registry http://registry.npmjs.org
& npm config set strict-ssl false
Write-Status "npm configured"

# 第5步：安装依赖
if (-Not (Test-Path "node_modules")) {
    Write-Header "Installing dependencies (may take 2-5 minutes)"
    & npm install --ignore-scripts --no-optional

    if ($LASTEXITCODE -ne 0) {
        Write-Error "npm install failed"
        exit 1
    }
    Write-Status "Dependencies installed"
} else {
    Write-Status "Dependencies already exist, skipping install"
}

# 第6步：编译 Web 版本
if (($Target -eq "web") -or ($Target -eq "all")) {
    Write-Header "Building Web version"

    & .\node_modules\.bin\gulp build

    if ($LASTEXITCODE -ne 0) {
        Write-Error "gulp build failed"
        exit 1
    }
    Write-Status "Web build completed"
    Write-Status "Output: build/"
}

# 第7步：编译桌面版本
if (($Target -eq "desktop") -or ($Target -eq "all")) {
    Write-Header "Building Electron desktop application"

    if ($Target -eq "all") {
        Write-Info "Web build complete, now building desktop..."
    } else {
        Write-Info "Building web first..."
        & .\node_modules\.bin\gulp build
        if ($LASTEXITCODE -ne 0) {
            Write-Error "gulp build failed"
            exit 1
        }
    }

    Write-Info "Packaging Electron application..."
    & .\node_modules\.bin\gulp dist

    if ($LASTEXITCODE -ne 0) {
        Write-Error "gulp dist failed"
        exit 1
    }
    Write-Status "Electron packaging completed"
    Write-Status "Output: dist/"
}

# 第8步：验证输出
Write-Info "Verifying build results..."

$ExeFile = "dist\behavior3editor-win32-x64\behavior3editor.exe"
if ($Target -eq "desktop" -or $Target -eq "all") {
    if (Test-Path $ExeFile) {
        $Size = (Get-Item $ExeFile).Length / 1MB
        Write-Status "Found executable: $ExeFile ($([math]::Round($Size, 1)) MB)"
    } else {
        Write-Error "Executable not found: $ExeFile"
    }
}

# 显示完成信息
$EndTime = Get-Date
$Duration = $EndTime - $StartTime

Write-Header "Build Complete!"

if ($Target -eq "web" -or $Target -eq "all") {
    Write-Host "📁 Web version: build/" -ForegroundColor Green
    Write-Host "   Ready for development and testing" -ForegroundColor Gray
}

if ($Target -eq "desktop" -or $Target -eq "all") {
    Write-Host "📦 Windows binary: dist\behavior3editor-win32-x64\behavior3editor.exe" -ForegroundColor Green
    Write-Host "   Complete Electron application, ready to run" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Build time: $($Duration.TotalSeconds) seconds" -ForegroundColor Cyan
Write-Host "Next: Run the compiled application" -ForegroundColor Cyan

if ($Target -eq "desktop" -or $Target -eq "all") {
    Write-Host ""
    Write-Host "   .\dist\behavior3editor-win32-x64\behavior3editor.exe" -ForegroundColor Yellow
}

Write-Host ""
