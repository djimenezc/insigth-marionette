/**
 * Created by david on 29/06/15.
 *
 * PassingCars
 *
 * Count the number of passing cars on the road.
 */
'use strict';


var array = [0, 1, 0, 1, 1];


function solution(A) {

	var N = A.length,
		passing = 0,
		zCount = 0;//how many going east

	for (var i = 0; i < N; i++) {

		if(A[i] === 1) {
			passing +=zCount;
		} else {
			zCount++;
		}
	}

	if (passing > 1e9 || passing < 0) {
		return -1;
	}

	return passing;
}


var sol1 = solution(array),
	cond1 = (sol1 === 5);


console.log('solution ' + sol1 + ' sss ' + cond1);
console.assert(cond1);

