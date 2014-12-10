define([
	'backbone',
	'communicator',
	'hbs!components/controls/panels/SimplePanel_tmpl'
],
function( Backbone, Communicator, SimplePanelViewTmpl  ) {
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

		/**
		 * Makes the override function accessible by the view
		 * @returns {{object}}
		 */
		serializeData: function () {
			//noinspection JSCheckFunctionSignatures
			return {
				'filterId': 'productFilterId'
			};
		},

    	/* ui selector cache */
		ui: {
			'textfield': '#productFilterId'
		},

		/* Ui events hash */
		events: {
			'click @ui.textfield' : 'clickAction',
			'keyup @ui.textfield' : 'filterAction'
		},

		filterAction: function(e) {

			console.log('Filtering');

			Communicator.mediator.trigger('panel:filtering', e.target.value);
		},
		clickAction: function() {

			console.log('click');

		},

		/* on render callback */
		onRender: function() {}
	});

});
