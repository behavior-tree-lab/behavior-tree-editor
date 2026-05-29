#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const baseDir = __dirname;
const bowerPath = path.join(baseDir, 'bower_components');

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║          Behavior3Editor Build Script                      ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

function run(cmd, args, options = {}) {
  console.log(`\n▶ ${cmd} ${args.join(' ')}`);
  const result = spawnSync(cmd, args, {
    cwd: baseDir,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    ...options
  });

  if (result.error) {
    console.error(`❌ Error: ${result.error.message}`);
    return false;
  }

  if (result.status !== 0) {
    console.error(`❌ Command failed with exit code ${result.status}`);
    return false;
  }

  return true;
}

try {
  // Step 1: Check/install bower components
  console.log('📦 Step 1: Installing Bower components...');
  if (!fs.existsSync(bowerPath)) {
    if (!run('npx', ['bower', 'install', '--allow-root', '--force-latest'])) {
      throw new Error('Bower install failed');
    }
  } else {
    console.log('  ✓ Bower components already installed');
  }

  // Step 2: Build web assets
  console.log('\n🔨 Step 2: Building web assets (gulp build)...');
  if (!run('npx', ['gulp', 'build'])) {
    throw new Error('Gulp build failed');
  }

  // Step 3: Packaging for desktop
  console.log('\n📦 Step 3: Packaging for desktop (gulp dist)...');
  if (!run('npx', ['gulp', 'dist'])) {
    throw new Error('Gulp dist failed');
  }

  console.log('\n✅ Build completed successfully!\n');

  const distPath = path.join(baseDir, 'dist');
  if (fs.existsSync(distPath)) {
    console.log(`📁 Output location: ${distPath}\n`);
    const files = fs.readdirSync(distPath);
    console.log('Generated files:');
    files.forEach(f => {
      const fullPath = path.join(distPath, f);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`   📁 ${f}/`);
        // List subdirectories
        const subfiles = fs.readdirSync(fullPath).slice(0, 5);
        subfiles.forEach(sf => {
          console.log(`      - ${sf}`);
        });
        if (fs.readdirSync(fullPath).length > 5) {
          console.log(`      ... and more`);
        }
      } else {
        const size = (stat.size / 1024 / 1024).toFixed(2);
        console.log(`   📦 ${f} (${size}MB)`);
      }
    });
  }

  console.log('\n✅ You can now find the Windows executable in: dist/behavior3editor-win32-x64/\n');

} catch (error) {
  console.error(`\n❌ Build failed: ${error.message}\n`);
  process.exit(1);
}
