define([
		'backbone'
	],
	function (Backbone) {
		'use strict';

		/** @namespace Backbone.Marionette.Controller */
		return Backbone.Marionette.Controller.extend({

			initialize: function () {
				console.log('initialize a Scorecard controller Controller');
			},

			buildPage: function(countryCode) {
				console.log('buildPage ' + countryCode);
			}

		});

	});
