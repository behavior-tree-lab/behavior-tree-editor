---
sidebar_position: 2
---

# Getting Started

There are two ways to use Behavior Tree Editor: download a prebuilt desktop app, or build it from source.

## Download the Desktop App

Prebuilt binaries are published on the [Releases page](https://github.com/henrytien/behavior-tree-editor/releases). Download the package for your platform, unzip it, and run the executable. No installation required.

## Build from Source

### Requirements

- [Node.js](https://nodejs.org) 18+
- [Bower](https://bower.io) (`npm install -g bower`)

### Install dependencies

```bash
git clone https://github.com/henrytien/behavior-tree-editor.git
cd behavior-tree-editor

npm install
bower install
```

`npm install` pulls the build tooling and Electron; `bower install` pulls the CSS/JS vendor libraries.

### Run in the browser (development)

Builds and live-reloads on each change, served at `http://127.0.0.1:8000`:

```bash
gulp serve
```

### Run the desktop version

```bash
gulp dev      # build the app bundle
gulp dist     # build + package the desktop app for distribution
```

`gulp dist` produces a packaged Electron app under the build/output directory.

## Next Steps

- Learn the [core concepts](./guide/concepts) of behavior trees
- Explore the available [node types](./guide/node-types)
- Create your own [custom nodes](./guide/custom-nodes)
- Understand [import / export](./guide/import-export) and the JSON format
