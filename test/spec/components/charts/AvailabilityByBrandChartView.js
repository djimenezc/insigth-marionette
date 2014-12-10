//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'components/charts/AvailabilityByBrandChartView'
		],
		function (Availabilitybybrandchartview) {

			describe('Availability by brand chart View', function () {

				it('should be an instance of Availability by brand chart View', function () {
					var availabilityByBrandChartView = new Availabilitybybrandchartview();
					expect(availabilityByBrandChartView).to.be.an.instanceof(Availabilitybybrandchartview);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
