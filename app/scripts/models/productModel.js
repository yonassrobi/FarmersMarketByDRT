// ProductModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var ProductModel = Backbone.Model.extend({

		// Default values for all of the Model attributes
		defaults: {
			productName:'',
			productAvailability:''
		}
	});

	// Returns the Model class
	return ProductModel;
});