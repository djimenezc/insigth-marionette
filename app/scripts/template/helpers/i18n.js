/**
 * Created by djimenezc on 22/05/2014.
 */
define([
		'backbone',
		'handlebars',
		'helpers/i18n'
	],
	function (Backbone, Handlebars, i18n) {
		'use strict';

		Handlebars.registerHelper('i18n',
			/**
			 * Helper functionality to provide 118n support in handlebars wrapping access tp util/i18n
			 *
			 * Extra optional parameters are supported to be passed as data attributes for string parameter formatting
			 * For example assuming the label "prefix.myLabel" to be translated = 'Error: {0} is {1}'
			 * the following expression:
			 *
			 * {{i18n "myLabel" "prefix." "name" "invalid"}}
			 *
			 * will be translated to:
			 * "Error: name is invalid"
			 *
			 * @param translation
			 * @returns {String}
			 */
			function (translation) {
				var data = [];
				var prefix = '';
				if (arguments.length > 2) {
					prefix = arguments[1];
				}
				if (arguments.length > 3) {
					for (var i = 2; i < arguments.length - 1; i++) {
						data.push(arguments[i]);
					}
				}
				return i18n.translate(prefix + translation, data, prefix + translation);
			});

	});
