var ngTodo = angular.module('ngTodo', ['ngRoute','SampleDirectives', 'SampleFilters', 'ngControllers'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.
            when('/', {
                templateUrl: '/templates/todo.html',
                controller: 'ngTodoCtrl'
            });

          $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
          });
    }]);

var ngControllers = angular.module('ngControllers', []);