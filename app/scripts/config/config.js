// Require.js Configurations
// -------------------------
require.config({

    // Sets the js folder as the base directory for all future relative paths
    //~~baseUrl: '/app/',

    paths: {

        // Core Libraries
        // ---------------
        backbone: '../vendor/backbone/backbone',

        bootstrap: '../vendor/bootstrap/bootstrap',

        jpanel: '../vendor/jpanelmenu/jquery.jpanelmenu',

        jquery: '../vendor/jquery/jquery',

        jqueryui: '../vendor/jqueryui/jquery-ui',

        underscore: '../vendor/lodash/lodash',

        respond: '../vendor/respond/respond.src',
        
        text: '../vendor/requirejs-text/text',

        selectize: '../vendor/selectize/selectize',

        sifter: '../vendor/sifter/sifter',

        microplugin: '../vendor/microplugin/microplugin',

        geocomplete: '../vendor/geocomplete/jquery.geocomplete'
        
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

        // Twitter Bootstrap jQuery plugins
        bootstrap: ['jquery'],

        // Backbone
        backbone: {

            // Depends on underscore/lodash and jQuery
            'deps': ['underscore', 'jquery'],

            // Exports the global window.Backbone object
            'exports': 'Backbone'

        },

        // jQuery UI
        jqueryui: ['jquery'],

        // jQuery Panel Menu plugin that depends on jQuery
        jpanel: ['jquery'],

        selectize: {
            deps: ['jquery', 'bootstrap', 'sifter', 'microplugin'],
            exports: 'Selectize'
        },

        geocomplete:{
            deps:['jquery'],
            exports:'geocomplete'
        }

    }

});