define([
		'backbone',
		'communicator',
		'views/layout/ReportLayout',
		'views/reports/ReportHeaderView'
	],
	function (Backbone, Communicator, AppLayout, ReportHeaderView) {
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

				Communicator.command.execute('module:replaceMainLayout', layout);

				this.attachHeaderView(layout);
				this.attachSidebarView();
				this.attachContentView();

				Communicator.mediator.trigger('message:hideLoadingMask');
			},

			attachHeaderView : function(layout) {

				layout.header.show(new ReportHeaderView());
			},

			attachSidebarView : function() {

			},

			attachContentView : function() {

			}
		});

	});
