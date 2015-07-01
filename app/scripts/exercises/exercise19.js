/**
 * Created by david on 29/06/15.
 *
 * Fish
 *
 * N voracious fish are moving along a river. Calculate how many fish are alive.
 *
 */
'use strict';


var array1 = [4, 3, 2, 1, 5],
	array2 = [0, 1, 0, 0, 0];


function solution(sizes, directions) {

	var N = sizes.length,
		stack = {
			isEmpty: function () {
				return this.elements.length === 0;
			},
			getLastElement: function () {
				return this.elements[this.elements.length - 1];
			},
			elements : [],
			pop : function() {
				this.elements.pop();
			},
			push: function (value) {
				this.elements.push(value);
			},
			size: function() {
				return this.elements.length;
			}
		};


	for (var i = 0; i < N; i++) {

		var size = sizes[i],
			dir = directions[i];

		if (stack.isEmpty()) {
			stack.push(i);
		} else {
			while (!stack.isEmpty() && dir - directions[stack.getLastElement()] === -1 && sizes[stack.getLastElement()] < size) {
				stack.pop();
			}

			if (stack.isEmpty()) {

				stack.push(i);
			} else {
				if (dir - directions[stack.getLastElement()] !== -1) {
					stack.push(i);
				}
			}
		}
	}

	return stack.size();
}


var sol1 = solution(array1, array2),
	cond1 = (sol1 === 2);


console.log('solution ' + sol1 + ' sss ' + cond1);
console.assert(cond1);

