angular.module('angular_test', [])
.controller('saveController',  ['$scope', function($scope) {
  console.log(1)
  $scope.emails = [];
  $scope.passwrods = [];
  $scope.email = '';
  $scope.passwrod = '';
  $scope.submit = function() {
    console.log('cool');
  }
}]);