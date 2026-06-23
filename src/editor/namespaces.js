/**
 * Editor package.
 * 
 * This package is independent from the application, and represent the graph
 * (canvas element) and logic part of the editor. For organization purposes, 
 * the editor is divided into several namespaces:
 *
 * - **b3e**         : contains all base classes, functions and constants;
 * - **b3e.draw**    : contains functions to draw the block shapes and symbols;
 * - **b3e.editor**  : contains the editor class, editor-related managers and 
 *                     symbols;
 * - **b3e.project** : contains the project class and project-related managers;
 * - **b3e.tree**    : contains the tree class and tree-related managers;
 *
 * As a general rule, an application has a single editor instance; the editor
 * can handle several projects but only a single project can be active in a 
 * given time; a project can have several trees.
 *
 * Each project has a set of nodes (default fixed nodes and custom nodes). A 
 * block is a visual instance of a node.
 *
 * Also notice that, the Editor, Project, Tree, Block, Connection and 
 * SelectionBox are all children of `createjs.DisplayObject` or 
 * `createjs.Container`.
 * 
 */

window.b3e         = window.b3e || {};
window.b3e.draw    = window.b3e.draw || {};
window.b3e.editor  = window.b3e.editor || {};
window.b3e.project = window.b3e.project || {};
window.b3e.tree    = window.b3e.tree || {};

// Optional node schema (the editor-side projection of the Go runtime node
// definitions). The Angular SchemaService publishes it here so the non-Angular
// b3e editor layer (e.g. ImportManager data-pin validation) can read it without
// coupling to Angular. Stays null until set; consumers must degrade gracefully
// when it is null (no pin-type validation, links still reconstructed).
window.b3e.schema  = window.b3e.schema || null;


window.b3e.VERSION = '[BUILD_VERSION]';