define([
		'backbone',
		'components/charts/BaseChartView',
		'highcharts'
	],
	function (Backbone, BaseChartView) {
		'use strict';

		//noinspection JSUnusedGlobalSymbols
		return BaseChartView.extend({
			initialize: function () {
				console.log('initialize a trend chart View');

				BaseChartView.prototype.initialize.apply(this, arguments);
				this.opts.chartType = 'area';
				this.opts.series = [{
					'name': 'In Stock',
					'color': '#50b432',
					'data': [8, 16, 21, 4, 21, 54, 26, 53, 63, 47]
				}, {
					'name': 'Not Listed',
					'color': '#E56363',
					'data': [-5, -1, null, null, -2, -13, -6, -12, -9, null]
				}, {
					'name': 'Not Sold Online',
					'color': '#87CEEB',
					'data': [null, null, null, null, null, -2, null, null, null, null]
				}, {
					'name': 'Out of Stock',
					'color': '#DA3610',
					'data': [-10, -10, -11, -2, -4, null, null, -1, -4, -9]
				}];

			}
		});
	});
