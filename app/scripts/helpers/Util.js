define([
        'communicator',
        'handlebars',
        'momentjs'
    ],
    /**
     * Helper class that encapsulate common functionality which can be accessed from everywhere.
     */
        function (Communicator) {
        'use strict';

        console.log('Building Util helper');
        var helper = {};

        /**
         * Check if a value is contained into an array
         * @param array
         * @param value
         * @returns {boolean}
         */
        helper.isValueInArray = function (array, value) {

            var result = false;

            //noinspection FunctionWithInconsistentReturnsJS,FunctionWithInconsistentReturnsJS
            _.each(array, function (arrayValue) {

                if (arrayValue === value) {
                    result = true;
                    return false;
                }
            });

            return result;
        };

        /**
         * Check if there is intersection between two arrays.
         * @param array1
         * @param array2
         * @returns {boolean}
         */
        helper.isArrayIntersection = function (array1, array2) {

            return array1 && array2 ? _.intersection(array1, array2).length > 0 : false;
        };

        /**
         * Check a date is valid
         * @param date
         * @returns {boolean}
         */
        helper.isValidDate = function (date) {
            return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime()) ? true : false;
        };

        /**
         * Convert a string that match format pattern into a date
         * @param sDate
         * @param format
         * @returns {date} when there is a kind of problem with the transformation it will be return null
         */
        helper.getDateFromString = function (sDate, format) {
            var mDate = moment(sDate, format),
                result = null;

            if (mDate.isValid()) {
                result = mDate.utc().toDate();
            }

            return result;
        };

        /**
         * Return a string with Date object
         * @param dDate
         * @param format
         * @returns {*}
         */
        helper.getStringFromDate = function (dDate, format) {

            var mDate = moment(dDate);

            format = format ? format : 'YYYY/MM/dd hh:mm';

            return mDate.format(format);
        };

        /**
         * Return the number of milliseconds between January 1, 1970 and stringDate.
         * @param stringDate. YYYY/MM/dd hh:mm
         * @returns {number}
         */
        helper.getTime = function (stringDate) {
            return stringDate ? Date.parse(stringDate) : null;
        };

        /**
         * Indicate if a timestamp is greater than other one
         *
         * @param timeStamp1
         * @param timeStamp2
         * @returns {number} 1-> timestamp1 is greater 0-> equal -1-> timestamp1 is lower
         */
        helper.isGreaterTimestamp = function (timeStamp1, timeStamp2) {

            var date1 = new Date(),
                date2 = new Date(date1.getTime());

            date1.setHours(timeStamp1.split(':')[0]);
            date1.setMinutes(timeStamp1.split(':')[1]);
            date2.setHours(timeStamp2.split(':')[0]);
            date2.setMinutes(timeStamp2.split(':')[1]);

            if (date1.getTime() > date2.getTime()) {
                return 1;
            } else if (date1.getTime() < date2.getTime()) {
                return -1;
            } else {
                return 0;
            }
        };

        /**
         * Check if value is equal to the current date
         * @param value has to have displayFormat format
         * @param displayFormat default value 'DD MMM YYYY, HH:mm'
         */
        helper.isToday = function (value, displayFormat) {

            displayFormat = displayFormat ? displayFormat : 'DD MMM YYYY, HH:mm';

            console.log('isToday ' + value);

            var dToday = arguments[2] ? arguments[2] : new Date();
            var oMoment = moment(dToday);

            return value === oMoment.format(displayFormat);
        };

        /**
         * Check if timestamp given in input corresponds to current date
         * @param timestamp
         */
        helper.isTodayByTimestamp = function (timestamp) {
            var date = new Date(timestamp);
            date.setHours(0, 0, 0, 0);
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            return (today.getTime() === date.getTime());
        };

        /**
         * Return the date of today in the display format
         * @param displayFormat the format of the return string, like 'DD MMM YYYY, HH:mm'
         * @returns {*}
         */
        helper.getToday = function (displayFormat) {

            displayFormat = displayFormat ? displayFormat : 'DD MMM YYYY, HH:mm';

            var dToday = arguments && arguments[1] ? arguments[1] : new Date();
            var oMoment = moment(dToday);
            var result = oMoment.format(displayFormat);

            console.log('getToday ' + result);

            return result;
        };

        /**
         * Extract the time (HH:mm) from a string datetime with displayFormatTimeStamp format
         * @param value
         * @param offset in minutes
         * @param displayFormat the format of the value string 'DD MMM YYYY, HH:mm'
         */
        helper.extractTime = function (value, offset, displayFormat) {

            console.log('extractTime');

            var oMoment = moment(value, displayFormat);

            if (offset) {
                oMoment.minutes(oMoment.minutes() + offset);
            }
            oMoment.minutes(helper.getMinutesApplyingStep(oMoment.minutes()));

            return oMoment.format('HH:mm');
        };

        /**
         * Get the interval in which the minutes of the date passed as a parameter is found.
         * The intervals are calculates depends on the defined time step
         * @param minutes
         * @returns {number}
         */
        helper.getMinutesApplyingStep = function (minutes) {

            var stepTime = arguments[1] ? arguments[1] : 15;

            var interval = Math.floor(minutes / stepTime);
            minutes = stepTime * interval;

            return minutes;
        };

        /**
         * Copy all the attributes in a new object
         * @param obj object to be clone
         * @returns {number}
         */
        helper.cloneAttributes = function (obj) {

            if (obj) {
                return JSON.parse(JSON.stringify(obj));
            }

            return obj;
        };

        /**
         * convenience method to set the event function handler given the event, the handler and the scope
         * @param event
         * @param handler
         * @param scope
         */
        helper.setHandler = function (event, handler, scope) {
            if (event) {
                Communicator.mediator.on(event, handler, scope);
            }
        };

        /**
         * calculate the from/to timestamps given the timePeriod
         * @returns {{from, to}}
         * @param timePeriod
         * @param date
         */
        helper.getTimestampsByTimePeriod = function (timePeriod, date) {

            //noinspection JSPotentiallyInvalidConstructorUsage
            var ret,
                now = date ? new moment(date) :new moment(),
                fromObj = new moment(now),
                from,
                to = now.toDate().getTime();

            switch (timePeriod) {
            case 'last5mins':
                fromObj.subtract('minutes', 5);
                break;
            case 'last15mins':
                fromObj.subtract('minutes', 15);
                break;
            case 'lastHour':
                fromObj.subtract('hours', 1);
                break;
            }

            from = fromObj.toDate().getTime();

            ret = {from: from, to: to};

            return ret;
        };


        /**
         * function aimed to build the a param made by multiple items applying URL encoding in order to support param name with special characters.
         * The parameter is build appending the list of items separated by the ',' special character.
         * Note: the ',' separator must not be encoded.
         *
         * Note on encoding functions:
         *  encodeURIComponent() see http://www.w3schools.com/jsref/jsref_encodeuricomponent.asp
         *  encodeURI(): see http://www.w3schools.com/jsref/jsref_encodeuri.asp
         *  Info available also on http://www.javascriptkit.com/jsref/globalfunctions.shtml
         *
         *  URL query parameters are encoded with encodeURIComponent to encode special character such as , ; / ? : @ & = + $ #
         *
         * @param items
         * @returns {string}
         */
        helper.buildURLParamWithArray = function (items) {
            var ret = '';
            var isFirst = true;
            _.each(items, function (item) {
                if (isFirst) {
                    isFirst = false;
                } else {
                    ret += ',';
                }
                ret += encodeURIComponent(item);
            });
            return ret;
        };

        /**
         * function aimed to parse the a param containing multiple values. Aassumption is that the items are encoded with encodeURIComponent in order to support special character as token separator.
         * @param param
         * @returns {Array}
         */
        helper.parseURLParamWithArray = function (param) {
            var ret = [];
            if (param) {
                var items = param.split(',');
                _.each(items, function (item) {
                    ret.push(decodeURIComponent(item));
                }, this);
            }
            return ret;
        };

        /**
         * parse the URL queryString and return an object with the parameters
         * @param queryString
         * @returns {{}}
         */
        helper.parseURLQueryString = function (queryString) {
            var ret = {};

            if (queryString) {
                // Split into key/value pairs
                var queries = queryString.split('&');
                // Convert the array of strings into an object
                _.each(queries, function (query) {
                    var keyValuePair = query.split('=');
                    ret[keyValuePair[0]] = keyValuePair[1];
                });
            }
            return ret;
        };

        /**
         * build a URL string joining URL param contained in an array given in input
         * optionally it encodes param to support all values. encodeURIComponent is used on query parameters to encode special character such as , ; / ? : @ & = + $ #
         * @param items
         * @param paramName
         * @param applyEncoding
         */
        helper.joinURLQueryParams = function (items, paramName, applyEncoding) {
            var ret = '';
            _.each(items, function (item) {
                ret += '&' + paramName + '=' + (applyEncoding ? encodeURIComponent(item) : item);
            }, this);
            return ret;
        };

        /**
         * Retrieve a list of the property names in an object
         * @param obj
         * @returns {Array}
         */
        helper.getKeys = function (obj) {

            var keys = [];

            for (var key in obj) {
                //noinspection JSUnfilteredForInLoop
                keys.push(key);
            }

            return keys;
        };

        /**
         * A function to take a string written in dot notation style, and use it to
         * find a nested object property inside of an object.
         *
         * Useful in a plugin or module that accepts a JSON array of objects, but
         * you want to let the user specify where to find various bits of data
         * inside of each custom object instead of forcing a standardized
         * property list.
         *
         * @param String nested A dot notation style parameter reference (ie "urls.small")
         * @param Object object (optional) The object to search
         *
         * @return the value of the property in question
         */

        helper.getProperty = function( propertyName, object ) {
            var parts = propertyName.split( '.' ),
                length = parts.length,
                i,
                property = object || this;

            for ( i = 0; i < length; i++ ) {
                property = property[parts[i]];
            }

            return property;
        };

        /**
         * function to determine whether the IE browser has a version less than the version given in input
         * @param version the ie version
         * @returns {*|jQuery}
         */
        helper.isIeLessThan = function(version){
            var ret = false;
            switch(version){
            case 10:
                ret = $('html').hasClass('lt-ie10');
                break;
            case 9:
                ret = $('html').hasClass('lt-ie9');
                break;
            }
            return ret;
        };

        Communicator.reqres.setHandler('helper:isValueInArray', helper.isValueInArray);
        Communicator.reqres.setHandler('helper:isArrayIntersection', helper.isArrayIntersection);
        Communicator.reqres.setHandler('helper:isValidDate', helper.isValidDate);
        Communicator.reqres.setHandler('helper:getDateFromString', helper.getDateFromString);
        Communicator.reqres.setHandler('helper:getStringFromDate', helper.getStringFromDate);
        Communicator.reqres.setHandler('helper:getTime', helper.getTime);
        Communicator.reqres.setHandler('helper:isGreaterTimestamp', helper.isGreaterTimestamp);
        Communicator.reqres.setHandler('helper:isToday', helper.isToday);
        Communicator.reqres.setHandler('helper:isTodayByTimestamp', helper.isTodayByTimestamp);
        Communicator.reqres.setHandler('helper:getToday', helper.getToday);
        Communicator.reqres.setHandler('helper:extractTime', helper.extractTime);
        Communicator.reqres.setHandler('helper:getMinutesApplyingStep', helper.getMinutesApplyingStep);
        Communicator.reqres.setHandler('helper:cloneAttributes', helper.cloneAttributes);
        Communicator.reqres.setHandler('helper:setHandler', helper.setHandler);
        Communicator.reqres.setHandler('helper:convertToServerTime', helper.convertToServerTime);
        Communicator.reqres.setHandler('helper:getTimestampsByTimePeriod', helper.getTimestampsByTimePeriod);
        Communicator.reqres.setHandler('helper:buildURLParamWithArray', helper.buildURLParamWithArray);
        Communicator.reqres.setHandler('helper:parseURLParamWithArray', helper.parseURLParamWithArray);
        Communicator.reqres.setHandler('helper:parseURLQueryString', helper.parseURLQueryString);
        Communicator.reqres.setHandler('helper:joinURLQueryParams', helper.joinURLQueryParams);
        Communicator.reqres.setHandler('helper:getKeys', helper.getKeys);
        Communicator.reqres.setHandler('helper:getProperty', helper.getProperty);
        Communicator.reqres.setHandler('helper:isIeLessThan', helper.isIeLessThan);

        return helper;
    });
