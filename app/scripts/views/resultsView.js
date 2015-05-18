// ResultsView.js
// ----------
define([
	'jquery', 'backbone', 'text!templates/results.html', 'text!locale/results.json', 'text!locale/es_mx/results.json'
], function($, Backbone, template, content, contentES) {
	'use strict';

	// Creates a new Backbone View class object
	var ResultsView = Backbone.View.extend({

		// The DOM Element associated with this view
		el: '#main-content',

		// The Model associated with this view
		model: '',

		// View constructor
		initialize: function(options) {

			// Set language attribute to support localization
			this.language = (options && options.language) || 'en_us';

			// Calls the view's render method
			this.render();

		},

		// View Event Handlers
		events: {

		},

		// Renders the view's template to the UI
		render: function() {

			// Setting the view's template property using the Underscore template method
			this.template = _.template(template, {
				content: JSON.parse((this.language == 'en_us') ? content : contentES)
			});

			// Dynamically updates the UI with the view's template
			this.$el.append(this.template);

			// Maintains chainability
			return this;

		}

	});

	// Returns the View class
	return ResultsView;
});