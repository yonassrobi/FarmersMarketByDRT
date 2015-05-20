/*global define*/

define([
    'underscore',
    'backbone',
    'models/farmerMarketModel'
], function (_, Backbone, FarmerMarketModel) {
    'use strict';

    var FarmersMarketCollection = Backbone.Collection.extend({
        model: FarmerMarketModel,

        parse:function(response){
        	if (typeof response !== 'undefined') {
				var self = this;
				_.each(response, function(detail) {
					try {
						self.push(new FarmerMarketModel(detail))

					} catch (e) {
						console.log("error while parsing for farmers market collection")
					}
				});

				return this.models;
			} 
        }
    });

    return FarmersMarketCollection;
});
