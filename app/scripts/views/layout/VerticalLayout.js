define([
        'backbone',
        'backbone.marionette',
        'hbs!tmpl/layout/WidgetsContainerLayout_tmpl'
    ],
    function (Backbone, Marionette, VerticalLayoutTmpl) {
        'use strict';

        /* Return a Layout class definition */
        return Backbone.Marionette.Layout.extend({

            initialize: function () {
                console.log('initialize a VerticalLayout Layout');
            },

            template: VerticalLayoutTmpl,


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
