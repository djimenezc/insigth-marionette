/**
 * @author djimenez
 */
define([
        'backbone',
        'hbs!tmpl/layout/globalScorecardPageLayout_tmpl'
    ],
    function (Backbone, Tmpl) {
        'use strict';

        /**
         * Return a Layout class definition that define the App page skeleton
         * The app page is formed by a the tabs bar and one content container. The page has 3 main regions:
         *   - Header
         *   - Content
         *   - Left SideBar
         */
        return Backbone.Marionette.Layout.extend({

            initialize: function (opts) {
                console.log('initialize a Report Layout ' + opts.attributes);

            },

            template: Tmpl,

            regions: {
                header: '#header',
                content: '#content',
                sidebar: '#sidebar'
            },

            /**
             * We need that the prefix attribute will be available in the template
             * http://stackoverflow.com/questions/11325038/marionette-compositeview-how-to-pass-a-parameter-to-the-template-without-using-a
             * @returns {{settingsPermission: string,homePermission:string}}
             */
            serializeData: function () {
                console.log('serialize Data');

                return {
                };
            },

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {},

            /* on render callback */
            onRender: function () {
            }
        });

    });
