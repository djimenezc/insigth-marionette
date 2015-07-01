/**
 * Created by david on 29/06/15.
 */
'use strict';


var A = [1, 3, 7, 9, 9],
	B = [5, 6, 7, 9, 10];


function solution(A, B) {

	var result = 1,
		N = A.length;

	if (N < 1) {

		return 0;
	}

	var prevEnd = B[0];

	for (var i = 0; i < N; i++) {

		if(A[i] > prevEnd) {
			result++;
			prevEnd  = B[i];
		}
	}

	return result;
}


var sol1 = solution(A, B);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 3));

