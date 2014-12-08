define([
		'backbone',
		'backbone.marionette'
	],
	function (Backbone) {
		'use strict';

		var Communicator = Backbone.Marionette.Controller.extend({
			initialize: function () {
				console.log('initialize a Communicator');

				// create a pub sub
				this.mediator = new Backbone.Wreqr.EventAggregator();

				//create a req/res
				this.reqres = new Backbone.Wreqr.RequestResponse();

				// create commands
				//noinspection JSUnusedGlobalSymbols
				this.command = new Backbone.Wreqr.Commands();
			}
		});

		return new Communicator();
	});
