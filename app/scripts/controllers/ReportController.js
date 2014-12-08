define([
		'backbone',
		'communicator',
		'views/layout/ReportLayout',
		'views/reports/ReportHeaderView',
		'components/controls/navigationMenu/NavigationMenuCmp',
	],
	function (Backbone, Communicator, AppLayout, ReportHeaderView, NavigationMenuCmp) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			initialize: function () {
				console.log('initialize a Report controller Controller');

				if (!this.navigationMenuCmp) {
					this.navigationMenuCmp = new NavigationMenuCmp({
						get : function() {
							return 'US';
						}
					}, [], []);
				}
			},

			buildPage: function () {
				console.log('Report Controller buildPage');

				var layout = new AppLayout({
					attributes: {},
					className: 'app-layout'
				});

				Communicator.command.execute('module:replaceMainLayout', layout);

				this.attachHeaderView(layout);
				this.attachSidebarView(layout);
				this.attachContentView();

				Communicator.mediator.trigger('message:hideLoadingMask');
			},

			attachHeaderView : function(layout) {

				layout.header.show(new ReportHeaderView());
			},

			attachSidebarView : function(layout) {

				var navigationMenu = this.navigationMenuCmp.buildComponent('');
				layout.sidebar.show(navigationMenu);
			},

			attachContentView : function() {

			}
		});

	});
