//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'controllers/ConfigController'
		],
		function (Configcontroller) {

			describe('Config Controller', function () {

				it('should be an instance of Config Controller', function () {
					var configController = new Configcontroller();
					expect(configController).to.be.an.instanceof(Configcontroller);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection JSUnresolvedVariable,BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
