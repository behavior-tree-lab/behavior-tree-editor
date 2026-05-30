# Behavior3Editor Build Script (PowerShell Wrapper)
# 编译脚本 - 一键编译为 Windows 二进制
# 使用 Python 作为主要编译引擎，解决跨平台编码问题

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("web", "desktop", "all")]
    [string]$Target = "desktop",

    [Parameter(Mandatory=$false)]
    [switch]$Clean = $false,

    [Parameter(Mandatory=$false)]
    [switch]$Help = $false
)

# 获取脚本目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$BuildPyPath = Join-Path $ScriptDir "build.py"

# 构建参数
$PythonArgs = @()

if ($Help) {
    $PythonArgs += "--help"
} else {
    $PythonArgs += "-t", $Target
    if ($Clean) {
        $PythonArgs += "-c"
    }
}

# 执行 Python 编译脚本
python "$BuildPyPath" @PythonArgs
exit $LASTEXITCODE
