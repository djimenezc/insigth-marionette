/**
 * @author djimenez
 * @date 29/04/2014
 */
define([
        'backbone',
        'handlebars'
    ],
    function (Backbone, Handlebars) {
        'use strict';

        Handlebars.registerHelper('eachInMap', function (map, block) {
            var out = '';

            _.each(map, function(f1, f2){
                out += block.fn({key: f2, value: f1});
            }, this);

            return out;
        });
    });
