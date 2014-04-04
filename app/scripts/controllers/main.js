'use strict';

angular.module('hackerpins')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.delete = function (story, index) {
            alert("Delete called for " + index);
            alert("Story " + JSON.stringify(story));
        }

        $http.get('http://localhost:8080/hackerpins/api/v1/stories').success(function (data, status, headers, config) {
            $scope.stories = data;
        }).error(function (data, status, headers, config) {
            alert(status);
        });
    }
);
