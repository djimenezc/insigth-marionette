/**
 * Created by david on 29/06/15.
 *
 * PermCheck
 *
 * Check whether array A is a permutation.
 */
'use strict';


var array = [];


function solution(A) {

	var N = A.length;

	A.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < N; i++) {

		if(A[i] !== i +1) {
			return 0;
		}
	}

	return 1;
}


var sol1 = solution(array);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 1));

