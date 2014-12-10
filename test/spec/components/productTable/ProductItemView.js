//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'components/controls/productTable/ProductItemView'
		],
		function (ProductItemView) {

			describe('Product ItemView', function () {

				it('should be an instance of Product ItemView', function () {
					var productItemView = new ProductItemView();
					expect(productItemView).to.be.an.instanceof(ProductItemView);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection JSUnresolvedVariable,BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
