'use strict';

angular.module('frontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngStorage'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/:response', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })


  .otherwise({
    redirectTo: '/'
  });
})

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('tokenInterceptor');
}]);


angular.module('frontendApp')
.factory('tokenInterceptor', function(AccessToken) {
  return {
    request: function(config) {
      var token;
      if (config.url.indexOf('//localhost:3000') === 0) {
        token = AccessToken.get();
        if (token) {
          config.headers.authorization = 'Bearer ' + token;
        }
      }
      return config;
    }
  };
});
