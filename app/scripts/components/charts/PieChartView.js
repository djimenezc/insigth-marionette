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
				console.log('initialize a Pie chart View');

				BaseChartView.prototype.initialize.apply(this, arguments);

				this.opts.chartType = 'pie';
			},

			getSeriesData: function () {

				return [{
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
			},

			getCategories : function() {

				return ['TRESemme', 'Klondike', 'Ben & Jerry\'s', 'Good Humor', 'Popsicle', 'TIGI', 'Best Foods', 'Just For Me', 'Hellmann\'s', 'Breyers'];
			}
		});
	});
