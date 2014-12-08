/**
 * @author massigob
 */
define([
        'backbone',
        'handlebars'
    ],
    function (Backbone, Handlebars) {
        'use strict';

        var isValid = function (value, options) {
            if (value === 'valid') {
                return options.fn(this);
            }
            return options.inverse(this);
        };

        Handlebars.registerHelper('isValid', isValid);

        return {
            'isValid': isValid
        };
    });
