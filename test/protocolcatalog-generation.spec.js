// Headless tests for protocol catalog bundle generation and drift checking.
/* jshint node: true, strict: false */
'use strict';

var assert = require('assert');
var childProcess = require('child_process');
var fs = require('fs');
var os = require('os');
var path = require('path');

var ROOT = path.resolve(__dirname, '..');
var temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'protocolcatalog-generation-'));
var fixtureRoot = path.join(temporaryRoot, 'editor');
var scriptPath = path.join(fixtureRoot, 'scripts', 'gen-protocol-catalog-js.js');
var sourcePath = path.join(temporaryRoot, 'protocol.catalog.json');
var assetPath = path.join(fixtureRoot, 'src', 'assets', 'data', 'protocol.catalog.json');
var bundlePath = path.join(fixtureRoot, 'src', 'app', 'services', 'protocolcatalog.data.js');

function run(args) {
  return childProcess.spawnSync(process.execPath, [scriptPath].concat(args), {
    encoding: 'utf8'
  });
}

function ok(message) {
  console.log('ok: ' + message);
}

try {
  fs.mkdirSync(path.dirname(scriptPath), { recursive: true });
  fs.mkdirSync(path.dirname(assetPath), { recursive: true });
  fs.mkdirSync(path.dirname(bundlePath), { recursive: true });
  fs.copyFileSync(path.join(ROOT, 'scripts', 'gen-protocol-catalog-js.js'), scriptPath);
  fs.writeFileSync(sourcePath, JSON.stringify({
    catalogVersion: 1,
    generatorVersion: 'test/v1',
    fingerprint: 'sha256:test',
    protobufPackage: 'testpb',
    rpcs: [],
    protocols: [],
    messages: [],
    enums: []
  }));

  var generated = run([sourcePath]);
  assert.strictEqual(generated.status, 0, generated.stderr);
  ok('normal mode generates both editor catalog artifacts');

  var expectedAsset = fs.readFileSync(assetPath, 'utf8');
  var expectedBundle = fs.readFileSync(bundlePath, 'utf8');
  var oldTime = new Date(1000);
  fs.utimesSync(assetPath, oldTime, oldTime);
  fs.utimesSync(bundlePath, oldTime, oldTime);
  var matchingAssetTime = fs.statSync(assetPath).mtimeMs;
  var matchingBundleTime = fs.statSync(bundlePath).mtimeMs;
  var checked = run(['--check', sourcePath]);
  assert.strictEqual(checked.status, 0, checked.stderr);
  assert.strictEqual(fs.readFileSync(assetPath, 'utf8'), expectedAsset);
  assert.strictEqual(fs.readFileSync(bundlePath, 'utf8'), expectedBundle);
  assert.strictEqual(fs.statSync(assetPath).mtimeMs, matchingAssetTime);
  assert.strictEqual(fs.statSync(bundlePath).mtimeMs, matchingBundleTime);
  ok('--check succeeds without rewriting matching artifacts');

  fs.writeFileSync(assetPath, 'drifted asset\n');
  var driftedAssetTime = fs.statSync(assetPath).mtimeMs;
  var untouchedBundleTime = fs.statSync(bundlePath).mtimeMs;
  var drifted = run(['--check', sourcePath]);
  assert.notStrictEqual(drifted.status, 0, 'drift check unexpectedly succeeded');
  assert.ok(drifted.stderr.indexOf(assetPath) !== -1,
    'drift error must identify the stale asset: ' + drifted.stderr);
  assert.strictEqual(fs.readFileSync(assetPath, 'utf8'), 'drifted asset\n');
  assert.strictEqual(fs.readFileSync(bundlePath, 'utf8'), expectedBundle);
  assert.strictEqual(fs.statSync(assetPath).mtimeMs, driftedAssetTime);
  assert.strictEqual(fs.statSync(bundlePath).mtimeMs, untouchedBundleTime);
  ok('--check reports drift and leaves every target untouched');
} finally {
  fs.rmSync(temporaryRoot, { recursive: true, force: true });
}

console.log('\nAll protocol catalog generation tests passed.');
