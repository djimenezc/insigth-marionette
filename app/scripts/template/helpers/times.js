/**
 * Created by david on 27/05/2014.
 */
define([
        'backbone',
        'handlebars'
    ],
    function (Backbone, Handlebars) {
        'use strict';

        Handlebars.registerHelper('times',
            /**
             * Iterating over for basic loop
             * @param n number of iteration
             * @param block
             * @returns {string}
             */
                function (n, block) {

                var accumulation = '';

                for (var i = 0; i < n; ++i) {
                    accumulation += block.fn(i);
                }

                return accumulation;
            });

    });
