b3e.editor.ExportManager = function(editor) {
  "use strict";

  function getBlockChildrenIds(block) {
    var children;
    if (b3e.ConnectionPolicy) {
      children = b3e.ConnectionPolicy.getOrderedChildren(
        block, editor._settings.get('layout'));
    } else {
      // Compatibility for isolated legacy consumers that load ExportManager
      // without the editor utility bundle. Production always takes the shared
      // policy path above.
      var horizontal = editor._settings.get('layout') === 'horizontal';
      children = block._outConnections.map(function(connection, index) {
        return {block: connection._outBlock, index: index};
      });
      children.sort(function(a, b) {
        var difference = horizontal ?
          a.block.y-b.block.y : a.block.x-b.block.x;
        return difference || a.index-b.index;
      });
      children = children.map(function(item) { return item.block; });
    }

    var nodes = [];
    for (var i=0; i<children.length; i++) {
      nodes.push(children[i].id);
    }

    return nodes;
  }

  // Serialize a block's data-pin links to the additive `dataConnections` array.
  // Only the model fields are emitted (never the display object). Entries with
  // a missing source/target/pin are skipped defensively so a half-built wire
  // can never corrupt the exported tree.
  function exportDataConnections(block) {
    var out = [];
    var links = block._dataConnections || [];
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (!link || !link.targetPin || !link.sourceNodeId || !link.sourcePin) {
        continue;
      }
      out.push({
        targetPin    : link.targetPin,
        sourceNodeId : link.sourceNodeId,
        sourcePin    : link.sourcePin
      });
    }
    return out;
  }

  this.projectToData = function() {
    var project = editor.project.get();
    if (!project) return;

    var tree = project.trees.getSelected();

    var data = {
      version      : b3e.VERSION,
      scope        : 'project',
      selectedTree : (tree?tree._id:null),
      trees        : [],
      custom_nodes : this.nodesToData()
    };

    project.trees.each(function(tree) {
      var d = this.treeToData(tree, true);
      d.id = tree._id;
      data.trees.push(d);
    }, this);

    return data;
  };
  
  this.treeToData = function(tree, ignoreNodes) {
    var project = editor.project.get();
    if (!project) return;

    if (!tree) {
      tree = project.trees.getSelected();
    } else {
      tree = project.trees.get(tree);
      if (!tree) return;
    }

    var root = tree.blocks.getRoot();
    var first = getBlockChildrenIds(root);
    var data = {
      version      : b3e.VERSION,
      scope        : 'tree',
      id           : tree._id,
      title        : root.title,
      description  : root.description,
      root         : first[0] || null,
      properties   : root.properties,
      nodes        : {},
      display     : {
        camera_x : tree.x,
        camera_y : tree.y,
        camera_z : tree.scaleX,
        x        : root.x,
        y        : root.y,
      },
    };

    if (!ignoreNodes) {
      data.custom_nodes = this.nodesToData();
    }

    tree.blocks.each(function(block) {
      if (block.category !== 'root') {
        var d ={
          id          : block.id,
          name        : block.name,
          category    : block.category,
          title       : block.title,
          description : block.description,
          properties  : block.properties,
          display     : {x:block.x, y:block.y}
        };

        var children = getBlockChildrenIds(block);
        if (block.category === 'composite') {
          d.children = children;
        } else if (block.category === 'decorator') {
          d.child = children[0];
        }

        // Additive data-pin links (Unreal-style wiring). Emitted only when the
        // node actually has wires so existing trees round-trip byte-identical
        // and the Go runtime (which ignores unknown keys) is unaffected [C5].
        var dataConns = exportDataConnections(block);
        if (dataConns.length > 0) {
          d.dataConnections = dataConns;
        }

        data.nodes[block.id] = d;
      }
    });

    return data;
  };

  this.nodesToData = function() {
    var project = editor.project.get();
    if (!project) return;

    var data = [];
    project.nodes.each(function(node) {
      if (!node.isDefault) {
        data.push({
          version     : b3e.VERSION,
          scope       : 'node',
          name        : node.name,
          category    : node.category,
          title       : node.title,
          description : node.description,
          properties  : node.properties,
        });
      }
    });

    return data;
  };

  this.nodesToJavascript = function() {};

  this._applySettings = function(settings) {};
};
