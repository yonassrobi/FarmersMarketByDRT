// ResultsViews.spec.js
// ----------
define([
	'jquery', 'backbone', 'routers/router', 'views/resultsView', 
	'text!templates/results.html', 
	'text!locale/results.json', 
	'text!locale/es_mx/results.json'
], function($, Backbone, Router, ResultsView, 
	template, content, contentES ) {
	'use strict';

	// Jasmine View Test suite for resultsView  
	describe('resultsView: ', function() {

		// Runs before every View spec
		beforeEach(function() {

			// Instantiates a new View instance
			this.view = new ResultsView() ;

		});

		// Tests if the view is properly defined
		it('should be defined', function() {

			expect(this.view).toBeDefined();

		});

		// Check if the correct view el is used
		it('should contain the correct view element', function() {

			//expect(this.view.$el.selector).toEqual("#main-content");

		});

		// Runs after every view spec
		afterEach(function() {

			// Destroys view instance
			this.view = null;

		});
	});


});