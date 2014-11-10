'use strict';

describe('Service: accessToken', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var accessToken;
  beforeEach(inject(function (_accessToken_) {
    accessToken = _accessToken_;
  }));

  it('should do something', function () {
    expect(!!accessToken).toBe(true);
  });

});
