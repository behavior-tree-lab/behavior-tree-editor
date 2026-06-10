---
sidebar_position: 1
slug: /
---

# Behavior3 Editor

Welcome to the documentation for **Behavior3 Editor**, an open source visual tool to create and design Behavior Trees.

![interface preview](/img/preview.png)

## What This Is

Behavior3 Editor provides a general solution to model agents for games and other applications, such as simulations and robotics. It is built on the Behavior3 model, which is based on a formal description of behavior trees.

- **Custom Nodes** — Create your own node types inside one of the four basic categories: *composite*, *decorator*, *action* or *condition*.
- **Individual Node Properties** — Modify node titles, descriptions and custom properties.
- **Manual and Auto Organization** — Drag nodes around, or press `a` to auto-organize the whole tree.
- **Multiple Trees** — Create and manage an unlimited number of trees.
- **Import / Export to JSON** — Export your project, tree or nodes to JSON. Import them back. Use the JSON in your own library or tool.

## About This Fork

This is a maintained fork of the original behavior3editor created by **Renato de Pontes Pereira**. The original project is no longer actively maintained. This fork:

- Merges community pull requests that were pending for years
- Modernizes the build toolchain (Electron, current Node)
- Ships desktop binaries via [GitHub Releases](https://github.com/henrytien/behavior-tree-editor/releases)

See the [Changelog](/docs/changelog) for the full history.
