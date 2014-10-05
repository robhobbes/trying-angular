'use strict';

var testApp = angular.module('testApp', [
  'ngRoute',
  'ui.bootstrap',

  'testControllers',
  'testServices'
]);

testApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'UserListCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);
