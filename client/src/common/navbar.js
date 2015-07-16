/*jshint camelcase: false */
(function() {
  'use strict';

  //function navbarCtrl($scope, $state, PrincipalService) {
  function navbarCtrl($scope, $state) {
/*
      $scope.isAuthenticated = PrincipalService.isAuthenticated();
      $scope.username = PrincipalService.getUsername();

      $scope.$on('signinchange', function() {
        $scope.isAuthenticated = PrincipalService.isAuthenticated();
        $scope.username = PrincipalService.getUsername();
        $scope.identity = PrincipalService.getIdentity();
      });

      $scope.logoclick = function() {
        if ($scope.isAuthenticated) {
          $state.go('schedule');
        } else {
          $state.go('splash');
        }
      };

      $scope.signout = function() {
        PrincipalService.authenticate(null);
        $state.go('signout');
      };
*/
    }
  angular.module('common.navbar', [])
    .controller('NavbarCtrl', navbarCtrl);
})();
