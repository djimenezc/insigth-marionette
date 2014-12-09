define([
		'backbone',
		'hbs!tmpl/reports/header_tmpl'
	],
	function (Backbone, Tmpl) {
		'use strict';

		/** @namespace Backbone.View */
		return Backbone.View.extend({
			initialize: function () {
				console.log('initialize a Report header View');
			},

			template: Tmpl,

			render: function () {
				console.log('Rendering Header Panel');

				this.setElement(this.template(this.attributes));
			}

		});
	});
