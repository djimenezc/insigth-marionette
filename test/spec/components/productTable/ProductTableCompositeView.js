//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'components/controls/productTable/ProductTableCompositeView'
		],
		function (ProductTableCompositeView) {

			describe('ProductTable  CompositeView', function () {

				it('should be an instance of ProductTable CompositeView', function () {
					var productTableCompositeView = new ProductTableCompositeView();
					expect(productTableCompositeView).to.be.an.instanceof(ProductTableCompositeView);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection JSUnresolvedVariable,BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
