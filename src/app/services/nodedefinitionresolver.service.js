// Normalizes project nodes and protocol-catalog RPCs for the Quick Add UI.
(function() {
  'use strict';

  angular
    .module('app')
    .factory('nodeDefinitionResolver', nodeDefinitionResolver);

  nodeDefinitionResolver.$inject = [
    'schemaService',
    'protocolCatalogService'
  ];

  function nodeDefinitionResolver(schemaService, protocolCatalogService) {
    return {
      resolve        : resolve,
      search         : search,
      createSkeleton : createSkeleton
    };

    function resolve(project) {
      var byId = {};
      var excludedTrees = _excludedSubtreeIds(project);

      if (project && project.nodes && project.nodes.each) {
        project.nodes.each(function(node) {
          var definition = _nodeDefinition(node);
          if (definition && definition.category === 'tree' &&
              excludedTrees[definition.name]) return;
          if (!definition || byId.hasOwnProperty(definition.id)) return;
          byId[definition.id] = definition;
        });
      }

      protocolCatalogService.listRPCs().forEach(function(rpc) {
        var definition = _rpcDefinition(rpc);
        if (!byId.hasOwnProperty(definition.id)) {
          byId[definition.id] = definition;
        }
      });

      return Object.keys(byId).map(function(id) {
        return byId[id];
      }).sort(_compareDefinitions);
    }

    function search(definitions, query) {
      var needle = _normalize(query);
      var matches = [];

      (definitions || []).forEach(function(definition) {
        var rank = needle ? _matchRank(definition, needle) : 0;
        if (rank < 0) return;
        matches.push({ definition: definition, rank: rank });
      });

      matches.sort(function(left, right) {
        if (left.rank !== right.rank) return left.rank - right.rank;
        return _compareDefinitions(left.definition, right.definition);
      });

      return matches.map(function(match) { return match.definition; });
    }

    function createSkeleton(definition) {
      if (!definition || !definition.prototype) {
        throw new Error('A normalized node definition is required.');
      }
      return _copy(definition.prototype);
    }

    function _nodeDefinition(node) {
      var source = node && (node.prototype || node);
      if (!source || !source.name) return null;

      var schema = schemaService.getNodeSchema(source.name);
      var category = source.category || (schema && schema.category) || 'action';
      var title = source.title || (schema && schema.title) || source.name;
      var description = source.description ||
        (schema && schema.description) || '';
      var idPrefix = category === 'tree' ? 'tree/' : 'node/';
      if (category === 'root') return null;
      var prototype = {
        name        : source.name,
        title       : title,
        category    : category,
        description : description,
        properties  : _copy(source.properties || source.parameters || {})
      };

      return {
        id             : idPrefix + source.name,
        kind           : 'node',
        name           : source.name,
        title          : title,
        category       : category,
        description    : description,
        enabled        : true,
        disabledReason : '',
        prototype      : prototype,
        schema         : schema || null,
        searchTerms    : _uniqueTerms([
          title,
          source.name,
          category,
          description
        ])
      };
    }

    function _rpcDefinition(rpc) {
      var supported = rpc.callSupport &&
        rpc.callSupport.status === 'supported';
      var disabledReason = supported ? '' :
        _rpcDisabledReason(rpc);
      var description = rpc.requestType + ' → ' + rpc.responseType;
      var properties = {
        rpc                : rpc.name,
        catalogFingerprint : protocolCatalogService.getFingerprint(),
        request            : {},
        assertions         : [],
        extract            : []
      };

      return {
        id             : 'rpc/' + rpc.name,
        kind           : 'rpc',
        name           : 'RpcCall',
        title          : rpc.name,
        category       : 'action',
        description    : description,
        enabled        : supported,
        disabledReason : disabledReason,
        connection     : rpc.connection,
        requestType    : rpc.requestType,
        responseType   : rpc.responseType,
        prototype      : {
          name        : 'RpcCall',
          title       : rpc.name,
          category    : 'action',
          description : description,
          properties  : properties
        },
        searchTerms    : _uniqueTerms([
          rpc.name,
          'RpcCall',
          'rpc',
          'action',
          rpc.connection,
          rpc.requestType,
          rpc.responseType,
          description
        ])
      };
    }

    function _matchRank(definition, needle) {
      var terms = definition.searchTerms || [];
      var best = -1;

      if (_normalize(definition.title) === needle) return 0;
      if (_normalize(definition.name) === needle) return 1;

      for (var i = 0; i < terms.length; i++) {
        var term = _normalize(terms[i]);
        var rank = -1;
        if (term.indexOf(needle) === 0) rank = 2;
        else if (term.indexOf(needle) >= 0) rank = 3;

        if (rank >= 0 && (best < 0 || rank < best)) best = rank;
      }
      return best;
    }

    function _excludedSubtreeIds(project) {
      var excluded = {};
      var graph = {};
      var trees = project && project.trees;
      if (!trees || !trees.each || !trees.getSelected) return excluded;

      var selected = trees.getSelected();
      var selectedId = selected && (selected._id || selected.id);
      if (!selectedId) return excluded;

      trees.each(function(tree) {
        var treeId = tree && (tree._id || tree.id);
        if (!treeId) return;
        var blocks = tree.blocks && tree.blocks.getAll ?
          tree.blocks.getAll() : null;
        graph[treeId] = blocks ? [] : null;
        if (!blocks) return;
        blocks.forEach(function(block) {
          if (block && block.category === 'tree' && block.name) {
            graph[treeId].push(block.name);
          }
        });
      });

      Object.keys(graph).forEach(function(treeId) {
        if (treeId === selectedId ||
            _treeIsUnsafe(treeId, selectedId, graph, {}, {})) {
          excluded[treeId] = true;
        }
      });
      excluded[selectedId] = true;
      return excluded;
    }

    function _treeIsUnsafe(treeId, targetId, graph, visiting, checked) {
      if (treeId === targetId) return true;
      if (!graph.hasOwnProperty(treeId) || !graph[treeId]) return true;
      if (visiting[treeId]) return true;
      if (checked.hasOwnProperty(treeId)) return checked[treeId];
      visiting[treeId] = true;

      var children = graph[treeId];
      for (var i = 0; i < children.length; i++) {
        if (_treeIsUnsafe(children[i], targetId, graph, visiting, checked)) {
          delete visiting[treeId];
          checked[treeId] = true;
          return true;
        }
      }
      delete visiting[treeId];
      checked[treeId] = false;
      return false;
    }

    function _rpcDisabledReason(rpc) {
      var fields = protocolCatalogService.getRequestFields(rpc.name) || [];
      var unsupported = null;
      for (var i = 0; i < fields.length; i++) {
        if (!fields[i].support || fields[i].support.status !== 'supported') {
          unsupported = fields[i];
          break;
        }
      }

      var supportMessage = protocolCatalogService.getSupportMessage(rpc.name);
      var cause = supportMessage;
      if (unsupported && unsupported.support &&
          unsupported.support.reasons && unsupported.support.reasons.length) {
        cause = unsupported.support.reasons.join(', ');
      }

      var detail = unsupported ?
        'request.' + unsupported.name + ' is ' + unsupported.kind +
          ' (' + cause + ')' : cause;
      var nextAction = rpc.handwrittenNode ?
        'Use the handwritten ' + rpc.handwrittenNode + ' node instead.' :
        'The current editor cannot author this request shape; choose a ' +
          'supported RPC.';
      return rpc.name + ' cannot be authored in Quick Add: ' + detail +
        '. ' + nextAction;
    }

    function _compareDefinitions(left, right) {
      var title = _compareText(_normalize(left.title), _normalize(right.title));
      if (title !== 0) return title;
      return _compareText(left.id, right.id);
    }

    function _compareText(left, right) {
      if (left < right) return -1;
      if (left > right) return 1;
      return 0;
    }

    function _normalize(value) {
      return String(value || '').toLowerCase().trim();
    }

    function _uniqueTerms(terms) {
      var seen = {};
      var result = [];
      terms.forEach(function(term) {
        var text = String(term || '').trim();
        var key = _normalize(text);
        if (!key || seen.hasOwnProperty(key)) return;
        seen[key] = true;
        result.push(text);
      });
      return result;
    }

    function _copy(value) {
      var result;
      var key;

      if (Object.prototype.toString.call(value) === '[object Array]') {
        return value.map(function(item) { return _copy(item); });
      }
      if (!value || Object.prototype.toString.call(value) !== '[object Object]') {
        return value;
      }

      result = {};
      for (key in value) {
        if (value.hasOwnProperty(key)) result[key] = _copy(value[key]);
      }
      return result;
    }
  }
})();
