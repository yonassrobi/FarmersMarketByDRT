// SeasonsCollection.js
// ----------
define([
	'jquery', 'backbone', 'models/seasonModel'
], function($, Backbone, SeasonModel) {
	'use strict';

	// Creates a new Backbone collection class object
	var SeasonsCollection = Backbone.Collection.extend({

		// Tells the Backbone collection that all of its models will be of type Model (listed up top as a dependency)
      	model: SeasonModel,

		// Collection Constructor
		initialize: function(data) {
			this.parse(data)
		},

		// Parse model attributes 
		parse: function(response){
        	if (typeof response !== 'undefined') {
				var self = this;
				_.each(response, function(data) {
					try {
						self.push(new SeasonModel(data))

					} catch (e) {
						console.log("error while parsing for season collection")
					}
				});

				return this.models;
			} 
        }

	});

	// Returns the Collection class
	return SeasonsCollection;
});