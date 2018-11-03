app.controller('screenshotReportController', function ($scope, $rootScope, $http, $routeParams, $window) {

  var url = window.location.origin + '/data/' + $routeParams.agentId + '/image'

  $http.get(url).then(function (response) {
    $scope.images = response.data
  }).catch(function (err) {
    console.log(err)
  })

  $scope.openInNewWindow = function (url) {
    $window.open(url);
  }

  $scope.loadMore = function () {
    var lastDataId = $scope.images[$scope.images.length - 1]._id

    $http.get(url + '/' + lastDataId).then(function (response) {

      response.data.forEach(it => {
        $scope.images.push(it)
      })
      
    }).catch(function (err) {
      console.log(err)
    })
  }
})
