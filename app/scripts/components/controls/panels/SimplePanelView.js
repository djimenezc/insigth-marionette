define([
	'backbone',
	'hbs!components/controls/panels/SimplePanel_tmpl'
],
function( Backbone, SimplePanelViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	/** @namespace Backbone.Marionette.ItemView */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log('initialize a Simple Panel ItemView');
		},

		regions: {
			content: '#simple-panel-1'
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
