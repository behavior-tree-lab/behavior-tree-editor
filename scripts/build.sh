#!/bin/bash

# Behavior3Editor Build Script (Bash version)
# 编译脚本 - 一键编译为 Windows 二进制

set -e  # 如果任何命令失败就退出

# 彩色输出函数
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

write_status() {
    echo -e "${GREEN}✓ $@${NC}"
}

write_header() {
    echo -e "\n${CYAN}╔════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║ $@${NC}"
    echo -e "${CYAN}╚════════════════════════════════════════╝${NC}\n"
}

write_error() {
    echo -e "${RED}✗ $@${NC}"
}

write_info() {
    echo -e "${YELLOW}► $@${NC}"
}

# 参数解析
TARGET="desktop"
CLEAN=false
HELP=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--target)
            TARGET="$2"
            shift 2
            ;;
        -c|--clean)
            CLEAN=true
            shift
            ;;
        -h|--help)
            HELP=true
            shift
            ;;
        *)
            echo "未知选项: $1"
            HELP=true
            shift
            ;;
    esac
done

# 显示帮助
if [ "$HELP" = true ]; then
    cat << 'EOF'
用法: ./scripts/build.sh [options]

选项:
  -t, --target web       编译 Web 版本 (输出到 build/)
  -t, --target desktop   编译 Electron 桌面版本 (输出到 dist/) [默认]
  -t, --target all       编译 Web 和桌面版本
  -c, --clean            清空 node_modules 并重新安装依赖
  -h, --help             显示此帮助信息

示例:
  ./scripts/build.sh                     # 编译桌面版本
  ./scripts/build.sh -t web              # 仅编译 Web
  ./scripts/build.sh -t all -c           # 完整编译 (重新安装依赖)
  bash scripts/build.sh                  # 用 bash 运行 (如果在 Windows 上)

EOF
    exit 0
fi

# 记录开始时间
START_TIME=$(date +%s)

# 获取脚本目录
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( dirname "$SCRIPT_DIR" )"

write_header "Behavior3Editor 编译脚本 v0.3.1"

# 第1步：验证环境
write_info "验证构建环境..."

# 检查 Node.js
NODE_PATH="/c/Program Files/Unity 2020.3.48f1/Editor/Data/Tools/nodejs"
if [ -d "$NODE_PATH" ]; then
    export PATH="$NODE_PATH:$PATH"
    write_status "使用 Node.js v6 from Unity"
else
    # 尝试使用系统 Node.js
    if command -v node &> /dev/null; then
        write_status "使用系统 Node.js"
    else
        write_error "未找到 Node.js"
        write_info "请安装 Node.js v6-v12，或使用 Unity 2020.3.48f1 附带的版本"
        exit 1
    fi
fi

# 验证版本
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)

write_status "Node.js: $NODE_VERSION"
write_status "npm: $NPM_VERSION"

# 第2步：进入项目目录
cd "$PROJECT_ROOT"
write_status "项目目录: $(pwd)"

# 第3步：清理 (如果指定 -c)
if [ "$CLEAN" = true ]; then
    write_info "清空现有依赖..."
    rm -rf node_modules package-lock.json 2>/dev/null || true
    write_status "已清空"
fi

# 第4步：配置 npm
write_info "配置 npm registry..."
npm config set registry http://registry.npmjs.org
npm config set strict-ssl false
write_status "npm 已配置"

# 第5步：安装依赖
if [ ! -d "node_modules" ]; then
    write_header "安装依赖 (这可能需要 2-5 分钟)"
    npm install --ignore-scripts --no-optional || {
        write_error "npm install 失败"
        exit 1
    }
    write_status "依赖安装完成"
else
    write_status "依赖已存在，跳过安装"
fi

# 第6步：编译 Web 版本
if [ "$TARGET" = "web" ] || [ "$TARGET" = "all" ]; then
    write_header "编译 Web 版本"

    ./node_modules/.bin/gulp build || {
        write_error "gulp build 失败"
        exit 1
    }
    write_status "Web 版本编译完成"
    write_status "输出目录: build/"
fi

# 第7步：编译桌面版本
if [ "$TARGET" = "desktop" ] || [ "$TARGET" = "all" ]; then
    write_header "编译 Electron 桌面版本"

    if [ "$TARGET" = "all" ]; then
        write_info "已完成 Web 版本编译，继续编译桌面版本..."
    else
        write_info "先编译 Web 版本..."
        ./node_modules/.bin/gulp build || {
            write_error "gulp build 失败"
            exit 1
        }
    fi

    write_info "打包 Electron 应用..."
    ./node_modules/.bin/gulp dist || {
        write_error "gulp dist 失败"
        exit 1
    }
    write_status "Electron 应用打包完成"
    write_status "输出目录: dist/"
fi

# 第8步：验证输出
write_info "验证编译结果..."

EXE_FILE="dist/behavior3editor-win32-x64/behavior3editor.exe"
if [ "$TARGET" = "desktop" ] || [ "$TARGET" = "all" ]; then
    if [ -f "$EXE_FILE" ]; then
        SIZE=$(du -h "$EXE_FILE" | cut -f1)
        write_status "✓ 找到可执行文件: $EXE_FILE ($SIZE)"
    else
        write_error "未找到可执行文件: $EXE_FILE"
    fi
fi

# 显示完成信息
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

write_header "编译完成！"

if [ "$TARGET" = "web" ] || [ "$TARGET" = "all" ]; then
    echo -e "${GREEN}📁 Web 版本: build/${NC}"
    echo -e "${NC}   可用于开发测试，包含所有源代码${NC}"
fi

if [ "$TARGET" = "desktop" ] || [ "$TARGET" = "all" ]; then
    echo -e "${GREEN}📦 Windows 二进制: dist/behavior3editor-win32-x64/behavior3editor.exe${NC}"
    echo -e "${NC}   完整的 Electron 应用，可直接运行${NC}"
fi

echo -e "\n${CYAN}⏱️  编译耗时: ${DURATION} 秒${NC}"
echo -e "${CYAN}🚀 下一步: 运行编译后的应用${NC}"

if [ "$TARGET" = "desktop" ] || [ "$TARGET" = "all" ]; then
    echo -e "\n${YELLOW}   ./dist/behavior3editor-win32-x64/behavior3editor.exe${NC}"
fi

echo ""
