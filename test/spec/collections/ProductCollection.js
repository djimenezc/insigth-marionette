//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
	'use strict';

	var root = this;

	root.define([
			'collections/ProductCollection'
		],
		function (Productcollection) {

			describe('Productcollection Collection', function () {

				it('should be an instance of Productcollection Collection', function () {
					var ProductCollection = new Productcollection();
					expect(ProductCollection).to.be.an.instanceof(Productcollection);
				});

				it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
				});
			});

		});

}).call(this);
