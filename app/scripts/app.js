'use strict';

angular.module('hackerpins', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/stories/new', {
                templateUrl: 'views/submitstory.html',
                controller: 'SubmitstoryCtrl'
            })
            .when('/stories/:id', {
                templateUrl: 'views/viewstory.html',
                controller: 'ViewstoryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
