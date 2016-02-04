'use strict';

/**
 * @ngdoc overview
 * @name vegaApp
 * @description
 * # vegaApp
 *
 * Main module of the application.
 */
angular
  .module('vegaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/unrealized.html',
        controller: 'MainCtrl',
        controllerAs: 'unrealized'
      })
      .when('/realized', {
        templateUrl: 'views/realized.html',
        controller: 'MainCtrl',
        controllerAs: 'realized'
      })
      .otherwise({
        redirectTo: '/'
      });
  });