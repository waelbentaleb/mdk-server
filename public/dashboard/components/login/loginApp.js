var app = angular.module("loginApp", []);

app.controller('loginController', function ($scope, $http) {
  var url = window.location.origin + "/signin"

  $scope.login = function () {

    $http.post(url, { username: $scope.username, password: $scope.password }).then(function (response) {
      if (response.status == 200) {
        window.location.href = '/dashboard'
      } else {
        $scope.wrongPassword = true
      }
    }).catch(function (err) {
      console.log(err)
      if (err.status == 401)
        $scope.wrongPassword = true
    })
  }
})