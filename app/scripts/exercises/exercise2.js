/**
 * Created by david on 29/06/15.
 */
'use strict';


var array = [1, 5, 2, 1, 4, 0];


function solution(A) {

	var result = 0,
		starts = [],
		ends = [];


	for (var i = 0; i < A.length; i++) {
		starts[i] = i + A[i];
		ends[i] = -( A[i] - i);
	}

	var isGreater = function (a, b) {
		return a > b;
	};

	starts.sort(isGreater);
	ends.sort(isGreater);

	for (i = A.length - 1; i >= 0; i--) {

		var pos = ends.indexOf(starts[i]);

		if (pos >= 0) {

			while (pos < A.length && ends[pos] === starts[i]) {
				pos++;
			}
			result += pos;
		} else {
			for (var j = 0; j < ends.length; j++) {

				if (ends[j] < starts[i]) {
					pos--;
				}
			}

			result += -(pos + 1);
		}
	}

	var sub = A.length * (A.length + 1) / 2;
	result = result - sub;

	result = result > 10000000 ? -1 : result;

	return result;
}


var sol = solution(array);

console.log('solution ' + sol + ' sss ' + (sol === 11));
