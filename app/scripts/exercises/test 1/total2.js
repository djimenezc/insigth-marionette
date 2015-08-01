/**
 * Created by david on 29/06/15.
 */
'use strict';


var A1 = [1, 0, 0, 1, 1],
	A11 = [1, 1, 0, 1];
//X1 = 9,
//A2 = [1,0,0,1,1,1],
//X2 = -23;


function solution(A) {


	var N = A.length;

	//Calculate the number in base 10
	var calculateNumber = function (A) {
		var result = 0;

		for (var i = 0; i < N; i++) {

			result += A[i] * Math.pow(-2, i);
		}

		return result;
	}

	var SUM = calculateNumber(A);

//Convert to negative binary with negative base
//https://en.wikipedia.org/wiki/Negative_base
	var toNegaBinary = function (number) {
		var Schroeppel2 = 0xAAAAAAAA;
		// Convert to NegaBinary String
		return ( ( number + Schroeppel2 ) ^ Schroeppel2 ).toString(2);
	}

	var negaBinary = toNegaBinary(SUM),
		negaBinaryArray = negaBinary.split(''),
		negaBinaryNumber = calculateNumber(negaBinaryArray);


	return negaBinaryNumber;
}

var sol1 = solution(A1);
var sol2 = solution(A11);
var cond1 = (sol1 === window.arraysEqual(sol1, A11));

console.log('solution ' + sol1 + ' sss ' + cond1);
console.log('solution ' + sol2 + ' sss ' + cond1);
console.assert(cond1);
