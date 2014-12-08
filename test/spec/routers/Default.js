//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'routers/Default'
		],
		/**
		 * @param Default
		 */
		function (Default) {

			describe('Default Router', function () {

				it('should be an instance of Default Router', function () {
					var Default = new Default();
					expect(Default).to.be.an.instanceof(Default);
				});

				it('should have more test written', function () {
					//noinspection BadExpressionStatementJS
					expect(false).to.be.ok;
				});
			});

		});

}).call(this);
