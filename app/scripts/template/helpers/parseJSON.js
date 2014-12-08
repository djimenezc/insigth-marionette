/**
 * Created by david on 27/05/2014.
 */
define([
        'backbone',
        'handlebars'
    ],
    function (Backbone, Handlebars) {
        'use strict';

        Handlebars.registerHelper('parseJSON', function(data, options) {
            console.log('json parse');
            if(data) {
                return options.fn(JSON.parse(data));
            }
        });

    });
