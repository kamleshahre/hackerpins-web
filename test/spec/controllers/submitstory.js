'use strict';

describe('Controller: SubmitstoryCtrl', function () {

  // load the controller's module
  beforeEach(module('hackerpinsWebApp'));

  var SubmitstoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmitstoryCtrl = $controller('SubmitstoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
