#!/usr/bin/env node

/**
 * 设置依赖关系 - 从 node_modules 链接到 bower_components
 */

const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const nmPath = path.join(baseDir, 'node_modules');
const bowerPath = path.join(baseDir, 'bower_components');
const vendorPath = path.join(baseDir, 'src', 'vendor');

console.log('\n设置依赖关系...\n');

// Bower 期望的包
const bowerDeps = {
  'angular': '1.4',
  'bootstrap': '3.1.1',
  'angular-animate': '1.4',
  'angular-bootstrap': '0.13.0',
  'angular-ui-router': '0.2.14',
  'fontawesome': '4.3.0',
  'sweetalert': '1.0.0-beta'
};

// 尝试创建目录
[bowerPath, vendorPath].forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`创建: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 创建符号链接或复制
for (const pkg of Object.keys(bowerDeps)) {
  const nmPkg = path.join(nmPath, pkg);
  const bowerPkg = path.join(bowerPath, pkg);
  const vendorPkg = path.join(vendorPath, pkg);

  if (!fs.existsSync(nmPkg)) {
    console.log(`  ⚠ npm 包不存在: ${pkg}`);
    continue;
  }

  // 尝试创建到 bower_components 的链接
  if (!fs.existsSync(bowerPkg)) {
    try {
      if (process.platform === 'win32') {
        // Windows: 创建快捷方式或复制
        fs.cpSync(nmPkg, bowerPkg, { recursive: true });
        console.log(`  ✓ ${pkg} (已复制到 bower_components)`);
      } else {
        fs.symlinkSync(nmPkg, bowerPkg, 'dir');
        console.log(`  ✓ ${pkg} (已链接到 bower_components)`);
      }
    } catch (e) {
      console.log(`  ✗ ${pkg} (${e.message.split('\n')[0]})`);
    }
  }
}

console.log('\n✓ 依赖设置完成\n');
