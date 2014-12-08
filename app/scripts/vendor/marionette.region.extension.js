/**
 * Created by djimenezc on 25/06/2014.
 */
define([
        'backbone',
        'backbone.marionette'
    ],
    function (Backbone, Marionette) {
        'use strict';
        /**
         * Extend the Marionette Region in order to allow to hide/un-hide the region content using jQuery
         *
         * see:
         *     http://stackoverflow.com/questions/17920499/rendering-a-closed-marionette-view
         *     http://stackoverflow.com/questions/10946392/hiding-a-view-in-region-manager-when-another-view-is-shown
         *     https://github.com/marionettejs/backbone.marionette/issues/85
         *
         */
        Marionette.Region.prototype.hide = function () {
            this.$el.hide();
        };

        Marionette.Region.prototype.unhide = function () {
            this.$el.show();
        };

    });
