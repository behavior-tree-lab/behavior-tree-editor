#!/bin/bash

# Behavior3Editor Build Script (Bash Wrapper)
# 编译脚本 - 一键编译为 Windows 二进制
# 使用 Python 作为主要编译引擎，解决跨平台编码问题

# 获取脚本目录
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BUILD_PY="$SCRIPT_DIR/build.py"

# 构建参数
PYTHON_ARGS=""

# 参数解析
while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--target)
            PYTHON_ARGS="$PYTHON_ARGS -t $2"
            shift 2
            ;;
        -c|--clean)
            PYTHON_ARGS="$PYTHON_ARGS -c"
            shift
            ;;
        -h|--help)
            PYTHON_ARGS="--help"
            shift
            ;;
        *)
            PYTHON_ARGS="$PYTHON_ARGS $1"
            shift
            ;;
    esac
done

# 如果没有参数，使用默认值
if [ -z "$PYTHON_ARGS" ]; then
    PYTHON_ARGS="-t desktop"
fi

# 执行 Python 编译脚本
python "$BUILD_PY" $PYTHON_ARGS
exit $?
