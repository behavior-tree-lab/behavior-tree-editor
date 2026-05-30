#!/usr/bin/env python3
"""
Behavior3Editor Build Script
一键编译为 Windows 二进制或 Web 版本
"""

import os
import sys
import argparse
import subprocess
import time
from pathlib import Path

# 颜色常量
GREEN = '\033[92m'
YELLOW = '\033[93m'
CYAN = '\033[96m'
RED = '\033[91m'
RESET = '\033[0m'

# Windows 下的颜色输出
if sys.platform == 'win32':
    try:
        import colorama
        colorama.init()
    except ImportError:
        pass

def print_status(msg):
    """绿色状态消息"""
    print(f"{GREEN}✓ {msg}{RESET}")

def print_header(msg):
    """蓝色标题"""
    print(f"\n{CYAN}{'='*50}{RESET}")
    print(f"{CYAN}  {msg}{RESET}")
    print(f"{CYAN}{'='*50}{RESET}\n")

def print_error(msg):
    """红色错误消息"""
    print(f"{RED}✗ {msg}{RESET}")

def print_info(msg):
    """黄色信息消息"""
    print(f"{YELLOW}► {msg}{RESET}")

def run_command(cmd, description=""):
    """执行命令"""
    if description:
        print_info(description)

    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=False)
        return result.returncode == 0
    except subprocess.CalledProcessError as e:
        print_error(f"Command failed: {cmd}")
        return False

def main():
    parser = argparse.ArgumentParser(
        description='Behavior3Editor Build Script v0.3.1',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python build.py                    # Compile desktop version (default)
  python build.py -t web             # Compile web version only
  python build.py -t all             # Compile both web and desktop
  python build.py -c                 # Clean and rebuild
  python build.py -t all -c          # Clean and build all
        """
    )

    parser.add_argument(
        '-t', '--target',
        choices=['web', 'desktop', 'all'],
        default='desktop',
        help='Build target: web, desktop (default), or all'
    )

    parser.add_argument(
        '-c', '--clean',
        action='store_true',
        help='Clean node_modules and reinstall dependencies'
    )

    args = parser.parse_args()

    # 获取项目路径
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    print_header("Behavior3Editor Build Script v0.3.1")

    # 第1步：验证环境
    print_info("Verifying build environment...")

    # 检查 Node.js
    node_path = r"C:\Program Files\Unity 2020.3.48f1\Editor\Data\Tools\nodejs"
    if not Path(node_path).exists():
        print_error(f"Node.js v6 not found at {node_path}")
        print_info("Please install Node.js v6-v12 or use Unity 2020.3.48f1")
        sys.exit(1)

    # 设置环境变量
    os.environ['PATH'] = f"{node_path};{os.environ.get('PATH', '')}"

    # 获取版本
    node_ver = subprocess.check_output("node --version", shell=True).decode().strip()
    npm_ver = subprocess.check_output("npm --version", shell=True).decode().strip()

    print_status(f"Node.js: {node_ver}")
    print_status(f"npm: {npm_ver}")

    # 第2步：进入项目目录
    os.chdir(project_root)
    print_status(f"Project directory: {os.getcwd()}")

    # 第3步：清理（如果指定 -c）
    if args.clean:
        print_info("Cleaning old dependencies...")
        # 删除 node_modules
        import shutil
        if Path("node_modules").exists():
            shutil.rmtree("node_modules", ignore_errors=True)
        if Path("package-lock.json").exists():
            os.remove("package-lock.json")
        print_status("Cleaned")

    # 第4步：配置 npm
    print_info("Configuring npm registry...")
    run_command("npm config set registry https://registry.npmmirror.com")
    run_command("npm config set strict-ssl false")
    print_status("npm configured (using fast mirror)")

    # 第5步：安装依赖
    if not Path("node_modules").exists():
        print_header("Installing dependencies (may take 2-5 minutes)")
        if not run_command("npm install --ignore-scripts --no-optional", "Running npm install..."):
            print_error("npm install failed")
            sys.exit(1)
        print_status("Dependencies installed")
    else:
        print_status("Dependencies already exist, skipping install")

    start_time = time.time()

    # 第6步：编译 Web 版本
    if args.target in ['web', 'all']:
        print_header("Building Web version")
        if not run_command(".\\node_modules\\.bin\\gulp build", "Running gulp build..."):
            print_error("gulp build failed")
            sys.exit(1)
        print_status("Web build completed")
        print_status("Output: build/")

    # 第7步：编译桌面版本
    if args.target in ['desktop', 'all']:
        print_header("Building Electron desktop application")

        if args.target == 'all':
            print_info("Web build complete, now building desktop...")
        else:
            print_info("Building web first...")
            if not run_command(".\\node_modules\\.bin\\gulp build"):
                print_error("gulp build failed")
                sys.exit(1)

        print_info("Packaging Electron application...")
        if not run_command(".\\node_modules\\.bin\\gulp dist"):
            print_error("gulp dist failed")
            sys.exit(1)

        print_status("Electron packaging completed")
        print_status("Output: dist/")

    # 第8步：验证输出
    print_info("Verifying build results...")

    exe_file = Path("dist/behavior3editor-win32-x64/behavior3editor.exe")
    if args.target in ['desktop', 'all']:
        if exe_file.exists():
            size_mb = exe_file.stat().st_size / (1024 * 1024)
            print_status(f"Found executable: {exe_file} ({size_mb:.1f} MB)")
        else:
            print_error(f"Executable not found: {exe_file}")

    # 显示完成信息
    duration = time.time() - start_time

    print_header("Build Complete!")

    if args.target in ['web', 'all']:
        print(f"{GREEN}📁 Web version: build/{RESET}")
        print(f"   Ready for development and testing")

    if args.target in ['desktop', 'all']:
        print(f"{GREEN}📦 Windows binary: dist/behavior3editor-win32-x64/behavior3editor.exe{RESET}")
        print(f"   Complete Electron application, ready to run")

    print()
    print(f"{CYAN}⏱️  Build time: {duration:.0f} seconds{RESET}")
    print(f"{CYAN}🚀 Next: Run the compiled application{RESET}")

    if args.target in ['desktop', 'all']:
        print()
        print(f"{YELLOW}   .\\dist\\behavior3editor-win32-x64\\behavior3editor.exe{RESET}")

    print()

if __name__ == '__main__':
    main()
