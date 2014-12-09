define([
		'backbone',
		'communicator',
		'regions/Modal',
		'routers/DefaultRouter',
		'controllers/ModuleManager',
		'controllers/ReportController',
		'controllers/ScorecardController',
		'config',
		'labels'
	],

	function (Backbone, Communicator, ModalRegion, MainRouter, ModuleManager, ReportController, ScorecardController, config, labels) {
		'use strict';

		console.log('Application constructor');

		window.Insight = Insight || {};

		Insight.App = new Backbone.Marionette.Application();

		/* Add application regions here */
		Insight.App.addRegions({
			main: '#main',
			modal: ModalRegion
		});

		/* Add initializers here */
		Insight.App.addInitializer(function () {

			console.log('Before app start');

			Communicator.mediator.trigger('APP:START');

			Insight.App.Communicator = Communicator;
			Insight.App.config = config;
			Insight.labels = labels;

			Insight.App.routers = [];
			Insight.App.routers.main = new MainRouter();

			Communicator.mediator.trigger('APP:START');

			Insight.App.moduleManager = new ModuleManager({
					App: Insight.App,
					appControllers: {
						'ReportController': {
							ControllerClass: ReportController
						},
						'ScorecardController': {
							ControllerClass: ScorecardController
						}
					}
				}
			);
			Insight.App.moduleManager.startGlobalControllers(Insight.App.config);
			//Indicating the loading mask is visible
			Insight.App.modal.loadingMaskVisible = true;
		});

		/**
		 * Function execute after the application is started. It is carried out to:
		 *  - start the history
		 *  - check that everything is in place, if not a error message is displayed
		 */
		Insight.App.on('initialize:after', function () {
			//Enable router navigation only if app has started correctly with configuration from backend
			if (Backbone.history) {
				console.log('Initialize history');
				Backbone.history.start();
			}
		});

		return Insight.App;
	});
