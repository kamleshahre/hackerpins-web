'use strict';

describe('Controller: ViewstoryCtrl', function () {

  // load the controller's module
  beforeEach(module('hackerpinsWebApp'));

  var ViewstoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewstoryCtrl = $controller('ViewstoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
