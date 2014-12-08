define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome'
],

function( Backbone, Communicator, Welcome_tmpl ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var Insight = Insight || {};

	Insight.App = new Backbone.Marionette.Application();

	/* Add application regions here */
	Insight.App.addRegions({});

	/* Add initializers here */
	Insight.App.addInitializer( function () {
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");

		Insight.App.Communicator = Communicator;
	});

	console.log('Display welcome message');

	return Insight.App;
});