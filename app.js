var app = angular.module('Brainitz', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/portal.html',
        controller: 'LoginController'
      })
      .when('/teacher', {
        templateUrl: 'partials/teacher.html',
        controller: 'TeacherController'

      })
      .otherwise('/', {
        templateUrl: 'partials/portal.html',
        controller: 'LoginController'

      })
});
