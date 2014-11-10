'use strict';

angular.module('frontendApp')
  .directive('loginLink', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var railsHost = 'localhost:3000';
        var ngHost = 'localhost:9000/';
        var applicationId = '58094af9b3a12715a4a37e74512155306ca11b00320acfb0713f85205c8b20e1';

        var loginUrl = '//' + railsHost +'/oauth/authorize?response_type=token&client_id='+ applicationId +'&redirect_uri=http://'+ ngHost;
        element.append('<a href="'+loginUrl+'">Login with Oauth</a>');
      }
    };
  });
