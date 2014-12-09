define([
		'backbone',
		'hbs!components/controls/reportHeaderTitle/ReportHeaderTitleView_tmpl'
	],
	function (Backbone, ReportFilterViewTmpl) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function () {
				console.log('initialize a Report filter  ItemView');
			},

			className: 'width-100-percent',

			template: ReportFilterViewTmpl,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function () {
			}
		});

	});
