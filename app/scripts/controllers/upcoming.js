'use strict';

angular.module('hackerpins')
    .controller('UpcomingCtrl', function ($scope, $http) {
        $http.get('http://localhost:8080/hackerpins/api/v1/stories').success(function (data, status, headers, config) {
            $scope.stories = data;
        }).error(function (data, status, headers, config) {
            alert(status);
        });
    });
