// SeasonsCollection.spec.js
// ----------
define([
	'jquery', 'backbone', 'collections/seasonsCollection'
], function($, Backbone, SeasonsCollection ) {
	'use strict';

	// Jasmine Collection Test suite for seasonsCollection  
	describe('seasonsCollection: ', function() {

		// Runs before every spec
		beforeEach(function() {

			// Instantiates a new Collection instance
			this.collection = new SeasonsCollection() ;

		});

		// Tests if the collection is properly defined
		it('should be defined', function() {

			expect(this.collection).toBeDefined();

		});

		// Test if collection contains the correct number of models
		it('should contain the correct number of models', function() {

			expect(this.collection.length).toEqual(0);

		});

		// Runs after each collection spec
		afterEach(function() {

			// Destroys collection instance
			this.collection = null;

		});
	});


});