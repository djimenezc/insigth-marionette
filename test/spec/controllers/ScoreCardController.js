//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'controllers/ScorecardController'
		],
		function (Scorecardcontroller) {

			describe('Scorecard Controller', function () {

				it('should be an instance of Scorecard Controller', function () {
					var scorecardController = new Scorecardcontroller();
					expect(scorecardController).to.be.an.instanceof(Scorecardcontroller);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
