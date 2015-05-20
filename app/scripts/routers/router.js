
define([
    'jquery',
    'backbone',
    'views/searchView'
], function ($, Backbone, SearchView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function() {
                //this.requestModel = new RequestModel();
                Backbone.history.start();
            },

        routes: {
            '':'index'
        },

        index:function(){
            this.searchView = new SearchView();
            $('#main-content').html(this.searchView .render().el);
        }
    });

    return RouterRouter;
});
