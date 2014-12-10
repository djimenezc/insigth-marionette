define([
	'backbone',
	'hbs!components/controls/productTable/ProductItemView_tmpl'
],
function( Backbone, ProductItemViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log('initialize a Product item view ItemView');
		},

		tagName: 'tr',

    	template: ProductItemViewTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
			'click td' : 'cellClick'
		},

		cellClick : function() {

			alert('The cell was clicked');
		},

		/* on render callback */
		onRender: function() {}
	});

});
