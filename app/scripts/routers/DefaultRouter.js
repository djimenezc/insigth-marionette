define([
		'backbone',
		'communicator',
		'helpers/i18n'
	],
	function (Backbone, Communicator, i18n) {
		'use strict';

		return Backbone.Router.extend({
			/* Backbone routes hash */
			routes: {
				'': 'index',
				'global': 'global',
				'global/:country': 'advanceSearch',
				'report/:country/:id': 'reports'
			},

			/**
			 * Method executed before a hash is matched, feature provided by backbone.routefilter.js
			 */
			before: function () {
				console.log('before route');

			},

			/**
			 * Method executed after a hash is matched
			 */
			after: function () {
				console.log('after route');

			},

			/**
			 * Handles the index route path
			 */
			index: function () {
				console.log('Index route');
				//remove entry from the history
				this.navigate('global', {trigger: true, replace: true});
			},

			global: function () {
				console.log('after route');

				//noinspection JSCheckFunctionSignatures
				Communicator.mediator.trigger('updateTitle', i18n.translate('pages.global.title'));

				Communicator.reqres.request('getController', 'ScorecardController').buildPage();
			},

			advanceSearch: function (countryCode) {
				console.log('advanceSearch');

				//noinspection JSCheckFunctionSignatures
				Communicator.mediator.trigger('updateTitle', i18n.translate('pages.advancedSearch.title'));

				Communicator.reqres.request('getController', 'ScorecardController').buildPage(countryCode);
			},

			reports: function (countryCode, reportName) {
				console.log('report route ' + countryCode + ' ' + reportName);

				//noinspection JSCheckFunctionSignatures
				Communicator.mediator.trigger('updateTitle', i18n.translate('pages.' + reportName + '.title'));

				Communicator.reqres.request('getController', 'ReportController').buildPage(countryCode, reportName);
			}
		});
	});
