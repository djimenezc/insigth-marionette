/**
 * Created by david on 29/06/15.
 *
 * FrogJmp
 */
'use strict';


var X = 10,
	Y = 85,
	D = 30;

function solution(X,Y,D) {

	var result = 0;

	while (result * D + X < Y) {
		result++;
	}

	return result;
}


var sol1 = solution(X,Y,D);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 3));

