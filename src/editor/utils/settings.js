/**
 * Default settings of the editor.
 *
 * @constant {Object} DEFAULT_SETTINGS
 * @memberOf b3e
 */

(function () {
  "use strict";

  var DEFAULT_SETTINGS = {
    // CAMERA
    zoom_initial : 1.0,
    zoom_min     : 0.25,
    zoom_max     : 2.0,
    zoom_step    : 0.25,
    
    // EDITOR
    snap_x        : 12,
    snap_y        : 12,
    snap_offset_x : 0,
    snap_offset_y : 0,
    layout        : 'horizontal', // vertical
    max_history   : 100,

    // COLORS
    background_color        : '#171717',
    selection_color         : '#4BB2FD',
    block_border_color      : '#6D6D6D',
    block_symbol_color      : '#333333',
    anchor_background_color : '#EFEFEF',

    connection_color        : '#6D6D6D',
    root_color              : '#FFFFFF',
    decorator_color         : '#FFFFFF',
    composite_color         : '#FFFFFF',
    tree_color              : '#FFFFFF',
    action_color            : '#FFFFFF',
    condition_color         : '#FFFFFF',

    // CONNECTION
    connection_width       : 2,

    // DATA CONNECTION (Unreal-style data pin wiring; distinct from tree edges)
    data_connection_color  : '#20D67B', // green so data wires read apart from grey tree edges
    data_connection_width  : 3,

    // DEBUG (real-time debugging highlight)
    debug_running_color    : '#3B9DFF',
    debug_success_color    : '#27AE60',
    debug_failure_color    : '#E74C3C',
    debug_error_color      : '#9B59B6',
    debug_outline_width    : 5,
    debug_connection_width : 4,

    // ANCHOR
    anchor_border_width    : 2,
    anchor_radius          : 7,
    anchor_offset_x        : 4,
    anchor_offset_y        : 0,
    
    // BLOCK
    block_border_width     : 2,
    block_root_width       : 40,
    block_root_height      : 40,
    block_tree_width       : 160,
    block_tree_height      : 40,
    block_composite_width  : 40,
    block_composite_height : 40,
    block_decorator_width  : 60,
    block_decorator_height : 60,
    block_action_width     : 160,
    block_action_height    : 40,
    block_condition_width  : 160,
    block_condition_height : 40,
  };

  b3e.DEFAULT_SETTINGS = DEFAULT_SETTINGS;
})();
