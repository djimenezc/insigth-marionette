//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'components/controls/productTable/ProductTableCompositeView'
		],
		function (Producttablecompositeview) {

			describe('Producttablecompositeview Compositeview', function () {

				it('should be an instance of Producttablecompositeview Compositeview', function () {
					var ProductTableCompositeView = new Producttablecompositeview();
					expect(ProductTableCompositeView).to.be.an.instanceof(Producttablecompositeview);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection JSUnresolvedVariable
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
