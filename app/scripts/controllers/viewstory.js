'use strict';

angular.module('hackerpins')
    .controller('ViewstoryCtrl', function ($scope) {
        $scope.story = {
            id: 1,
            title: "OpenShift Rocks++",
            description: "OpenShift is an awesome platform to host Java applications",
            submittedAt: Date.now()
        }
    });
