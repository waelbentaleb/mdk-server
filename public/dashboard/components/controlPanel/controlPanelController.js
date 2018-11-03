app.controller('controlPanelController', function ($scope, $rootScope, $http, $routeParams) {
  $scope.agentId = $routeParams.agentId
  
  var url = window.location.origin + '/agent/' + $scope.agentId + '/lastUpdate'
  
  $http.get(url).then(function (response) {
    $scope.lastUpdate = response.data
  }).catch(function (err) {
    console.log(err)
  })

})
