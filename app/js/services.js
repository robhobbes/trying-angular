'use strict';

var testServices = angular.module('testServices', ['ngResource']);

testServices.factory('User', ['$resource',
  function ($resource) {
    return $resource('users/:username.json', {}, {
      query: {method: 'GET', params: {username: 'users'}, isArray: true}
    });
  }]);