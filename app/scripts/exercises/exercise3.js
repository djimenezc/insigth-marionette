/**
 * Created by david on 29/06/15.
 */
'use strict';


//var array = [1, 5, 2, 1, 4, 0];


function solution(string) {

	var n = string.length,
		parentheses = 0;

	for (var k = 0; k < n; k++) {

		if (string[k] === '(') {
			parentheses++;
		} else if (string[k] === ')') {
			parentheses--;
			if (parentheses < 0) {
				return 0;
			}
		}
	}

	return parentheses === 0 ? 1 : 0;
}


var sol1 = solution('(()(())())');
var sol2 = solution('())');
var sol3 = solution('(()');

console.log('solution ' + sol1 + ' sss ' + (sol1 === 1));
console.log('solution ' + sol2 + ' sss ' + (sol2 === 0));
console.log('solution ' + sol3 + ' sss ' + (sol3 === 0));
