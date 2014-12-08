define([
        'backbone',
        'backbone.marionette',
        'hbs!tmpl/layout/WidgetsContainerLayout_tmpl'
    ],
    function (Backbone, Marionette, HorizontalLayoutTmpl) {
        'use strict';

        /* Return a Layout class definition */
        return Backbone.Marionette.Layout.extend({

            initialize: function () {
                console.log('initialize a HorizontalLayout Layout');
            },

            className: 'horizontal-layout',

            template: HorizontalLayoutTmpl,


            /* Layout sub regions */
            regions: {},

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {},

            /* on render callback */
            onRender: function () {
            }
        });

    });
