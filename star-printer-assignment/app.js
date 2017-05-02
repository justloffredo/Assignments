var print = require("./print");


var lines = 10;

var run = function() {
	print(lines,'*');
	lines = lines - 1;
	if (lines > 0) {
		setTimeout(run, 1000);
	}
};
setTimeout(run, 1000);
