define([
	'backbone',
	'hbs!tmpl/item/ReportFilterView_tmpl'
],
function( Backbone, ReportFilterViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log('initialize a Report filter  ItemView');
		},

    	template: ReportFilterViewTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
