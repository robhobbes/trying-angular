'use strict';

var testControllers = angular.module('testControllers', []);

testControllers.controller('UserListCtrl', ['$scope', 'User',
  function ($scope, User) {
    $scope.users = User.query();
    $scope.orderProp = 'username';
  }]);

testControllers.controller('AddUserCtrl',

  function ($scope, $modal) {

    $scope.openUserModal = function () {

      var modalInstance = $modal.open({
        templateUrl: 'user-modal.html',
        controller: 'ModalInstanceCtrl'
      });

      modalInstance.result.then(function (user) {
        $scope.users.push(user);
      });

    };

  });

testControllers.controller('ModalInstanceCtrl',
  function ($scope, $modalInstance) {

    $scope.submit = function () {
      $modalInstance.close({
        username: addUserForm.username.value,
        email: addUserForm.email.value,
        date: new Date().getTime()
      });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });