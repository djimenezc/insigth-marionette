//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'controllers/ReportController'
		],
		function (Reportcontroller) {

			describe('Reportcontroller Controller', function () {

				it('should be an instance of Reportcontroller Controller', function () {
					var reportController = new Reportcontroller();
					expect(reportController).to.be.an.instanceof(Reportcontroller);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
