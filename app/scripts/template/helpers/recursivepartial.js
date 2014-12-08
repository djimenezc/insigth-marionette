define(
    [
        'handlebars'
    ],
    function(hb) {
        'use strict';

        window.Handlebars = hb;

		hb.registerHelper('recursivepartial', function (template, context) {

            var f = hb.partials[template];

            if (!_.isFunction(f)) {
                return '';
            }

            return new hb.SafeString(f(context));
        });

        return hb;
    }
);
