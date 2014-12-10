define([
	'backbone',
	'components/controls/productTable/ProductItemView',
	'hbs!components/controls/productTable/ProductTableCompositeView_tmpl'
],
function( Backbone, Productitemview, ProductTableCompositeViewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	/** @namespace Backbone.Marionette.CompositeView */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function(opts) {
			console.log('initialize a Product Table  CompositeView');
			this.opts = opts;
		},

    	itemView: Productitemview,

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

		/* on render callback */
		onRender: function() {}
	});

});
