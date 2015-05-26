// FarmerMarketModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/farmerMarketModel'
], function($, Backbone, FarmerMarketModel ) {
	'use strict';

	// Jasmine Model Test suite for farmerMarketModel  
	describe('farmerMarketModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new FarmerMarketModel() ;

		});

		// Tests if the model is properly defined
		it('should be defined', function() {
			
			expect(this.model).toBeDefined();

		});

		// Runs after every model spec
		afterEach(function() {

			// Destroys model instance
			this.model = null;

		});
	});


});