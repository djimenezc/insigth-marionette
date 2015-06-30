/**
 * Created by david on 29/06/15.
 */
'use strict';


var array1 = [23171, 21011, 21123, 21366, 21013, 21367];


function solution(array) {


	var result = 0,
		n = array.length,
		maxEndingHere = 0,
		minPrice = array[0];

	if (n === 1 || n === 0) {
		return 0;
	}

	for (var i = 0; i < n; i++) {
		maxEndingHere = Math.max(0, array[i] - minPrice);
		minPrice = Math.min(minPrice, array[i]);
		result = Math.max(maxEndingHere, result);
	}

	return result;
}


var sol1 = solution(array1);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 356));

