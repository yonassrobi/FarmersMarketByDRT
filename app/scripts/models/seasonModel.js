// SeasonModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var SeasonModel = Backbone.Model.extend({

		// Default values for all of the Model attributes
		defaults: {
			seasonDate:'',
			seasonTime:''
		}
	});

	// Returns the Model class
	return SeasonModel;
});