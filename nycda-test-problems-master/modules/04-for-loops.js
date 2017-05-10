// These challenges will cover javascript's `for` loops. For loops are great
// for dealing with repetitive tasks, especially when dealing with all elements
// in an array. If you run in to any problems with the below examples,
// you can go through the Codecademy lesson on Javascript's for loops:
// https://www.codecademy.com/courses/javascript-beginner-en-NhsaT/0/1
// You can also review the class slides at:
// https://github.com/wbobeirne/nycda-modules/blob/master/modules-3-26/wdi-javascript-logic-loops.pdf

/*
	sumNumbers takes an array of numbers as inputs
	and returns the sum of each number in the array.

	Input: Array
	Output: Number

	Example:
		sumNumbers([1, 2, 3]) -> 6
		sumNumbers([5, 5, 5]) -> 15
		sumNumbers([1]) -> 1
*/
function sumNumbers(inArray) {
	let sum = 0;
	for (var i = 0; i <= inArray.length -1; i++) {
		sum += inArray[i];


	}
	return sum;
}


/*
	numberOdds takes an array of numbers as inputs
	and returns a new array of the odd numbers from input.

	If you're not sure how to check if a number is odd
	or even, try googling it, or looking up the modulus
	operator (%)

	Input: Array
	Output: Array

	Example:
	onlyOdds([1, 2, 3]) -> [1,3]
	onlyOdds([1, 3, 5, 7]) -> [1,3,5,7]
	sumNumbers([2, 4, 6]) -> []
*/
function onlyOdds(inArray) {
	let odds = [];
	for (let i = 0; i < inArray.length; i++) {
		if (inArray[i] % 2) {
			odds.push(inArray[i]);
		}
	}
return odds;

	}




/*
	makeRange takes a lower and upper bound and
	returns an array of all the whole numbers between
	lower and upper (inclusive).

	Remember what each of the 3 pieces of a for loop
	do, and where you can use 'lower' and 'upper'
	in it.

	Input: Number, Number
	Output: Array

	Example:
	makeRange(1, 3) -> [1,2,3]
	makeRange(4, 9) -> [4,5,6,7,8,9]
	makeRange(5, 5) -> [5]
	makeRange(7, 5) -> []
*/
function makeRange(lower, upper) {
	let newRange = [];
	for (var i = lower; i <= upper; i++){
		newRange.push(i);
	}
	return newRange;
}

module.exports = {
	sumNumbers: sumNumbers,
	onlyOdds: onlyOdds,
	makeRange: makeRange,
};
