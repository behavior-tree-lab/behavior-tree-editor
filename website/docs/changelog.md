---
sidebar_position: 99
---

# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and the project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-06-11

### Added
- **Documentation site** — bilingual (English / 简体中文) site published to GitHub Pages, with automated CI/CD deployment.
- Links to the companion Go runtime [henrytien/behavior-tree](https://github.com/henrytien/behavior-tree).

### Changed
- First stable 1.0 release of this maintained fork.
- Updated project links and metadata from the unmaintained upstream to this fork.

## [0.3.1] — 2026-05-30

### Fixed
- **Fix tree import errors** (PR #31, samuelben) — import works when a project has no tree yet, trees are added before importing tree data, block properties are preserved, and nested tree imports are handled correctly.
- **Fix preload bug in the Desktop version** (PR #39, nickytao) — resolves Electron preload and loading-state issues.
- **Fix keytable directive** (PR #40, tdkr) — improves keytable directive behavior.

### Added
- **Camera movement enhancement** (PR #34, finscn) — Shift + left mouse button to pan the camera.
- **Logging utility** — a Logger for debugging that records the tree import process to help diagnose loading and block-creation issues.

### Improvements
- Better error handling in import.
- Improved compatibility with complex tree structures.
- Debug logging for easier troubleshooting.

## [0.3.0]

- Initial stable release of this maintained fork.

---

This release merges four community pull requests that had been pending for 5+ years.
Thanks to **samuelben**, **nickytao**, **finscn**, and **tdkr**.

Contributions are welcome — please submit [issues and pull requests](https://github.com/henrytien/behavior-tree-editor/issues).
