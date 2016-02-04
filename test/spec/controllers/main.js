'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('vegaApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Should test the length of myDayta to the scope', function () {
    expect(MainCtrl.myData.length).toBe(3);
  });

  it('should display placeholder page for unrealized', function() {
    expect(element(by.binding('grid1')).getText()).toBe('');
  });
});

/*describe('Unrealized view', function() {
  beforeEach(function() {
    browser.get('/');
  });
  

});*/