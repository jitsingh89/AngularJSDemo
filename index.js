var app = angular.module('app', [])
.controller('controllerOne', ['$scope', function($scope){
    $scope.yourName="Jitendra";
    $scope.getName = function(){
        return 'Jitendra Singh';
    }
}])
.controller('controllerTwo', ['$scope', ' $controller', function($scope,  $controller){
    $controller('controllerOne', {$scope: $scope})
    $scope.Name=$scope.getName();
}])