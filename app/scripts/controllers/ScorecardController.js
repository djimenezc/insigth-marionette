define([
		'backbone',
		'communicator',
		'views/layout/GlobalScorecardLayout',
		'views/reports/ReportHeaderView'

	],
	function (Backbone, Communicator, AppLayout, ReportHeaderView) {
		'use strict';

		/** @namespace Backbone.Marionette.Controller */
		return Backbone.Marionette.Controller.extend({

			initialize: function () {
				console.log('initialize a Scorecard controller Controller');
			},

			buildPage: function (countryCode) {

				console.log('Building scorecard page ' + countryCode);

				var layout = new AppLayout({
					attributes: {},
					className: 'app-global-layout'
				});

				Communicator.command.execute('module:replaceMainLayout', layout);

				this.attachHeaderView(layout);
				this.attachContentView(layout);

				Communicator.mediator.trigger('message:hideLoadingMask');
			},

			attachHeaderView : function(layout) {

				layout.header.show(new ReportHeaderView());
			},

			attachContentView : function(layout) {

				require([
					'components/overviews/GlobalScorecardModule'
				], function(scorecardModule) {

					scorecardModule.start();

					layout.content.show(scorecardModule.buildPanel());
				});
			}

		});

	});
