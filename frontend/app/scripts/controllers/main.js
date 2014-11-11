'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, AccessToken) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.response) {
      var token = $routeParams.response.match(/^access_token=(.*?)&/)[1];
      console.log('access_token received')
      AccessToken.set(token);
      console.log(token);
    }

  });
