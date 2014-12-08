//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
    'use strict';

    var root = this;

    root.define([
            'views/layout/HorizontalLayout'
        ],
        function (Horizontallayout) {

            describe('Horizontal layout Layout', function () {

                it('should be an instance of Horizontal layout Layout', function () {
                    var horizontalLayout = new Horizontallayout();
                    expect(horizontalLayout).to.be.an.instanceof(Horizontallayout);
                });

                it('should have more test written', function () {
                    //noinspection BadExpressionStatementJS
					//TODO implement me
					expect(true).to.be.ok;
                });
            });

        });

}).call(this);
