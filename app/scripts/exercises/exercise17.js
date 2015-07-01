/**
 * Created by david on 29/06/15.
 *
 * Triangle
 *
 * Determine whether a triangle can be built from a given set of edges
 */
'use strict';


var array = [10, 2, 5, 1, 8, 20];


function solution(A) {

	var N = A.length,
		result = 0;

	if (N < 3) {
		return result;
	}

	A.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < N - 2; i++) {

		if (A[i] + A[i + 1] > A[i + 2]) {
			return 1;
		}
	}

	return result;
}


var sol1 = solution(array),
	cond1 = (sol1 === 1);


console.log('solution ' + sol1 + ' sss ' + cond1);
console.assert(cond1);

