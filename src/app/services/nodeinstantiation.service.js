// Unified transactional path for user-authored node creation.
(function() {
  'use strict';

  angular
    .module('app')
    .factory('nodeInstantiationService', nodeInstantiationService);

  nodeInstantiationService.$inject = ['nodeDefinitionResolver'];

  function nodeInstantiationService(nodeDefinitionResolver) {
    return {
      instantiate: instantiate
    };

    function instantiate(definition, context) {
      context = context || {};

      if (!definition || !definition.prototype) {
        throw new Error('A normalized node definition is required.');
      }
      if (definition.enabled === false) {
        return {
          status: 'unsupported',
          reason: definition.disabledReason || 'This definition is unsupported.'
        };
      }

      var project = context.project;
      var tree = context.tree;
      if (!project || !project.history || !tree || !tree.blocks ||
          !tree.connections || !tree.selection) {
        throw new Error('Project and tree context are required.');
      }

      var parent = context.parent || null;
      var placement = context.placement || null;
      var layout = context.layout || _setting(project, 'layout') || 'horizontal';
      var gridSize = Number(context.gridSize ||
        _setting(project, layout === 'horizontal' ? 'snap_y' : 'snap_x')) || 1;
      var position = _position(context.position);
      var skeleton = nodeDefinitionResolver.createSkeleton(definition);
      var nodeSource = skeleton;
      if (definition.kind !== 'rpc' && project.nodes && project.nodes.get) {
        nodeSource = project.nodes.get(skeleton.name) || skeleton;
      }
      var candidate = _candidate(skeleton, project);
      var policyResult = parent ?
        b3e.ConnectionPolicy.check(parent, candidate) : null;
      var orderedChildren = parent ?
        b3e.ConnectionPolicy.getOrderedChildren(parent, layout) : [];

      if (parent && !placement &&
          (orderedChildren.length > 0 || !policyResult.allowed)) {
        return _placementRequired(parent, orderedChildren, policyResult);
      }
      if (placement && placement !== 'append' && placement !== 'unconnected') {
        throw new Error('Unknown node placement: ' + placement);
      }
      if (placement === 'append') {
        if (!parent || !policyResult.allowed) {
          return _placementRequired(parent, orderedChildren, policyResult);
        }
        position = b3e.ConnectionPolicy.getAppendPosition(
          parent, layout, gridSize, candidate);
      } else if (parent && orderedChildren.length === 0 &&
                 policyResult.allowed) {
        position = b3e.ConnectionPolicy.getAppendPosition(
          parent, layout, gridSize, candidate);
      }

      var connect = !!parent && placement !== 'unconnected';
      if (connect && !policyResult.allowed) {
        return _placementRequired(parent, orderedChildren, policyResult);
      }

      var block = null;
      var connection = null;
      project.history.transaction(function() {
        block = tree.blocks.add(nodeSource, position.x, position.y);

        if (connect) {
          var finalPolicy = b3e.ConnectionPolicy.check(parent, block);
          if (!finalPolicy.allowed) {
            throw new Error('Connection rejected: ' + finalPolicy.reason);
          }
          connection = tree.connections.add(parent, block);
        }

        tree.selection.deselectAll();
        tree.selection.select(block);
      });

      return {
        status: 'created',
        block: block,
        connection: connection,
        connected: !!connection,
        warning: connection ? '' :
          'Not in execution flow; this node will not run'
      };
    }

    function _setting(project, name) {
      var editor = project && project._editor;
      if (!editor || !editor._settings || !editor._settings.get) return undefined;
      return editor._settings.get(name);
    }

    function _position(position) {
      position = position || {};
      return {
        x: Number(position.x) || 0,
        y: Number(position.y) || 0
      };
    }

    function _candidate(skeleton, project) {
      var category = skeleton.category || 'action';
      return {
        name: skeleton.name,
        category: category,
        _width: _blockDimension(project, category, 'width', 160),
        _height: _blockDimension(project, category, 'height', 40),
        _inConnection: null,
        _outConnections: []
      };
    }

    function _blockDimension(project, category, axis, fallback) {
      var name = 'block_' + category + '_' + axis;
      var value = Number(_setting(project, name));
      if ((!value || value <= 0) && b3e.DEFAULT_SETTINGS) {
        value = Number(b3e.DEFAULT_SETTINGS[name]);
      }
      return value > 0 ? value : fallback;
    }

    function _placementRequired(parent, children, policyResult) {
      var choices = [];
      if (parent && policyResult && policyResult.allowed) {
        choices.push({
          id: 'append',
          label: 'Append as step ' + (children.length + 1)
        });
      }
      choices.push({
        id: 'unconnected',
        label: 'Create unconnected',
        warning: 'Not in execution flow; this node will not run'
      });
      choices.push({id: 'cancel', label: 'Cancel'});

      return {
        status: 'placement-required',
        parent: parent || null,
        reason: policyResult && policyResult.reason,
        choices: choices
      };
    }
  }
})();
