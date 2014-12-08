define([
		'underscore',
		'moment'
	],
	function () {
		'use strict';

		return {

			isGlobal: function () {

				//TODO determine if is a global client
				return true;
			},

			allowReport : function() {
				return true;
			},

			getReportConfig : function() {
				return [];
			}
		};

	});
