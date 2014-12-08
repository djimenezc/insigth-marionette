/**
 * @author
 */
define([
        'backbone',
        'hbs!tmpl/messages/loadingMessage'
    ],
    /**
     * View that renders a loading message template
     * @param Backbone
     * @param LoadingMessageTmpl
     * @returns {*}
     */
        function (Backbone, LoadingMessageTmpl) {
        'use strict';

        return Backbone.View.extend({
            /**
             * Starting point, keep options inside the this reference
             * @param options
             */
            initialize: function (options) {

                this.options = options;
            },

            template: LoadingMessageTmpl,

            render: function () {
                this.setElement(this.template(this.attributes));
            }

        });
    });
