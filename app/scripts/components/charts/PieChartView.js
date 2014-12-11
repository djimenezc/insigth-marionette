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
				this.opts.title = '89%';
				this.opts.subtitle = 'of 5485 products are available';
				this.opts.series = [{
					'name': 'Products',
					'data': [{
						'y': 4867,
						'percent': '89',
						'color': '#50b432',
						'name': 'Available To Purchase',
						'events': {}
					}, {
						'y': 618,
						'percent': '11',
						'color': '#808080',
						'name': 'Not Available To Purchase',
						'events': {}
					}],
					'size': '100%',
					'innerSize': '70%',
					'dataLabels': {'enabled': false, 'style': {'fontSize': '12px'}}
				}];
			}

		});
	});
