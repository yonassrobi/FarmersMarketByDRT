// Main application 
require(['config/config'], function() {
    'use strict';
    require(['jquery', 'backbone', 'jqueryui', 'respond', 'bootstrap', 'routers/router', 'views/headerView', 'views/footerView'],
        function($, Backbone, jqueryui, respond, bootstrap, Router, HeaderView, FooterView) {

            $(document).ready(function() {

            	new HeaderView();
    			new FooterView();

                // initialize router
                new Router();
            });
          
        });
});