/**
 * Created by david on 29/06/15.
 *
 * EquiLeader
 *
 * Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
 *
 * Da bien para la muestra pero obtiene un 0% score
 *
 */
'use strict';


var array1 = [4, 3, 4, 4, 4, 2];


function solution(A) {

	var N = A.length,
		equiLeader = 0;


	var arrayMax = function (arr) {
		var len = arr.length, max = -Infinity;
		while (len--) {
			if (arr[len] > max) {
				max = arr[len];
			}
		}
		return max;
	};

	var arrayMaxIdx = function (arr) {
		var len = arr.length,
			max = -Infinity,
			maxIdx = -1;
		while (len--) {
			if (arr[len] > max) {
				max = arr[len];
				maxIdx = len;
			}
		}
		return maxIdx;
	};

	var getLeader = function (array) {

		var valuesCounter = [];

		for (var i = 0; i < array.length; i++) {

			if (!valuesCounter[array[i]]) {
				valuesCounter[array[i]] = 1;
			} else {
				valuesCounter[array[i]]++;
			}
		}

		var candidate = arrayMaxIdx(valuesCounter),
			candidateOccurrences = arrayMax(valuesCounter);

		//returning 0 means there is no leader
		return  candidateOccurrences > array.length / 2 ? candidate : 0;
	};

	for (var i = 0; i < N; i++) {


		var slice1 = A.slice(0, i + 1),
			slice2 = A.slice(i + 1),
			leader1 = getLeader(slice1),
			leader2 = getLeader(slice2);

		if (leader1 === leader2) {
			equiLeader++;
		}
	}

	return equiLeader;
}


var sol1 = solution(array1),
	cond1 = (sol1 === 2);


console.log('solution ' + sol1 + ' sss ' + cond1);
console.assert(cond1);

