define([
        'backbone'
    ],
    function (Backbone) {
        'use strict';

        /* Return a model class definition */
        return Backbone.Model.extend({
            initialize: function () {
                //console.log("initialize a Navigation Menu Entry model");

                this.set('displayIconImg', this.get('iconImg') !== undefined);
                this.set('accordion', this.get('subItems') !== undefined);
            },

            defaults: {
                accordion: false
            }

        });
    });
