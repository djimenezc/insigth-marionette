/**
 * Created by david on 01/07/15.
 */
/**
 * Created by david on 29/06/15.
 */
'use strict';


var A = [5, 5, 1, 7, 2, 3, 5],
	X = 5,
	A2 = [5,5,2,1,2],
	A3 = [5,2];


function solution(X, A) {


	var K = -1,
		N = A.length,
		equalsX = 0;

	//If the array has less than two elements the index K doesn't make sense
	if(N < 2) {
		return -1;
	}

	for (var i = 0; i < N; i++) {

		if (A[i] === X) {
			equalsX++;
		}

		var differentX = 0;

		//Get how many elements are different in the [K..N-1] slice
		for (var j = i + 1; j < N; j++) {
			if (A[j] !== X) {
				differentX++;
			}
		}

		//if the elements equal to X are the same to the element not equal to X set K to i+1
		if(differentX === equalsX) {
			K = i + 1;
		}
	}

	return K;
}

//var sol1 = solution(X, A);
//var cond1 = (sol1 === 4);
//
//console.log('solution ' + sol1 + ' sss ' + cond1);
//console.assert(cond1);
//
//var sol2 = solution(X, A2);
//var cond2 = (sol2 === 3);
//
//console.log('solution ' + sol2 + ' sss ' + cond2);
//console.assert(cond2);

var sol3 = solution(X, A3);
var cond3 = (sol3 === 1);

console.log('solution ' + sol3 + ' sss ' + cond3);
console.assert(cond3);
