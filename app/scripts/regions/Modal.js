/**
 * @author djimenez
 */
define([
        'backbone',
        'underscore',
        'backbone.marionette'
    ],
    function (Backbone, _, Marionette) {
        'use strict';

        /**
         *  Return a Region class definition that is bind with a modal div
         */
        //noinspection JSValidateJSDoc
		return Marionette.Region.extend({

            el: '#modal',

            /**
             * Init method that bind the region with a html element with modal id
             */
            initialize: function () {
                console.log('initialize a Modal Region');
                this.$el = this.getEl(this.el);
            },

            /**
             * Constructor method that register the show modal panel event
             */
            constructor: function () {
                _.bindAll(this);
                Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
                this.on('view:show', this.showModal, this);
            },

            /**
             * Method to retrieve the jquery element represents by the selector parameter
             *
             * @param selector
             * @returns {*|jQuery|HTMLElement}
             */
            getEl: function (selector) {
                var $el = $(selector);

                if (this.$el) {
                    $el.on('hidden', this.close);
                }

                return $el;
            },

            /**
             * Method to display the modal panel and embed a view
             * @param view
             */
            showModal: function (view) {
                view.on('close', this.hideModal, this);

                if (this.$el && _.isFunction(this.$el.modal)) {
                    this.show(view);
                    this.$el.modal('show');
                }
            },

            /**
             * Method to hide the modal panel
             */
            hideModal: function () {
                if (this.$el && _.isFunction(this.$el.modal)) {
                    this.$el.modal('hide');
                    this.$el.hide();
                    this.$el.removeClass('modal-backdrop');
                }
            }

        });

    });
