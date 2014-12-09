define([
		'backbone',
		'backbone.marionette',
		'hbs!tmpl/layout/WidgetsContainerLayout_tmpl'
	],
    function (Backbone, Marionette, WidgetsLayoutTmpl) {
        'use strict';

        /* Return a Layout class definition */
		/** @namespace Backbone.Marionette */
		/** @namespace Backbone.Marionette.Layout */
		return Backbone.Marionette.Layout.extend({

            initialize: function (opts) {
                console.log('initialize a Dynamic Layout');
                this.opts = opts ? opts : {};
            },

            template: WidgetsLayoutTmpl,

            /* Layout sub regions */
            regions: {},

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {},

            render: function () {
                this.$el.html(this.template(this.opts));

				this.addDynamicRegions();
                return this;
            },

			addDynamicRegions : function() {

				console.log('Creating layout regions');

				_.each(this.opts.regions, function(regionName) {

					this.addRegion(regionName, '#'+regionName);
				},this);
			},

            /* on render callback */
            onRender: function () {
            }
        });

    });
