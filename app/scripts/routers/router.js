// router.js - default router the entire application
// ----------------
define(['jquery', 'backbone', 'views/searchView'/*, 'views/resultsView'*/],

    function($, Backbone, SearchView/*, ResultsView*/) {
        'use strict';

        var Router = Backbone.Router.extend({

            initialize: function() {
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                '': 'index',
                'results': 'results'

            },

            index: function() {

                this.searchView = new SearchView();
                //this.resultsView = new ResultsView();

            }
            
        });

        // Returns the router class
        return Router;
    }
);