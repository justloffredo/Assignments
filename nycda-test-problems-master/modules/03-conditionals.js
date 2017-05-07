// Because we don't always want to execute the same code in every case, we're
// able to put code inside of blocks that only trigger based on certain
// conditions. These challenges will require you to fill in functions with code
// that performs different operations, depending on some conditions.
//
// If you get stuck on anything, you can review conditionals by going through
// this Codecademy course:
// https://www.codecademy.com/en/courses/conditionals-in-javascript/1/1
// You can stop after module 16, there's no need for switch statements
// or ternary operators here.

/*
	divide is a really simple function, it just divides
	two numbers. But we need to make ABSOLUTELY sure that
	the divisor (the second arugment) isn't zero. Dividing
	by zero is really bad. So make a function that divides
	two arguments, but if the second argument is zero,
	just return zero.

	Input: number, number
	Output: numer

	Examples:
	  divide(2, 2) -> 1
		divide(4, 2) -> 2
		divide(0, 100) -> 0
		divide(100, 0) -> 0
*/

	function divide(number, divisor) {
		let a = number;
		let b = divisor;
		if(b === 0) {
			return(0);
		}
		else {
			return (a / b);
		}
	}


/*
	checkPasscodes is a super-secure function that checks
	if not one, but two passcodes are correct. The passcodes
	are "open" and "sesame". If both are correct, it should
	return "Welcome". If only one is correct, it should return
	"Almost". If neither is correct, it should return "Wrong".

	MAKE SURE YOU USE THE EXACT STRINGS AS SHOWN ABOVE. If
	you use "welcome" or "enter" instead of "Welcome", this
	won't work!

	Input: string, string
	Output: string

	Examples:
		checkPasscodes("sausage", "pizza") -> "Wrong"
		checkPasscodes("open", "szechuan") -> "Almost"
		checkPasscodes("open", "sesame") -> "Welcome"
*/
function checkPasscodes(word1, word2) {
	if (word1 === "open" && word2 === "sesame") {
		return "Welcome";
		}
		else if (word1 === "open" || word2 === "sesame") {
			return "Almost";
		}
		else {
			return "Wrong";
		}

	}


/*
  getGreeting returns a greeting message that's
	appropriate for the time of day. In the morning
	(before 12pm), we say "Good morning". In the afternoon,
	(12pm-before 6pm), we say "Good afternoon". In the evening
	(6pm-midnight), we say "Good evening". If it's not
	sure of the time, we just say "Hello".

	MAKE SURE YOU USE THE EXACT STRINGS AS SHOWN ABOVE. If
	you use "hello" or "hi" instead of "Hello", this won't work!

	Input: number from 0-23 (indicates hour of the day)
	Output: string

	Examples:
	  getGreeting(8) -> "Good morning"
		getGreeting(12) -> "Good afternoon"
	  getGreeting(20) -> "Good evening"
	  getGreeting() -> "Hello"
*/
function getGreeting(hour) {

	if (hour === null || hour === undefined) {
		return "Hello";
	}

 else if (hour >= 0 && hour < 12) {
		return "Good morning";
}

	else if (hour >= 12 && hour < 18) {
		return "Good afternoon";
}

	else if (hour >= 18 && hour <= 24) {
		return "Good evening";
}



}



module.exports = {
	divide: divide,
	checkPasscodes: checkPasscodes,
	getGreeting: getGreeting,
};
