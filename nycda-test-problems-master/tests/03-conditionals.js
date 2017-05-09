const describe = require("mocha").describe;
const it = require("mocha").it;
const expect = require("chai").expect;

const fns = require("../modules/03-conditionals");

module.exports = function() {
	describe("03: Conditionals |", function() {
		describe("divide(number, number) |", function() {
			const examples = [
				[10, 2, 5],
				[20, 5, 4],
				[20, -4, -5],
				[0, 2, 0],
				[100, 0, 0],
			];

			it("Should return a number, given 2 numbers", function() {
				const res = fns.divide(1, 1);
				expect(res).to.be.a("number");
			});

			examples.forEach(function(ex) {
				it(`Should return ${ex[2]}, given ${ex[0]} and ${ex[1]}`, function() {
					const res = fns.divide(ex[0], ex[1]);
					expect(res).to.equal(ex[2]);
				});
			});
		});

		describe("checkPasscodes(string, string) |", function() {
			const examples = [
				["yes", "no", "Wrong"],
				["also", "wrong", "Wrong"],
				["open", "something", "Almost"],
				["something", "sesame", "Almost"],
				["open", "sesame", "Welcome"],
			];

			it("Should return a string, given 2 strings", function() {
				const res = fns.checkPasscodes("sup", "dude");
				expect(res).to.be.a("string");
			});

			examples.forEach(function(ex) {
				it(`Should return "${ex[2]}", given "${ex[0]}" and "${ex[1]}"`, function() {
					const res = fns.checkPasscodes(ex[0], ex[1]);
					expect(res).to.equal(ex[2]);
				});
			});
		});

		describe("getGreeting(number) |", function() {
			const examples = [
				[6, "Good morning"],
				[10, "Good morning"],
				[12, "Good afternoon"],
				[17, "Good afternoon"],
				[18, "Good evening"],
				[23, "Good evening"],
				[0, "Good morning"],
				[null, "Hello"],
			];

			it("Should return a string, given a number", function() {
				const res = fns.getGreeting(1);
				expect(res).to.be.a("string");
			});

			examples.forEach(function(ex) {
				it(`Should return "${ex[1]}", given ${ex[0]}`, function() {
					const res = fns.getGreeting(ex[0]);
					expect(res).to.equal(ex[1]);
				});
			});
		});
	});
};
