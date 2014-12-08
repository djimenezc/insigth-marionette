//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
    'use strict';

    var root = this;

    root.define([
            'views/layout/VerticalLayout'
        ],
        function (Verticallayout) {

            describe('VerticalLayout Layout', function () {

                it('should be an instance of Vertical Layout Layout', function () {
                    var verticalLayout = new Verticallayout();
                    expect(verticalLayout).to.be.an.instanceof(Verticallayout);
                });

                it('should have more test written', function () {
                    //noinspection BadExpressionStatementJS
                    expect(true).to.be.ok;
                });
            });

        });

}).call(this);
