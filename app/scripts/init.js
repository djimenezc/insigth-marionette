require.config({

    baseUrl: '/scripts',

    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main'],

    shim: {

		'backbone.routefilter': {
			deps: [
				'backbone',
				'backbone.marionette',
				'backbone.extension'
			],
			exports: 'routefilter'
		},
		'backbone.extension': {
			deps: [
				'backbone'
			]
		},
		'marionette.region.extension': {
			deps: [
				'backbone',
				'backbone.marionette'
			],
			exports: 'marionette.region.extension'
		},
		'marionette': {
			deps: [
				'backbone',
				'jquery'
			],
			exports: 'backbone.marionette'
		},
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
		'main': {
			deps: [
				'backbone',
				'backbone.marionette',
				'backbone.routefilter',
				'backbone.extension',
				'marionette.region.extension',
				'bootstrap',
				'config',
				'template/helpers/templateHelpers',
				'template/helpers/i18n',
				'template/helpers/parseJSON',
				'template/helpers/times',
				'template/helpers/recursivepartial',
				'views/layout/VerticalLayout',
				'views/layout/HorizontalLayout'
			]
		}
    },

	map: {
		'*': {
			underscore: 'lodash', // alias lodash as underscore
			'hbs/handlebars': 'handlebars'
		}
	},

    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
		'backbone.routefilter': 'vendor/backbone.routefilter',
		'backbone.extension': 'vendor/backbone.extension',
		'marionette.region.extension': 'vendor/marionette.region.extension',

        /* alias the bootstrap js lib */
        bootstrap: 'vendor/bootstrap',

		moment: '../bower_components/moment/moment',
		lodash: '../bower_components/lodash/dist/lodash',

		/* alias configuration*/
		'config': 'config/app.config',
		'labels': 'locale/locale_en',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: '../templates',

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
