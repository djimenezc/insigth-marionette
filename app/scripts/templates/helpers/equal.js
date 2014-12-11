/**
 * @author djimenezc
 */
define([
        'backbone',
        'hbs/handlebars'
    ],
    function (Backbone, Handlebars) {
        'use strict';

        Handlebars.registerHelper('equal',
            /**
             * Helper functionality to compare two values that is use in handlebars
             *
             * @param lvalue
             * @param rvalue
             * @param options
             * @returns {*}
             */
                function (lvalue, rvalue, options) {

                if (arguments.length < 3) {
                    //throw new Error('Handlebars Helper equal needs 2 parameters');
                    return '';
                }

                if (lvalue !== rvalue) {
                    return options.inverse(this);
                } else {
                    return options.fn(this);
                }
            });

    });
