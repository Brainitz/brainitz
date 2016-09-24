var app = angular.module('Brainitz', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/portal.html',
        controller: 'LoginController'
      })
      .otherwise('/', {
        templateUrl: 'partials/portal.html',
        controller: 'LoginController'

      })
});
