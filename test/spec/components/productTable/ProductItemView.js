//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'components/controls/productTable/ProductItemView'
		],
		function (Productitemview) {

			describe('Productitemview Itemview', function () {

				it('should be an instance of Productitemview Itemview', function () {
					var ProductItemView = new Productitemview();
					expect(ProductItemView).to.be.an.instanceof(Productitemview);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection JSUnresolvedVariable,BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
