/**
 * Created by david on 29/06/15.
 *
 * Distinct
 *
 * Compute number of distinct values in an array.
 */
'use strict';


var array = [2, 1, 1, 2, 3, 1];


function solution(A) {

	var N = A.length,
		result = 0,
		checkedValues = [];


	for (var i = 0; i < N; i++) {

		if(!checkedValues[A[i]]) {
			checkedValues[A[i]] = 1;
			result++;
		}
	}

	return result;
}


var sol1 = solution(array),
	cond1 = (sol1 === 3);


console.log('solution ' + sol1 + ' sss ' + cond1);
console.assert(cond1);

