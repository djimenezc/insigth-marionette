define([
		'backbone',
		'hbs!components/charts/AvailabilityByBrandChartView_tmpl'
	],
	function (Backbone, Template) {
		'use strict';

		return Backbone.View.extend({
			initialize: function () {
				console.log('initialize a Availability by brand chart View');
			},

			template : Template,

			render: function () {
				console.log('Rendering AvailabilityByBrandChartView');

				this.setElement(this.template(this.attributes));
			}
		});
	});
