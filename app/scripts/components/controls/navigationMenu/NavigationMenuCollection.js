define([
        'backbone',
        'components/controls/navigationMenu/NavigationMenuEntryModel'
    ],
    function (Backbone, NavigationMenuEntryModel) {
        'use strict';

        /* Return a collection class definition */
        return Backbone.Collection.extend({
            initialize: function () {
                //console.log("initialize a Navigation Menu collection");
            },

            model: NavigationMenuEntryModel

        });
    });
