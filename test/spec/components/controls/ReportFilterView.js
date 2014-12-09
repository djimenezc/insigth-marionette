//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'views/item/ReportFilterView'
		],
		function (Reportfilterview) {

			describe('Reportfilterview Itemview', function () {

				it('should be an instance of Reportfilterview Itemview', function () {
					var ReportFilterView = new Reportfilterview();
					expect(ReportFilterView).to.be.an.instanceof(Reportfilterview);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
