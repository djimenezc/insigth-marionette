//noinspection JSValidateJSDoc
/**
 * Created by djimenez on 13/06/2014.
 */
define([
		'application',
		'communicator',
		'views/layout/VerticalLayout',
		'components/controls/reportFilter/ReportFilterView',
		'components/controls/reportHeaderTitle/ReportHeaderTitleView',
		'components/controls/panels/SimplePanelView',
		'components/controls/productTable/ProductTableCompositeView',
		'collections/ProductCollection',
		'components/charts/AvailabilityByBrandChartView'
	],
	/**
	 *
	 * Please, don't reference global variable inside modules.
	 * @returns {*|module}
	 */
	function (App, Communicator, VerticalLayout, ReportFilterView, ReportHeaderTitle, SimplePanelView, ProductTableCompositeView, ProductCollection, AvailabilityByBrandChartView) {
		'use strict';

		console.log('Imaging Overview Module: init');

		/**
		 * Settings module definition
		 */
		return App.module('ImagingOverview', function (Module) {

			/**
			 * Execute the first time that the module is execute.
			 */
			Module.on('before:start', function () {
				console.log('Imaging Overview before:start');

				Module.models = [];
				Module.views = [];
			});

			/**
			 * Tear down, shut down and clean up the module
			 */
			Module.addFinalizer(function () {

				console.log('Finalizer: Stopping Imaging Overview module');

			});

			/**
			 * Return a view/layout of a report
			 */
			Module.buildPanel = function () {

				console.log('buildPanel: Overview Imaging');

				this.mainLayout = new VerticalLayout({
					regions: [
						'reportHeaderTitle',
						'reportFilter',
						'tabPanelComparison',
						'panelComparisonByOvertime'
					]
				});

				return this.mainLayout;
			};

			function buildProductCollection() {

				var productCollection = new ProductCollection();

				productCollection.add({
					onlineStore: 'Safeway',
					brand: 'Axe',
					description: 'Axe Apollo Deodorant Stick - 3 Oz',
					name: 'Axe Apollo Deodorant Stick 3 oz',
					rpc: '960084348',
					upc: '0079400261021',
					score: '100%',
					finalResult: 'pass'
				});
				productCollection.add({
					onlineStore: 'Safeway',
					brand: 'Axa',
					description: 'Axe Apollo Deodorant Stick - 3 Oz',
					name: 'Axe Apollo Deodorant Stick 3 oz',
					rpc: '960084348',
					upc: '0079400261021',
					score: '100%',
					finalResult: 'pass'
				});
				productCollection.add({
					onlineStore: 'Safeway',
					brand: 'Axu',
					description: 'Axe Apollo Deodorant Stick - 3 Oz',
					name: 'Axe Apollo Deodorant Stick 3 oz',
					rpc: '960084348',
					upc: '0079400261021',
					score: '100%',
					finalResult: 'fail'
				});
				productCollection.add({
					onlineStore: 'Safeway',
					brand: 'Axo',
					description: 'Axe Apollo Deodorant Stick - 3 Oz',
					name: 'Axe Apollo Deodorant Stick 3 oz',
					rpc: '960084348',
					upc: '0079400261021',
					score: '100%',
					finalResult: 'pass'
				});
				productCollection.add({
					onlineStore: 'Safeway',
					brand: 'Axo',
					description: 'Axe Apollo Deodorant Stick - 3 Oz',
					name: 'Axe Apollo Deodorant Stick 3 oz',
					rpc: '960084348',
					upc: '0079400261021',
					score: '100%',
					finalResult: 'pass'
				});
				productCollection.add({
					onlineStore: 'Safeway',
					brand: 'Axi',
					description: 'Axe Apollo Deodorant Stick - 3 Oz',
					name: 'Axe Apollo Deodorant Stick 3 oz',
					rpc: '960084348',
					upc: '0079400261021',
					score: '100%',
					finalResult: 'fail'
				});


				return productCollection;
			}

			/**
			 * Render subPanels
			 */
			Module.displaySubPanels = function () {

				console.log('displaySubPanels: Overview Imaging');

				var compositeView = new ProductTableCompositeView({
						collection: buildProductCollection(),
						footerMessage: 'I\'m a footer'
					}),
					availabilityChart = new AvailabilityByBrandChartView(),
					productSimplePanel = new SimplePanelView({
						prefix: 'table',
						filter: true,
						title: 'Comparison by Online Store on August 1st, 2014'
					}),
					availabilityChartPanel = new SimplePanelView({
						prefix: 'availabilityChart',
						title: 'Portfolio Availability by Brand on September 1st, 2014'
					});

				//noinspection JSUnresolvedVariable
				this.mainLayout.reportHeaderTitle.show(new ReportHeaderTitle());
				//noinspection JSUnresolvedVariable
				this.mainLayout.reportFilter.show(new ReportFilterView());
				//noinspection JSUnresolvedVariable
				this.mainLayout.tabPanelComparison.show(productSimplePanel);
				//noinspection JSUnresolvedVariable
				this.mainLayout.panelComparisonByOvertime.show(availabilityChartPanel);

				productSimplePanel.content.show(compositeView);
				availabilityChartPanel.content.show(availabilityChart);

				return this.mainLayout;
			};

		});
	}
);
