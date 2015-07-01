/**
 * Created by david on 01/07/15.
 */

'use strict';

window.myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];


//var A = [2, 3, 1, 5],
//	A4 = [2, 3, 1, 4],
//	A2 = [2, 5, 3, 7, 8, 6, 4],
//	A3 = [1, 2, 3, 4, 5, 19, 7, 8, 9, 10, 12, 14, 15, 17, 18, 6];


//var sol1 = solution(A);
//var sol2 = solution(A2);
//var sol3 = solution(A3);
//var sol4 = solution(A4);
//
//console.log('solution ' + sol1 + ' sss ' + (sol1 === 4));
//console.log('solution ' + sol2 + ' sss ' + (sol2 === 1));
//console.log('solution ' + sol3 + ' sss ' + (sol3 === 11));
//console.log('solution ' + sol4 + ' sss ' + (sol4 === 5));


//The LIFO stack
//
//It is always difficult to know which stack is the most basic but the LIFO or Last In First Out stack is perhaps the most commonly used. A simple array object already has the two basic methods needed to create a LIFO stack push and pop. The push method will add any object to the top of the stack and the pop method will remove it. To treat an array as a LIFO stack you simply create an instance and use push and pop.
//	For example:
//	var stack=new Array();
//stack.push("A);
//stack.push("B");
//stack.push("C"
//alert(stack.pop());
//alert(stack.pop());
//alert(stack.pop());


//var stack = [];
//stack.push(2);       // stack is now [2]
//stack.push(5);       // stack is now [2, 5]
//var i = stack.pop(); // stack is now [2]
//alert(i);            // displays 5
//
//var queue = [];
//queue.push(2);         // queue is now [2]
//queue.push(5);         // queue is now [2, 5]
//var i = queue.shift(); // queue is now [5]
//alert(i);              // displays 2


//Array empty
//arrayName.length > 0


//Array.max = function (array) {
//	return Math.max.apply(Math, array);
//};
//Math.max.apply(null, valuesCounter)


window.elementWithHighestOccurrence = function mode(array) {

	if (array.length === 0) {

		return null;
	}
	var modeMap = {};
	var maxEl = array[0], maxCount = 1;
	for (var i = 0; i < array.length; i++) {
		var el = array[i];
		if (modeMap[el] === null) {

			modeMap[el] = 1;
		}
		else {
			modeMap[el]++;
		}
		if (modeMap[el] > maxCount) {
			maxEl = el;
			maxCount = modeMap[el];
		}
	}
	return maxEl;
};


window.arrayMin = function (arr) {
	var len = arr.length, min = Infinity;
	while (len--) {
		if (arr[len] < min) {
			min = arr[len];
		}
	}
	return min;
};

window.arrayMax = function (arr) {
	var len = arr.length, max = -Infinity;
	while (len--) {
		if (arr[len] > max) {
			max = arr[len];
		}
	}
	return max;
};

window.arrayMaxIdx = function (arr) {
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
