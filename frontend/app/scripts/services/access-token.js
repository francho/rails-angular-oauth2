'use strict';

angular.module('frontendApp')
  .service('AccessToken', function AccessToken($localStorage) {
    this.get = function() {
      return $localStorage.token;
    };

    this.set = function(token) {
      $localStorage.token = token;
    };

    this.delete = function() {
      delete $localStorage.token; // NOTE: Also possible: $localStorage.reset();
    };
  });
