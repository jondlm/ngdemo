'use strict';

/* Filters */

angular.module('filters', []).
  filter('upper', function(version) {
    return function(text) {
      return String(text).toUpperCase();
    };
  });
