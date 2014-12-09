define([
	'backbone',
	'components/controls/productTable/ProductItemView',
	'hbs!components/controls/productTable/ProductTableCompositeView_tmpl'
],
function( Backbone, Productitemview, ProductTableCompositeViewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log('initialize a Product Table  CompositeView');
		},

    	itemView: Productitemview,

    	template: ProductTableCompositeViewTmpl,

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: '',

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
