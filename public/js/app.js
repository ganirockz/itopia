angular.module('itopia', [ ])
.controller('appctrl', ['$scope', '$http', function ($scope, $http) {
  //console.log('hello world!');
  var post1 = {
    title : "Give away of bycycle",
    description : "in very good condition, suitable for kids by the age of 6 to 10",
    lat : 12.971599,
    long : 77.594563,
    ts :  moment()
  };

  var post2 = {
    title : "Give away of furniture",
    description : "in very good condition, suitable for kids by the age of 6 to 10",
    lat : 12.971599,
    long : 77.594563,
    ts :  moment()
  };

  $scope.posts = [post1, post2];







}]);
;
