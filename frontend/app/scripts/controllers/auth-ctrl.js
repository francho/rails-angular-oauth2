var app= angular.module('frontendApp');

app.controller('AuthCtrl', function($scope, $location, $rootScope, AccessToken, User) {
  var setLoggedIn;
  $scope.loginUrl = "//localhost:3000/oauth/authorize?response_type=token&client_id=58094af9b3a12715a4a37e74512155306ca11b00320acfb0713f85205c8b20e1&redirect_uri=http://localhost:9000/";
  $scope.logout = function() {
    return User.logout().then(function() {
      AccessToken["delete"]();
      setLoggedIn(false);
      $location.url('/');
    });
  };
  setLoggedIn = function(isLoggedIn) {
    $scope.loggedIn = !!isLoggedIn;
  };
  setLoggedIn(AccessToken.get());
  $rootScope.$on('$stateChangeSuccess', function() {
    setLoggedIn(AccessToken.get());
  });
});
