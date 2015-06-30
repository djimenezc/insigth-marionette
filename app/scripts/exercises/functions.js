'use strict';

window.arraysEqual = function (a, b) {

	if (a === b) {
		return true;
	}

	if (a === null || b === null) {
		return false;
	}

	if (a.length !== b.length) {
		return false;
	}

	// If you don't care about the order of the elements inside
	// the array, you should sort both arrays here.

	for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
};


window.buildArray = function (min, max) {
	var result = [];

	for (var k = min; k < 0; k++) {
		result.push(-2);
	}
	for (k = 0; k < max; k++) {
		result.push(1);
	}

	return result;
};

