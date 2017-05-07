
var colors = require('colors/safe');

var lines = 10;

var print = function(num, symbol) {
	var output = '';
	for (var i = 0; i < num; i++) {
		output += symbol;
	}
	console.log(colors.rainbow(output));
};

module.exports = print;
