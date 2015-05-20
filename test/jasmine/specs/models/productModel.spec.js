// ProductModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/productModel'
], function($, Backbone, ProductModel ) {
	'use strict';

	// Jasmine Model Test suite for productModel  
	describe('productModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new ProductModel() ;

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