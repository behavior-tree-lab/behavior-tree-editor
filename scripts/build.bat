@echo off
REM Behavior3Editor Build Script (Batch Wrapper)
REM 編譯腳本 - 一鍵編譯為 Windows 二進制
REM 使用 Python 作為主要編譯引擎

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

REM 執行 Python 編譯腳本
python "%BUILD_PY%" %PYTHON_ARGS%

exit /b %ERRORLEVEL%
