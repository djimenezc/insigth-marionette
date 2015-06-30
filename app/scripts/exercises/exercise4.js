


/**
 * Created by david on 29/06/15.
 */
'use strict';


var array1 = [-3, 1, 2, -2, 5, 6];
var array2 = [-3, 7, 2, -2, 5, 6];
var array3 = [2, 3, 5];
var buildArray = function (min, max) {
	var result = [];

	for (var k = min; k < 0; k++) {
		result.push(-2);
	}
	for (k = 0; k < max; k++) {
		result.push(1);
	}

	return result;
};

function solution(array) {

	var n = array.length,
		tripletMaxes = [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE],
		tripletMins = [Number.MAX_VALUE, Number.MAX_VALUE];

	var tripletProd = function (triplet) {

		return triplet[0] * triplet[1] * triplet[2];
	};

	if (array.length < 3) {
		return 0;
	}

	//getting the three greatest values in the array
	for (var k = 0; k < n; k++) {

		if (array[k] >= tripletMaxes[0]) {
			tripletMaxes[2] = tripletMaxes[1];
			tripletMaxes[1] = tripletMaxes[0];
			tripletMaxes[0] = array[k];
		} else if (array[k] >= tripletMaxes[1]) {
			tripletMaxes[2] = tripletMaxes[1];
			tripletMaxes[1] = array[k];
		} else if (array[k] >= tripletMaxes[2]) {
			tripletMaxes[2] = array[k];
		}

		if (array[k] <= tripletMins[0]) {
			tripletMins[1] = tripletMins[0];
			tripletMins[0] = array[k];
		} else if (array[k] <= tripletMins[1]) {
			tripletMins[1] = array[k];
		}

	}

	return Math.max(tripletProd([tripletMaxes[0], tripletMins[0], tripletMins[1]]), tripletProd(tripletMaxes));
}


var sol1 = solution(array1);
var sol2 = solution(array2);
var sol3 = solution(array3);
var sol4 = solution(buildArray(-100000, 1000000));
var sol5 = solution([]);
//var sol3 = solution('(()');

console.log('solution ' + sol1 + ' sss ' + (sol1 === 60));
console.log('solution ' + sol2 + ' sss ' + (sol2 === 210));
console.log('solution ' + sol3 + ' sss ' + (sol3 === 30));
console.log('solution ' + sol4 + ' sss ' + (sol4 === 4));
console.log('solution ' + sol5 + ' sss ' + (sol5 === 0));
