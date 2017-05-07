const describe = require("mocha").describe;
const it = require("mocha").it;
const expect = require("chai").expect;
const value = require("../modules/01-example");

module.exports = function() {
	describe("01: Test Example |", function() {
		it("Should export a variable with the value 'testing'", function() {
			expect(value).to.equal("hello");
		});
	});
};
