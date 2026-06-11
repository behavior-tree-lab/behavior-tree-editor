# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-06-11

### Changed
- Renamed the product to **Behavior Tree Editor** across all user-facing text (editor UI, README, website, translations). Internal identifiers and the Behavior3 data format are unchanged.

### Added
- Multi-platform release workflow building Windows x64, Linux x64, and macOS (x64 + arm64) artifacts.

## [1.0.0] - 2026-06-11

### Added
- **Documentation site** - bilingual (English / 简体中文) Docusaurus site published to GitHub Pages at https://henrytien.github.io/behavior-tree-editor/, with automated CI/CD deployment.
- Links to the companion Go runtime [henrytien/behavior-tree](https://github.com/henrytien/behavior-tree).

### Changed
- First stable 1.0 release of this maintained fork.
- Updated project links and metadata from the unmaintained upstream to this fork.

## [0.3.1] - 2026-05-30

### Fixed
- **Fix tree import errors** (PR #31) - samuelben
  - Fixed tree import when project doesn't have tree yet
  - Add trees before importing tree data
  - Preserve block properties correctly
  - Handle nested tree imports properly
  
- **Fix preload bug in Desktop version** (PR #39) - nickytao
  - Fixes preload functionality for Electron desktop application
  - Resolves loading state issues in desktop environment

- **Fix keytable directive** (PR #40) - tdkr
  - Improves keytable directive functionality

### Added
- **Camera movement enhancement** (PR #34) - finscn
  - Support Shift+MouseLeftButton to move camera
  - Improves usability for camera panning

- **Logging functionality**
  - Added Logger utility for debugging
  - Logs tree import process with detailed information
  - Helps diagnose issues in tree loading and block creation

### Improvements
- Better error handling in import functionality
- Improved compatibility with complex tree structures
- Added debug logging for better troubleshooting

## [0.3.0] - Previous Release

- Initial stable release

---

## Contributing

This version merges 4 community pull requests that were pending for 5+ years:
- Thanks to samuelben for the tree import fixes
- Thanks to nickytao for the desktop preload fixes
- Thanks to finscn for the camera control enhancement  
- Thanks to tdkr for the keytable directive improvements

Contributions are welcome! Please submit issues and pull requests.
