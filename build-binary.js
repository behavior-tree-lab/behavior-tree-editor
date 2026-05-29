#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('=== Behavior3Editor Binary Build Script ===\n');

const baseDir = __dirname;
const bowerPath = path.join(baseDir, 'bower_components');
const buildPath = path.join(baseDir, 'build');
const distPath = path.join(baseDir, 'dist');

try {
  console.log('Step 1: Checking bower dependencies...');
  if (!fs.existsSync(bowerPath)) {
    console.log('  Installing bower components...');
    execSync('npx bower install --allow-root', {
      cwd: baseDir,
      stdio: 'inherit',
      shell: true
    });
  } else {
    console.log('  ✓ Bower components already exist');
  }

  console.log('\nStep 2: Building web assets...');
  execSync('npx gulp build', {
    cwd: baseDir,
    stdio: 'inherit',
    shell: true
  });

  console.log('\nStep 3: Packaging for desktop (Electron)...');
  execSync('npx gulp dist', {
    cwd: baseDir,
    stdio: 'inherit',
    shell: true
  });

  console.log('\n✅ Build complete!');
  console.log(`Output location: ${distPath}`);

  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log('\nGenerated files:');
    files.forEach(f => {
      const fullPath = path.join(distPath, f);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`  📁 ${f}/`);
      } else {
        const size = (stat.size / 1024 / 1024).toFixed(1);
        console.log(`  📦 ${f} (${size}MB)`);
      }
    });
  }

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
