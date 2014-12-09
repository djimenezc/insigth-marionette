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
		'components/controls/panels/SimplePanelView'
	],
	/**
	 *
	 * Please, don't reference global variable inside modules.
	 * @returns {*|module}
	 */
	function (App, Communicator, VerticalLayout, ReportFilterView, ReportHeaderTitle, SimplePanelView) {
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

			/**
			 * Render subPanels
			 */
			Module.displaySubPanels = function () {

				console.log('displaySubPanels: Overview Imaging');

				//noinspection JSUnresolvedVariable
				this.mainLayout.reportHeaderTitle.show(new ReportHeaderTitle());
				//noinspection JSUnresolvedVariable
				this.mainLayout.reportFilter.show(new ReportFilterView());
				//noinspection JSUnresolvedVariable
				this.mainLayout.tabPanelComparison.show(new SimplePanelView());

				return this.mainLayout;
			};

		});
	}
);
