/**
 * Created by david on 29/06/15.
 *
 * PermMissingElem
 * Find the missing element in a given permutation.
 */
'use strict';


var A = [2, 3, 1, 5],
	A4 = [2, 3, 1, 4],
	A2 = [2, 5, 3, 7, 8, 6, 4],
	A3 = [1, 2, 3, 4, 5, 19, 7, 8, 9, 10, 12, 14, 15, 17, 18, 6];


function solution(A) {


	var result = 0,
		N = A.length;

	A.sort(function(a,b) {
		return a - b;
	});

	for (var i = 1; i <= N + 1; i++) {

		if (A[i - 1] !== i) {
			result = i;
			break;
		}
	}

	return result;
}


var sol1 = solution(A);
var sol2 = solution(A2);
var sol3 = solution(A3);
var sol4 = solution(A4);

console.log('solution ' + sol1 + ' sss ' + (sol1 === 4));
console.log('solution ' + sol2 + ' sss ' + (sol2 === 1));
console.log('solution ' + sol3 + ' sss ' + (sol3 === 11));
console.log('solution ' + sol4 + ' sss ' + (sol4 === 5));

