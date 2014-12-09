define([
	'backbone',
	'hbs!components/controls/panels/SimplePanel_tmpl'
],
function( Backbone, SimplePanelViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	/** @namespace Backbone.Marionette.ItemView */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log('initialize a Simple Panel ItemView');
		},

		className: 'width-100-percent panels-lateral-padding',

    	template: SimplePanelViewTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
