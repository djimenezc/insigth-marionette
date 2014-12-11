define([
		'backbone',
		'hbs!components/charts/ChartView_tmpl',
		'highcharts'
	],
	function (Backbone, Template) {
		'use strict';

		//noinspection JSUnusedGlobalSymbols
		return Backbone.View.extend({
			initialize: function () {
				console.log('initialize a chart View');
			},

			template: Template,

			render: function () {
				console.log('Rendering AvailabilityByBrandChartView');

				this.$el.html(this.template(this.attributes));
			},

			/**
			 * Method that build a highchart configuration object. It must be implemented
			 * in the child views
			 * @param series
			 * @param categories
			 * @param min
			 * @param max
			 * @param numberType
			 * @param valueFormat
			 * @returns {Object}
			 */
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

				return [];
			},

			getMin : function() {

				return -15;
			},

			getMax : function() {

				return 63;
			},

			getNumberType : function() {

				return 'count';
			},

			getValueFormat : function() {

				return '{value}';
			},

			/**
			 * Method executed when the view is rendered.
			 * @returns {*}
			 */
			onShow: function () {

				console.log('after render');

				var series = this.getSeriesData(),
					categories = this.getCategories(),
					min = this.getMin(),
					max = this.getMax(),
					numberType = this.getNumberType(),
					valueFormat =this.getValueFormat();

				var config = this.processChartConfiguration(series, categories, min, max, numberType, valueFormat);

				/** @namespace this.$el */
				this.$el.find('.chart').highcharts(config);
			}
		});
	});
