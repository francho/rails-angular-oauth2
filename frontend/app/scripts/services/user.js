var app = angular.module('frontendApp');

app.service('User', function($http) {
  var base;
  base = "//localhost:3000";
  return {
    all: function() {
      return $http.get(base + '/');
    },
    me: function() {
      return $http.get(base + '/me');
    },
    logout: function() {
      return $http.delete(base + '/logout', {withCredentials: true});
    }
  };
});
