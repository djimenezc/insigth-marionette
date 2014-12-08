define([
		'backbone',
		'communicator',
		'controllers/ScorecardController',
		'controllers/ReportController',
		'controllers/MessageController',
		'controllers/ConfigController'
	],
	function (Backbone, Communicator, ScorecardController, ReportController, MessageController, ConfigController) {
		'use strict';

		/**
		 * Controller that handle the module's lifecycle, loading and unloading modules
		 * in runtime
		 */
		return Backbone.Marionette.Controller.extend({

			/**
			 * Initializer of the Module Manager
			 * @param opts (supported attrbits are App and appControllers)
			 */
			initialize: function (opts) {
				console.log('initialize a ModuleManager Controller');
				this.App = opts.App;

				this.App.Controllers = {};

				var globalControllers = {
					'MessageController': {
						ControllerClass: MessageController
					},
					'ConfigController': {
						ControllerClass: ConfigController
					}
				};

				this.App.Controllers = _.extend(globalControllers, opts.appControllers);

				Communicator.reqres.setHandler('getController', this.getController, this);
				Communicator.command.setHandler('module:replaceMainLayout', this.replaceMainLayout, this);
			},

			/**
			 * Method that return the controller that has to be use for this router,
			 * the second parameter is option. it represents the configuration that it will be pass
			 * to the initialize method when the controller will be instantiated the first time
			 * @param name of the controller
			 * @returns SettingsController
			 */
			getController: function (name) {

				if (this.App.Controllers[name] && !this.App.Controllers[name].instance) {
					var config = arguments[1];
					this.App.Controllers[name].instance = new this.App.Controllers[name].ControllerClass(config);
				}

				return this.App.Controllers[name] ? this.App.Controllers[name].instance : null;
			},

			/**
			 * Method to start the controller that don't depend on the global configuration and
			 * must be available always
			 */
			startGlobalControllers: function (config) {

				var controllers = [];

				controllers.push(this.getController('MessageController', this.App));
				controllers.push(this.getController('ConfigController', config));

				return controllers;
			},

			replaceMainLayout: function (layout) {

				console.log('Replacing application main layout');

				Insight.App.main.show(layout);
			}

		});

	});
