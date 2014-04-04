'use strict';

angular.module('hackerpins')
    .controller('ViewstoryCtrl', function ($scope, $http, $routeParams, $location) {

        var storyId = $routeParams.id;
        $http.get('http://localhost:8080/hackerpins/api/v1/stories/' + storyId).success(function (data, status, headers, config) {
            $scope.story = data;
        }).error(function (data, status, headers, config) {
            $location.path('/');
        });

    });
