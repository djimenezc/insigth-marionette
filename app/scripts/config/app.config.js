define([],
    function () {
        'use strict';

        if (console.time) {
            console.time('AppStarting');
        } else {
            console.time = function () {
            };
        }

        console.log('Setting up the configuration');

        return {
            'global': {
                'themes': [

                ],
                'appName': 'Insight'
            },
			overviews : {
				'imagingOverview' : {

				}
			}
        };
    });
