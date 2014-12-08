define([
		'backbone',
		'communicator'
	],
	function (Backbone, Communicator) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			initialize: function (config) {
				console.log('initialize a Config Controller');

				this.name = 'ConfigController';

				this.config = config;

				Communicator.mediator.on('updateTitle', this.changeTitle, this);
			},

			/**
			 * Method that update the second part of the page title
			 * @param title
			 */
			changeTitle: function (title) {

				console.log('Change title to: ' + title);

				document.title = title + ' - ' + this.config.global.appName;
			}
		});

	});
