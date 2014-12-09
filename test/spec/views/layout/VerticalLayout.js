//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
    'use strict';

    var root = this;

    root.define([
            'views/layout/VerticalLayout'
        ],
        function (VerticalLayout) {

            describe('VerticalLayout Layout', function () {

                it('should be an instance of Vertical Layout Layout', function () {
                    var verticalLayout = new VerticalLayout();
                    expect(verticalLayout).to.be.an.instanceof(VerticalLayout);
                });

                it('should have more test written', function () {
					//TODO implement me
					//noinspection BadExpressionStatementJS
					expect(true).to.be.ok;
                });
            });

        });

}).call(this);
