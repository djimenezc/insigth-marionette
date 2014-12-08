//noinspection ThisExpressionReferencesGlobalObjectJS
(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/ModuleManager'
		],
		function( Modulemanager ) {

			describe('Modulemanager Controller', function () {

				it('should be an instance of Modulemanager Controller', function () {
					var moduleManager = new Modulemanager({
						App : {}
					});
					expect( moduleManager ).to.be.an.instanceof( Modulemanager );
				});

				it('should have more test written', function(){
					//TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );
