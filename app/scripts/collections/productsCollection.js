// ProductsCollection.js
// ----------
define([
	'jquery', 'backbone', 'models/productModel'
], function($, Backbone, ProductModel) {
	'use strict';

	// Creates a new Backbone collection class object
	var ProductsCollection = Backbone.Collection.extend({

	// Tells the Backbone collection that all of its models will be of type Model (listed up top as a dependency)
      	model: ProductModel,

		initialize: function(data) {
			this.parse(data)
		},

		// Parse model attributes 
		parse: function(response){
        	if (typeof response !== 'undefined') {
				var self = this;
				_.each(response, function(data) {
					try {
						self.push(new ProductModel(data))

					} catch (e) {
						console.log("error while parsing for season collection")
					}
				});

				return this.models;
			} 
        }
	});

	// Returns the Collection class
	return ProductsCollection;
});