'use strict';

angular.module('hackerpins')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.stories = [
            {id: 1, "title": "OpenShift Rocks", submittedAt: Date.now()},
            {id: 2, "title": "OpenShift and Java EE 7 Rocks", submittedAt: Date.now()},
            {id: 3, "title": "OpenShift + Java EE 7 + AngularJS Rocks", submittedAt: Date.now()}
        ];

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
