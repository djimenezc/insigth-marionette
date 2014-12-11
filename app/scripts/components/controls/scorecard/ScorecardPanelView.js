define([
	'backbone',
	'communicator',
	'hbs!components/controls/scorecard/ScorecardPanel_tmpl'
],
function( Backbone, Communicator, SimplePanelViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	/** @namespace Backbone.Marionette.ItemView */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log('initialize a Scorecard Panel view');
		},

		regions: {
			content: '#simple-panel-1'
		},

		className: 'width-100-percent',

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
		},

		/* Ui events hash */
		events: {
		}
	});

});
