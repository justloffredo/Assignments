// Not all code runs in a linear order, and not all code executes at the same
// time. This is called asynchronous code, and can be tricky to manage. Using
// callbacks is a common way to handle asynchronous code, so we'll practice
// some of that here.
//
// If any of what we cover below is unfamiliar, read the following article to
// review async & callbacks (Just the first parts, stop at "Tools..."):
// https://www.pluralsight.com/guides/front-end-javascript/introduction-to-asynchronous-javascript
//
// You can also review the class slides for node-style callbacks here:
// https://github.com/wbobeirne/nycda-modules/blob/master/modules-5-4/node-js-callbacks.pdf


/*
  runAfter is a function that, after some number
	of milliseconds, will fire a callback function.

	setTimeout should be used for waiting

	Input: number, function (takes no arguments)
	Output: none (just fires callback)
*/
function runAfter(ms, cb) {
	// ***** ONLY EDIT IN HERE ***** //
}



/*
  brewTea is a function that takes in a type of
	tea, and calls back with a freshly brewed cup.
	We currently only have "Oolong" and "Green" tea,
	so if they ask for any other type, you should
	hit the callback with an Error object.

	The cup should be an object that looks like:
	  { type: "Oolong", hot: true }

	An error should be made using `new Error(message)`

	Input: string, function (`err, cup` as arguments)
	Output: none (just fires callback)
*/
function brewTea(type, cb) {
	// ***** ONLY EDIT IN HERE ***** //
}



module.exports = {
	runAfter: runAfter,
	brewTea: brewTea,
};
