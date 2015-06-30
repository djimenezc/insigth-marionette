/**
 * Created by david on 29/06/15.
 */
'use strict';


var N = 24;


function solution(N) {


	var result = 0,
		i = 1;

	while (i * i < N) {
		if (N % i === 0) {
			result += 2;
		}
		i++;
	}

	if (i * i < N) {
		result++;
	}

	return result;
}


var sol1 = solution(N);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 8));

