// Visible Quick Add state machine and its single-instantiation latch.
(function() {
  'use strict';

  angular
    .module('app')
    .factory('quickAddService', quickAddService);

  quickAddService.$inject = [
    'nodeDefinitionResolver',
    'nodeInstantiationService',
    'notificationService'
  ];

  function quickAddService(nodeDefinitionResolver, nodeInstantiationService,
                           notificationService) {
    var definitions = [];
    var context = null;
    var pendingDefinition = null;
    var state = {
      open        : false,
      status      : 'closed',
      query       : '',
      results     : [],
      activeIndex : -1,
      message     : '',
      creating    : false,
      choices     : [],
      placementPrompt: ''
    };

    return {
      state           : state,
      open            : open,
      close           : close,
      setQuery        : setQuery,
      moveActive      : moveActive,
      activate        : activate,
      choosePlacement : choosePlacement
    };

    function open(nextContext) {
      if (state.creating) return state;

      context = nextContext || null;
      pendingDefinition = null;
      definitions = _withoutRoots(nodeDefinitionResolver.resolve(
        context && context.project));
      state.open = true;
      state.query = '';
      state.message = '';
      state.creating = false;
      state.choices = [];
      state.placementPrompt = '';
      _refreshResults();
      return state;
    }

    function close() {
      var invoker = context && context.invoker;
      state.open = false;
      state.status = 'closed';
      state.creating = false;
      state.choices = [];
      state.placementPrompt = '';
      pendingDefinition = null;
      context = null;
      if (invoker && invoker.focus) invoker.focus();
      return state;
    }

    function setQuery(query) {
      if (!state.open || state.creating) return state;
      state.query = String(query || '');
      state.message = '';
      state.choices = [];
      state.placementPrompt = '';
      pendingDefinition = null;
      _refreshResults();
      return state;
    }

    function moveActive(offset) {
      if (state.status !== 'ready' || state.results.length === 0) {
        return state.activeIndex;
      }

      var length = state.results.length;
      var movement = Number(offset) || 0;
      state.activeIndex = (state.activeIndex + movement) % length;
      if (state.activeIndex < 0) state.activeIndex += length;
      return state.activeIndex;
    }

    function activate(definition) {
      if (!state.open || state.creating || state.status !== 'ready') {
        return null;
      }

      definition = _definitionFrom(definition);
      if (!definition) return null;
      if (definition.enabled === false) {
        state.message = definition.disabledReason ||
          'This definition is unsupported.';
        return {status: 'unsupported', reason: state.message};
      }

      pendingDefinition = definition;
      return _instantiate(definition, context);
    }

    function choosePlacement(choice) {
      var placement = choice && choice.id ? choice.id : choice;
      if (!state.open || state.creating ||
          state.status !== 'placement-required' || !pendingDefinition) {
        return null;
      }
      if (placement === 'cancel') {
        close();
        return {status: 'cancelled'};
      }
      if (placement !== 'append' && placement !== 'unconnected') return null;

      var placementContext = _copyContext(context);
      placementContext.placement = placement;
      return _instantiate(pendingDefinition, placementContext);
    }

    function _instantiate(definition, callContext) {
      state.status = 'creating';
      state.creating = true;
      state.message = '';

      var result;
      try {
        result = nodeInstantiationService.instantiate(definition, callContext);
      } catch (error) {
        state.creating = false;
        state.status = 'error';
        state.message = error && error.message ? error.message : String(error);
        return {status: 'error', error: error, reason: state.message};
      }

      state.creating = false;
      result = result || {status: 'error', reason: 'Creation returned no result.'};
      if (result.status === 'created') {
        if (result.warning) {
          notificationService.warning(
            'Node created outside execution flow', result.warning);
        }
        close();
      } else if (result.status === 'placement-required') {
        state.status = 'placement-required';
        state.open = true;
        state.choices = result.choices || [];
        state.placementPrompt = _placementPrompt(result);
        state.message = '';
      } else {
        state.status = result.status || 'error';
        state.open = true;
        state.message = result.reason || result.message || 'Creation failed.';
      }
      return result;
    }

    function _refreshResults() {
      state.results = _withoutRoots(
        nodeDefinitionResolver.search(definitions, state.query));
      state.activeIndex = state.results.length > 0 ? 0 : -1;
      state.status = state.results.length > 0 ? 'ready' : 'empty';
    }

    function _withoutRoots(items) {
      return (items || []).filter(function(definition) {
        return definition && definition.category !== 'root';
      });
    }

    function _definitionFrom(value) {
      if (typeof value === 'number') return state.results[value] || null;
      if (value && value.id) return value;
      return state.results[state.activeIndex] || null;
    }

    function _copyContext(source) {
      var copy = {};
      Object.keys(source || {}).forEach(function(key) {
        copy[key] = source[key];
      });
      return copy;
    }

    function _placementPrompt(result) {
      var choices = result.choices || [];
      var canAppend = choices.some(function(choice) {
        return choice && choice.id === 'append';
      });
      if (canAppend) {
        return 'This parent already has ordered steps. ' +
          'Choose placement explicitly.';
      }
      if (result.reason === 'parent-capacity') {
        return 'This parent already has its maximum number of children. ' +
          'Create the node unconnected or cancel.';
      }
      if (result.reason === 'parent-category') {
        return 'This node type cannot have behavior-tree children. ' +
          'Create the node unconnected or cancel.';
      }
      return 'The node cannot be connected at this location. ' +
        'Create it unconnected or cancel.';
    }
  }
})();
