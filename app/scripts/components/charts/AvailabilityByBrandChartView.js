define([
		'backbone',
		'hbs!components/charts/AvailabilityByBrandChartView_tmpl',
		'highcharts'
	],
	function (Backbone, Template) {
		'use strict';

		//noinspection JSUnusedGlobalSymbols
		return Backbone.View.extend({
			initialize: function () {
				console.log('initialize a Availability by brand chart View');
			},

			template: Template,

			render: function () {
				console.log('Rendering AvailabilityByBrandChartView');

				this.$el.html(this.template(this.attributes));
			},

			processChartConfiguration: function (series, categories, min, max, numberType, valueFormat) {

				var isRatio = false;

				//noinspection JSUnusedGlobalSymbols
				return {
					chart: {
						type: 'column'
					},
					title: {
						text: ''
					},
					xAxis: {
						categories: categories,
						tickLength: 0
					},
					yAxis: {
						min: min,
						max: max,
						allowDecimals: false,
						title: {
							text: 'Product ' + numberType,
							margin: 20
						},
						labels: {
							format: valueFormat,
							formatter: function () {
								var val = (Math.abs(this.value));
								if (!isRatio) {
									return val;
								}
								return val + '%';
							}
						}
					},
					plotOptions: {
						column: {
							stacking: 'normal',
							borderWidth: 0,
							shadow: false
						},
						series: {
							events: {
								click: function () {
									//e.preventDefault();
									//var data = {
									//	dimensionItem: e.point.category,
									//	dimension: templateModel.meta.dimension.id
									//};
									//self._goToAnalysis(data);
								}
							},
							states: {
								hover: {
									brightness: 0.1
								}
							}
						}
					},
					//tooltip: highchartsTooltipPopover.createTooltipConfig(this.tooltipFormatter, true),
					series: series
				};
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
			},

			/**
			 * Method executed when the view is rendered.
			 * @returns {*}
			 */
			onShow: function () {

				console.log('after render');

				var series = this.getSeriesData(),
					categories = this.getCategories(),
					min = -15,
					max = 63,
					numberType = 'count',
					valueFormat = '{value}';

				var config = this.processChartConfiguration(series, categories, min, max, numberType, valueFormat);

					/** @namespace this.$el */
					this.$el.find('.chart').highcharts(config);
			}
		});
	});
