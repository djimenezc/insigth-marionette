/**
 * Created by david on 29/06/15.
 */
'use strict';


var N = 30;


function solution(N) {


	var minPer = Number.MAX_VALUE;

	for (var i = 1; i * i <= N; i++) {

		if (N % i === 0) {
			minPer = Math.min(minPer, 2 * (N / i + i));
		}
	}

	return minPer;
}


var sol1 = solution(N);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 22));

