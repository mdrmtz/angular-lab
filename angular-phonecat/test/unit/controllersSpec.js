/*global describe,beforeEach,module,it,inject,expect*/
'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListController', function () {
	beforeEach(module('phonecatApp'));
	it('should create "phones" model with 3 phones', inject(function ($controller) {
		var scope = {},
			ctrl = $controller('PhoneListController', {$scope: scope});
		expect(scope.phones.length).toBe(3);
	}));
});
