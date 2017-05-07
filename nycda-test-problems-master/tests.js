const describe = require("mocha").describe;
const afterEach = require("mocha").afterEach;
const beforeEach = require("mocha").beforeEach;
const ex1 = require("./tests/01-example");
const ex2 = require("./tests/02-data-types");
const ex3 = require("./tests/03-conditionals");
const ex4 = require("./tests/04-for-loops");
const ex5 = require("./tests/05-async-callbacks");
const ex6 = require("./tests/06-events");



describe("", function(done) {
	let failedParent = null;
	let hasPrinted = false;

	afterEach(function() {
		if (this.currentTest.state === "failed") {
			failedParent = this.currentTest.parent;
		}
	});

	beforeEach(function() {
		if (failedParent && failedParent !== this.currentTest.parent) {
			this.skip();
		}
	});

	ex1();
	ex2();
	ex3();
	ex4();
	ex5();
	ex6();
});
