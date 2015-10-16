'use strict';

// Declare app level module which depends on views, and components
angular.module('JokesMaker', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/loadjokes',{
        templateUrl: 'views/loadJokes.html',
        controller: 'loadJokesCtrl'
      });
}]);
