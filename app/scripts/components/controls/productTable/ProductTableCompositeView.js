define([
		'backbone',
		'communicator',

		'components/controls/productTable/ProductItemView',
		'hbs!components/controls/productTable/ProductTableCompositeView_tmpl'
	],
	function (Backbone, Communicator, ProductItemView, ProductTableCompositeViewTmpl) {
		'use strict';

		/* Return a CompositeView class definition */
		/** @namespace Backbone.Marionette.CompositeView */
		return Backbone.Marionette.CompositeView.extend({

			initialize: function (opts) {
				console.log('initialize a Product Table  CompositeView');
				this.opts = opts;

				if(this.collection) {
					this.listenTo(this.collection, 'reset', this.render, this);
					this.originalDataCollection = this.collection.toJSON();
				}

				Communicator.mediator.on('panel:filtering', this.filterTable, this);
			},

			itemView: ProductItemView,

			template: ProductTableCompositeViewTmpl,

			/* ui selector cache */
			ui: {},

			/* where are we appending the items views */
			itemViewContainer: 'tbody',

			/* Ui events hash */
			events: {},

			/**
			 * Makes the override function accessible by the view
			 * @returns {{object}}
			 */
			serializeData: function () {
				//noinspection JSCheckFunctionSignatures
				return {
					'footerMessage': this.opts.footerMessage
				};
			},

			filterTable : function(value) {

				console.log('filterTable ' + value);

				this.collection.reset(this.originalDataCollection, {silent:true});
				var results = this.collection.filterByText(value);

				this.collection.reset(results);
			}

		});

	});
