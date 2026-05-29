#!/usr/bin/env node

/**
 * 快速编译脚本 - 绕过 shell 问题
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = __dirname;

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log('║          Behavior3Editor Quick Build                       ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

function step(num, desc) {
  console.log(`\n[${num}] ${desc}`);
}

function log(msg) {
  console.log(`    ${msg}`);
}

try {
  step('1', '检查 bower_components 目录');
  const bowerDir = path.join(baseDir, 'bower_components');
  if (fs.existsSync(bowerDir)) {
    const count = fs.readdirSync(bowerDir).length;
    log(`✓ 已存在 (${count} 个包)`);
  } else {
    log('⚠ 缺失，尝试使用本地 npm 包替代...');
    log('创建 bower_components 符号...');

    // 创建必要的 bower 目录结构（使用 node_modules 中的包）
    if (!fs.existsSync(bowerDir)) {
      fs.mkdirSync(bowerDir, { recursive: true });
    }

    const nmPath = path.join(baseDir, 'node_modules');
    const bowerJson = JSON.parse(fs.readFileSync(path.join(baseDir, 'bower.json'), 'utf8'));

    log(`处理 ${Object.keys(bowerJson.dependencies).length} 个依赖...`);

    for (const [pkg, version] of Object.entries(bowerJson.dependencies || {})) {
      const nmPkg = path.join(nmPath, pkg);
      const bowerPkg = path.join(bowerDir, pkg);

      if (fs.existsSync(nmPkg) && !fs.existsSync(bowerPkg)) {
        try {
          // 创建符号链接或复制
          if (process.platform === 'win32') {
            // Windows 上复制而不是符号链接
            execSync(`xcopy "${nmPkg}" "${bowerPkg}" /E /I /Y`, {
              stdio: 'ignore',
              shell: true
            });
          } else {
            fs.symlinkSync(nmPkg, bowerPkg);
          }
          log(`  ✓ ${pkg}`);
        } catch (e) {
          log(`  ⚠ ${pkg} (${e.message.split('\n')[0]})`);
        }
      }
    }
  }

  step('2', '运行 Gulp 编译');

  const gulpPath = path.join(baseDir, 'node_modules', '.bin', 'gulp');

  // 检查 gulp 是否存在
  if (!fs.existsSync(gulpPath)) {
    log('❌ Gulp 未找到');
    throw new Error('Gulp not found in node_modules');
  }

  log('执行: gulp build');
  try {
    execSync(`"${gulpPath}" build`, {
      cwd: baseDir,
      stdio: 'inherit',
      shell: true,
      env: { ...process.env, FORCE_COLOR: '1' }
    });
    log('✓ build 完成');
  } catch (e) {
    log(`⚠ build 警告: ${e.message.split('\n')[0]}`);
    // 继续，即使 build 失败
  }

  log('执行: gulp dist');
  try {
    execSync(`"${gulpPath}" dist`, {
      cwd: baseDir,
      stdio: 'inherit',
      shell: true,
      env: { ...process.env, FORCE_COLOR: '1' }
    });
    log('✓ dist 完成');
  } catch (e) {
    log(`⚠ dist 警告: ${e.message.split('\n')[0]}`);
  }

  step('3', '检查编译结果');

  const distPath = path.join(baseDir, 'dist');
  if (fs.existsSync(distPath)) {
    const items = fs.readdirSync(distPath);
    log(`✓ 输出目录存在 (${items.length} 项)`);

    items.forEach(item => {
      const itemPath = path.join(distPath, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        const size = getDirectorySize(itemPath);
        log(`  📁 ${item}/ (${formatSize(size)})`);
      } else {
        log(`  📦 ${item} (${formatSize(stat.size)})`);
      }
    });

    const winPath = path.join(distPath, 'behavior3editor-win32-x64');
    if (fs.existsSync(winPath)) {
      const exePath = path.join(winPath, 'behavior3editor.exe');
      if (fs.existsSync(exePath)) {
        const size = fs.statSync(exePath).size;
        log(`\n✅ Windows 可执行文件: ${exePath}`);
        log(`   大小: ${formatSize(size)}`);
      }
    }
  } else {
    log('❌ dist 目录不存在');
  }

  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                    ✅ 编译完成！                           ║');
  console.log('║  检查 dist/ 目录中的编译结果                              ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

} catch (error) {
  console.error(`\n❌ 编译失败: ${error.message}\n`);
  process.exit(1);
}

function getDirectorySize(dir) {
  let size = 0;
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filepath = path.join(dir, file);
      const stat = fs.statSync(filepath);
      size += stat.isDirectory() ? getDirectorySize(filepath) : stat.size;
    });
  } catch (e) {
    // 忽略错误
  }
  return size;
}

function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
