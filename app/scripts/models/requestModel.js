// RequestModel.js
// ----------
define([
	'jquery', 'backbone','helpers/constants'
], function($, Backbone,Constants) {
	'use strict';

	// Creates a new Backbone Model class object
	var RequestModel = Backbone.Model.extend({

		// Default values for all of the Model attributes
		defaults: {
            type: '',
            loc: '',
            lat: '',
            lng: '',
            dist: '0',
            state: '',
            stateName: '',
            county: '',
            formattedAddress:''
		},
		clearModel: function() {
			this.set({
	            type: '',
	            loc: '',
	            lat: '',
	            lng: '',
	            dist: '0',
	            state: '',
	            stateName: '',
	            county: '',
	            formattedAddress:''
			});
		},
		generateURL:function(){
			var url;

			url=(this.get('type') === Constants.geocodeTypeZip)? Constants.searchTypeZip + '&zip=' + this.get('loc'): Constants.searchTypeProximity + '&lat=' + this.get('lat') + '&lng=' + this.get('lng');
			url = window.gblServiceApi + url;
			return url;
		}
	});

	// Returns the Model class
	return RequestModel;
});