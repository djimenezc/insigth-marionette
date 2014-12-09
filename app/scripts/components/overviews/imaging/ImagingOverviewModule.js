//noinspection JSValidateJSDoc
/**
 * Created by djimenez on 13/06/2014.
 */
define([
		'application',
		'communicator',
		'views/layout/VerticalLayout',
		'components/controls/reportFilter/ReportFilterView'
	],
	/**
	 *
	 * Please, don't reference global variable inside modules.
	 * @returns {*|module}
	 */
	function (App, Communicator, VerticalLayout, ReportFilterView) {
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

				var mainLayout = new VerticalLayout();


				return mainLayout;
			};

		});
	}
);
