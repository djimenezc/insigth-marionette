//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'routers/DefaultRouter'
		],
		/**
		 * @param Default
		 */
		function (Default) {

			describe('Default Router', function () {

				it('should be an instance of Default Router', function () {
					var router = new Default();

					expect(router).to.be.an.instanceof(Default);
				});

				it('should have more test written', function () {
					//noinspection BadExpressionStatementJS
					//TODO implement me
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
