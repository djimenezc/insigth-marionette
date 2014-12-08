/**
 * @author djimenez
 */
define([
    'backbone',
    'hbs!tmpl/messages/errorMessage'
],
    function (Backbone, ErrorMessageTmpl) {
        'use strict';

        /**
         * View to build error messages.
         */
        return Backbone.View.extend({
            /**
             * Init the view. Pass a okCallbackScope and cancelCallbackScope to display the ok and cancel button
             * @param options
             */
            initialize: function (options) {
                console.log('initialize a ErrorMessageView View');

                this.options = options;
            },

            template: ErrorMessageTmpl,

            render: function () {
                this.setElement(this.template(this.attributes));
            },

            events: {
                'click .btn-primary': 'submit',
                'click .btn': 'cancel'
            },

            /**
             * Method that execute the okCallbackScope function when the primary button is clicked
             */
            submit: function () {
                var callbackScope = this;
                if (this.options.okCallbackScope) {
                    callbackScope = this.options.okCallbackScope;
                }
                if (this.options.okCallbackFn) {
                    this.options.okCallbackFn.apply(callbackScope);
                }
            },

            /**
             * Method that execute the okCallbackScope function when the secondary button is clicked
             */
            cancel: function () {
                var callbackScope = this;
                if (this.options.cancelCallbackScope) {
                    callbackScope = this.options.cancelCallbackScope;
                }
                if (this.options.cancelCallbackFn) {
                    this.options.cancelCallbackFn.apply(callbackScope);
                }

            }


        });
    });
