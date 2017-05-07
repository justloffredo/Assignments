const describe = require("mocha").describe;
const it = require("mocha").it;
const expect = require("chai").expect;
const data = require("../modules/02-data-types");

module.exports = function() {
	describe("02: Data Types |", function() {
		it("Should export an object to hold all of the data types", function() {
			expect(data).to.be.a("object");
		});

		it("'string' should be a string", function() {
			expect(data.string).to.be.a("string");
		});

		it("'number' should be a number", function() {
			expect(data.number).to.be.a("number");
		});

		it("'boolean' should be a boolean", function() {
			expect(data.boolean).to.be.a("boolean");
		});

		it("'array' should be an array", function() {
			expect(data.array).to.be.instanceof(Array);
		});

		it("'object' should be an object", function() {
			expect(data.object).to.be.a("object");
		});
	});
};
