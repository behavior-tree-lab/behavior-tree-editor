@echo off
REM Behavior3Editor Build Script (Batch Wrapper)
REM 編譯腳本 - 一鍵編譯為 Windows 二進制

setlocal enabledelayedexpansion

REM 獲取腳本目錄
set "SCRIPT_DIR=%~dp0"
set "BUILD_PY=%SCRIPT_DIR%build.py"

REM 構建參數
set "PYTHON_ARGS="

if "%1"=="" (
    REM 默認值：編譯 desktop
    set "PYTHON_ARGS=-t desktop"
) else if "%1"=="-?" (
    set "PYTHON_ARGS=--help"
) else if "%1"=="/?" (
    set "PYTHON_ARGS=--help"
) else if "%1"=="-h" (
    set "PYTHON_ARGS=--help"
) else if "%1"=="--help" (
    set "PYTHON_ARGS=--help"
) else (
    REM 傳遞所有參數給 Python
    set "PYTHON_ARGS=%*"
)

REM 檢查 Python 是否可用
python --version >/dev/null 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Python not found in PATH
    echo.
    echo Please install Python 3.6+ or add Python to your PATH
    echo.
    pause
    exit /b 1
)

REM 執行 Python 編譯腳本
python "%BUILD_PY%" %PYTHON_ARGS%

REM 保存錯誤碼
set "ERROR_CODE=%ERRORLEVEL%"

REM 如果出錯或通過 --help，暫停窗口
if %ERROR_CODE% neq 0 (
    echo.
    echo Build failed with error code %ERROR_CODE%
    echo.
    pause
)

exit /b %ERROR_CODE%
