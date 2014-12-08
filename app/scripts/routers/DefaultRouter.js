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

			},

			advanceSearch: function () {
				console.log('after route');

			},

			reports: function (countryCode, reportName) {
				console.log('after route');

				Communicator.mediator.trigger('updateTitle', i18n.translate('pages.global' + reportName + '.title'));

				Communicator.reqres.request('getController', 'ReportController').buildPage(countryCode, reportName);
			}
		});
	});
