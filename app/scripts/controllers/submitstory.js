'use strict';

angular.module('hackerpins')
    .controller('SubmitstoryCtrl', function ($scope, $http, $location) {

        $scope.submitStory = function () {
            $http.post("http://localhost:8080/hackerpins/api/v1/stories", $scope.story).success(function (data, status, header, config) {
                $location.path('/');
            }).error(function (data, status, header, config) {
                alert(status);
            });
        }
    });
