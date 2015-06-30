/**
 * Created by david on 29/06/15.
 */
'use strict';


var array1 = [3, 5, 3, 2, 3, -1, 3, 3];

//var array2 = [-3, 7, 2, -2, 5, 6];
//var array3 = [2, 3, 5];
//var buildArray = function (min, max) {
//	var result = [];
//
//	for (var k = min; k < 0; k++) {
//		result.push(-2);
//	}
//	for (k = 0; k < max; k++) {
//		result.push(1);
//	}
//
//	return result;
//};

function solution(array) {


	if (array.length === 0) {
		return -1;
	}

	var result = [],
		counter = 0,
		n = array.length,
		candidate = array[0];

	for (var k = 0; k < n; ++k) {

		if (array[k] === candidate) {
			counter++;
		} else {
			if (counter === 0) {
				counter++;
				candidate = array[k];
			} else {
				counter--;
			}
		}
	}

	for (k = 0; k < n; ++k) {

		if (array[k] === candidate) {
			result.push(k);
		}
	}

	if (result.length > array.length / 2) {
		return result[0];
	}
	else {
		return -1;
	}
}


var sol1 = solution(array1);
//var sol2 = solution(array2);
//var sol3 = solution(array3);
//var sol4 = solution(buildArray(-100000, 1000000));
//var sol5 = solution([]);
//var sol3 = solution('(()');

console.log('solution ' + sol1 + ' sss ' + window.arraysEqual(sol1, [0, 2, 4, 6, 7]));
//console.log('solution ' + sol2 + ' sss ' + (sol2 === 210));
//console.log('solution ' + sol3 + ' sss ' + (sol3 === 30));
//console.log('solution ' + sol4 + ' sss ' + (sol4 === 4));
//console.log('solution ' + sol5 + ' sss ' + (sol5 === 0));

