//noinspection Annotator
require.config({
    baseUrl: '../app/scripts',
    //urlArgs: 'cb=' + Math.random(),

    deps: ['backbone',
		'backbone.marionette',
		'backbone.routefilter',
		'marionette.region.extension',
		'templates/helpers/recursivepartial',
		'templates/helpers/templateHelpers',
		'templates/helpers/i18n',
		'templates/helpers/parseJSON',
		'templates/helpers/times'
	],

	shim: {
		'backbone.routefilter': {
			deps: [
				'backbone',
				'backbone.extension'
			],
			exports: 'routefilter'
		},
		'marionette.region.extension': {
			deps: [
				'backbone',
				'backbone.marionette'
			],
			exports: 'marionette.region.extension'
		},

		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	},

	map: {
		'*': {
			underscore: 'lodash', // alias lodash as underscore
			'hbs/handlebars': 'handlebars'
		}
	},

    paths: {
        spec: '../../test/spec', // lives in the test directory

        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        /* backbone plugins */
        'backbone.syphon': '../bower_components/backbone.syphon/lib/amd/backbone.syphon',
        'backbone.iobind': '../bower_components/backbone.iobind/dist/backbone.iobind',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
		'backbone.routefilter': 'vendor/backbone.routefilter',
		'backbone.extension': 'vendor/backbone.extension',
		'marionette.region.extension': 'vendor/marionette.region.extension',

        /* alias the bootstrap js lib */
        bootstrap: 'vendor/bootstrap',
		lodash: '../bower_components/lodash/dist/lodash',
		moment: '../bower_components/moment/moment',

		highcharts: '../bower_components/highcharts/highcharts.src',
		highchartsMore: '../bower_components/highcharts/highcharts-more',
		highchartsExporting: '../bower_components/highcharts/modules/exporting',

		/* alias configuration*/
		'config': 'config/app.config',
		'labels': 'locale/locale_en',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: '../templates',

		application : 'application',

		/* handlebars from the require handlebars plugin below */
		handlebars: '../bower_components/hbs/hbs/handlebars',

		/* require handlebars plugin - Alex Sexton */
		i18nprecompile: '../bower_components/hbs/hbs/i18nprecompile',
		json2: '../bower_components/hbs/hbs/json2',
		hbs: '../bower_components/hbs/hbs'
    },

    hbs: {
        disableI18n: true
    }
});

/* require test suite */
require([
    'jquery',
    'spec/testSuite'
],
function( $, testSuite ) {

    'use strict';

    /* on dom ready require all specs and run */
    $( function() {
        require(testSuite.specs, function() {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }

        });
    });
});
