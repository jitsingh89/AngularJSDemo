var app = angular.module('myAppModule', [])
.controller('controllerOne', ['$scope', 'Hello', function($scope, Hello){
   console.log(Hello.helloWorld() + ' controller one');
   $scope.Name=Hello.helloWorld();
}])
.controller('controllerTwo', ['$scope', 'Hello', function($scope, Hello){
   console.log(Hello.helloWorld() + ' controller two');
   $scope.Name=Hello.helloWorld();
}])
.factory('Hello', [function() {
   var data = {
      'helloWorld': function() {
          return 'Hello World';
       }
   }

   return data;
}]);