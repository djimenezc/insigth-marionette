//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'controllers/MessageController'
		],
		function (Messagecontroller) {

			describe('Message Controller', function () {

				it('should be an instance of Message Controller', function () {
					var messageController = new Messagecontroller();
					expect(messageController).to.be.an.instanceof(Messagecontroller);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
