/**
 * Created by david on 29/06/15.
 */
'use strict';

var a = 1;

a++;

console.log('a ' + a);


console.log('ssss');


var array = [-7, 1, 5, 2, -4, 3, 0];

var cond1 = array[0] + array[1] + array[2] === array[4] + array[5] + array[6],
	cond2 = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] === 0;


console.log('Cond1' + cond1 + 'Cond2' + cond2);


var equi1 = function (A, n) {

	var k,
		m,
		lsum,
		rsum;

	for (k = 0; k < n; ++k) {
		lsum = 0;
		rsum = 0;
		for (m = 0; m < k; ++m) {
			lsum += A[m];
		}
		for (m = k + 1; m < n; ++m) {
			rsum += A[m];
		}
		if (lsum === rsum) {
			return k;
		}
	}
	return -1;
};

var equi2 = function (arr, n) {

	if (n === 0) {
		return -1;
	}

	var sum = 0,
		i;

	for (i = 0; i < n; i++) {
		sum += arr[i];
	}

	var sumLeft = 0;

	for (i = 0; i < n; i++) {

		var sumRight = sum - sumLeft - arr[i];

		if (sumLeft === sumRight) {
			return i;
		}

		sumLeft += arr[i];
	}

	return -1;
};


console.log('Equilibrium ' + equi1(array, 6));
console.log('Equilibrium ' + equi2(array, 6));



