// SeasonModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/seasonModel'
], function($, Backbone, SeasonModel ) {
	'use strict';

	// Jasmine Model Test suite for seasonModel  
	describe('seasonModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new SeasonModel() ;

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