define([
		'backbone',
		'communicator',
		'views/layout/ReportLayout'
	],
	function (Backbone, Communicator, AppLayout) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			initialize: function () {
				console.log('initialize a Report controller Controller');
			},

			buildPage: function () {
				console.log('Report Controller buildPage');

				var layout = new AppLayout({
					attributes: {},
					className: 'app-layout'
				});


				Communicator.mediator.trigger('message:hideLoadingMask');
			}
		});

	});
