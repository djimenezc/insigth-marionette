/**
 * Created by david on 29/06/15.
 */
'use strict';


var array = [-5, -3, -1, 0, 3, 6];


function solution(A) {

	var absoluteValues = [],
		N = A.length,
		counter = 0;

	for (var i = 0; i < N; i++) {

		if (absoluteValues[Math.abs(A[i])] !== 1) {
			counter++;
		}
		absoluteValues[Math.abs(A[i])] = 1;
	}

	return counter;
}


var sol1 = solution(array);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 5));

