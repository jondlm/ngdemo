'use strict';


// Declare app level module which depends on filters, and services
angular.module('cisDemo', ['filters', 'myApp.services', 'myApp.controllers', '$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact', {templateUrl: 'partials/contact-list.html', controller: 'main'});
    $routeProvider.when('/other', {templateUrl: 'partials/other.html', controller: 'main'});
    $routeProvider.otherwise({redirectTo: '/contact'});
  }]);

