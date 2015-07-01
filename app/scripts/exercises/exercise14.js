/**
 * Created by david on 29/06/15.
 *
 *
 * FrogRiverOne
 *
 * Find the earliest time when a frog can jump to the other side of a river.
 */
'use strict';


var array = [1, 3, 1, 4, 2, 3, 5, 4];


function solution(X, A) {

	var N = A.length,
		bitmap = [],
		steps = X;

	for (var i = 0; i < N; i++) {

		if (!bitmap[A[i]]) {
			bitmap[A[i]] = true;
			steps--;
		}
		if (steps === 0) {
			return i;
		}
	}

	return -1;
}


var sol1 = solution(5, array);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 6));

