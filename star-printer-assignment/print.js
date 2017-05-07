
var colors = require('colors/safe');

function printStars (starcount) {
	let stars = "";

	for (let i = 0; i < starcount; i++) {
		stars = stars + " *";
	}
	console.log(stars);

	if (starcount > 1) {
		setTimeout(function() {
			printStars(starcount - 1);
		}, 1000);
	}
}


printStars(10);
