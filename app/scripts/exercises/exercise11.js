/**
 * Created by david on 29/06/15.
 */
'use strict';

/**
 * Question: http://codility.com/demo/take-sample-test/tape_equilibrium

 Question Name: TapeEquilibrium

 The variable of head stores the sum of the heading part of the tape. And the variable of tail stores the sum of tailing part. Then, we move the index from 2nd position to the last 2nd position. Every time we move the index, we adjust both head and tail, compute and compare the difference.
 *
 * http://codesays.com/2014/solution-to-tape-equilibrium-by-codility/
 */

var A = [3, 1, 2, 4, 3];


function solution(A) {

	var i,
		N = A.length,
		tail = 0,
		head = 0,
		minDiff = Number.MAX_VALUE;

	//Sum
	for (i = 0; i < N; i++) {
		tail += A[i];
	}

	for (i = 0; i < N - 1; i++) {

		head += A[i];

		var a1 = head,
			a2 = tail - a1,
			dif = Math.abs(a1 - a2);

		if (dif < minDiff) {
			minDiff = dif;
		}
	}

	return minDiff;
}


var sol1 = solution(A);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 1));

