'use strict';

/**
 * @ngdoc function
 * @name vegaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vegaApp
 */
angular.module('vegaApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    
    $scope.myData = [
	    {
	        'firstName': 'Cox',
	        'lastName': 'Carney',
	        'company': 'Enormo',
	        'employed': true
	    },
	    {
	        'firstName': 'Lorraine',
	        'lastName': 'Wise',
	        'company': 'Comveyer',
	        'employed': false
	    },
	    {
	        'firstName': 'Nancy',
	        'lastName': 'Waters',
	        'company': 'Fuelton',
	        'employed': false
	    }
	];

  }]);
