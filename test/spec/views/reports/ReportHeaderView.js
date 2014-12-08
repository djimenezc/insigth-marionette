//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'views/reports/ReportHeaderView'
		],
		function (Reportheaderview) {

			describe('Report header View', function () {

				it('should be an instance of Report header View', function () {
					var reportHeaderView = new Reportheaderview();
					expect(reportHeaderView).to.be.an.instanceof(Reportheaderview);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
