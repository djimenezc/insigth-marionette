/**
 * Created by djimenezc on 26/03/14.
 */
define([
    ],
    function () {
        'use strict';

        console.log('Creating i18n helper');

		Insight.labelDefault = 'Label not available';

        return {
            /**
             * Insight locale translator. Receives a string and checks for corresponding object
             * @param translation {String} String to be translated. In format 'xxxx.xxxx.xxxx'. We loop through the nodes and return if found.
             * @param data (Array) String formatting parameters
             * @param defaultLabel {String} default label to return in case the translation cannot be performed
             * @returns {Insight.labels|*} {String} Translated string or default label missing message
             */
            translate: function (translation, data, defaultLabel) {

                var loc = Insight.labels,
                    key = translation ? translation.split('.') : null,
                    label = loc;

                if (key) {
                    _.each(key, function (node) {
                        if (label[node]) {
                            label = label[node];
                        } else {
                            label = Insight.labelDefault;
                        }
                        return label;
                    });
                    if (data && data.length > 0) {
                        for (var i = 0; i < data.length; i++) {
                            var reg = new RegExp('\\{' + i + '\\}', 'gm');
                            label = label.replace(reg, data[i ]);
                        }
                    }

                    //If the label wasn't found and the defaultLabel is present, that will be returned
                    if (defaultLabel && label === Insight.labelDefault) {
                        label = defaultLabel;
                    }

                } else {
                    label = defaultLabel ? defaultLabel : Insight.labelDefault;
                }

                return(label);
            }

        };

    });
