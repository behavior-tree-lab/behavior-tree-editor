// Bundles haibot's canonical protocol catalog for offline editor use.
// Usage: node scripts/gen-protocol-catalog-js.js [path/to/protocol.catalog.json]
/* jshint node: true, strict: false */
'use strict';

var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '..');
var sourcePath = process.argv[2] ? path.resolve(process.argv[2]) :
  path.resolve(root, '..', 'haibot', 'protocol.catalog.json');
var assetPath = path.join(root, 'src', 'assets', 'data', 'protocol.catalog.json');
var outPath = path.join(root, 'src', 'app', 'services', 'protocolcatalog.data.js');
var source = fs.readFileSync(sourcePath, 'utf8');
var data = JSON.parse(source);

if (!data.fingerprint || !data.rpcs || !data.messages || !data.enums) {
  throw new Error('invalid protocol catalog: missing fingerprint or collections');
}

var normalized = JSON.stringify(data, null, 2) + '\n';
var body = JSON.stringify(data, null, 2).split('\n').join('\n    ');
var out =
  '// GENERATED FILE - do not edit by hand.\n' +
  '// Source: haibot/protocol.catalog.json\n' +
  '// Regenerate with: node scripts/gen-protocol-catalog-js.js\n' +
  '(function() {\n' +
  "  'use strict';\n\n" +
  '  var catalog = ' + body + ';\n' +
  "  if (typeof window !== 'undefined') {\n" +
  '    window.b3e = window.b3e || {};\n' +
  '    window.b3e.protocolCatalog = catalog;\n' +
  '  }\n\n' +
  '  angular\n' +
  "    .module('app')\n" +
  "    .value('protocolCatalogData', catalog);\n" +
  '})();\n';

fs.writeFileSync(assetPath, normalized);
fs.writeFileSync(outPath, out);
console.log('wrote ' + assetPath);
console.log('wrote ' + outPath);
