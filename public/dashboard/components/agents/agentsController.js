app.controller('agentsController', function ($scope, $rootScope, $http, $window) {
  var url = window.location.origin + "/agents"
  
  $http.get(url).then(function (response) {
    $scope.agents = response.data
  }).catch(function (err) {
    console.log(err)
  })

  // $http.get("https://specialthankmd.cf/data/Jalel_2052937396").then(function (response) {
  //   $scope.images = response.data
  //   console.log($scope.images)
  // }).catch(function (err) {
  //   console.log(err)
  // })

  // $scope.openInNewWindow = function(url){
  //   $window.open(url);
  // }
})
