// TreeValidatorService: pre-export / pre-save validation gate.
//
// Walks an exported tree's nodes and blocks the save when a `required` param is
// missing or an enum value is illegal. This is the contract that prevents the
// runtime panic [B1][D4]: a node config that would panic in the Go runtime
// (e.g. missing maxLoop in Repeater) cannot be written into a .b3.
//
// Permissive on extra unknown properties so old .b3 files still import/export.
// Pure logic over plain objects (no DOM) so it is headless-unit-testable.
(function() {
  'use strict';

  angular
    .module('app')
    .factory('treeValidatorService', treeValidatorService);

  treeValidatorService.$inject = ['schemaService', 'protocolCatalogService'];

  function treeValidatorService(schemaService, protocolCatalogService) {
    var service = {
      validateNode     : validateNode,
      validateNodes    : validateNodes,
      validateTreeData : validateTreeData
    };
    return service;

    // Validates a single exported node object { id, name, title, properties }.
    // Returns an array of { nodeId, nodeName, param, message } issues.
    function validateNode(node) {
      var issues = [];
      if (!node || !node.name) return issues;
      var errors = schemaService.validateNodeParams(node.name, node.properties);
	  if (node.name === 'RpcCall') {
		var rpcErrors = protocolCatalogService.validateProperties(node.properties);
		for (var rpcPath in rpcErrors) {
		  if (rpcErrors.hasOwnProperty(rpcPath)) errors[rpcPath] = rpcErrors[rpcPath];
		}
	  }
      for (var paramName in errors) {
        if (errors.hasOwnProperty(paramName)) {
          issues.push({
            nodeId   : node.id,
            nodeName : node.name,
            title    : node.title || node.name,
            param    : paramName,
            message  : errors[paramName]
          });
        }
      }
      return issues;
    }

    // Validates a map or array of nodes.
    function validateNodes(nodes) {
      var issues = [];
      if (!nodes) return issues;
      if (Object.prototype.toString.call(nodes) === '[object Array]') {
        for (var i = 0; i < nodes.length; i++) {
          issues = issues.concat(validateNode(nodes[i]));
        }
      } else {
        for (var key in nodes) {
          if (nodes.hasOwnProperty(key)) {
            issues = issues.concat(validateNode(nodes[key]));
          }
        }
      }
      return issues;
    }

    // Validates exported tree data. Supports both shapes produced by the
    // ExportManager: the b3 project format ({ trees:[{ nodes:{...} }] }) and a
    // bare { nodes } object. Returns { valid, issues }.
    function validateTreeData(data) {
      var issues = [];
      if (!data) return { valid: true, issues: issues };

      if (data.trees && data.trees.length) {
        for (var t = 0; t < data.trees.length; t++) {
          issues = issues.concat(validateNodes(data.trees[t].nodes));
        }
      } else if (data.nodes) {
        issues = issues.concat(validateNodes(data.nodes));
      }

      return { valid: issues.length === 0, issues: issues };
    }
  }
})();
