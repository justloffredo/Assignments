const describe = require("mocha").describe;
const it = require("mocha").it;
const expect = require("chai").expect;

const fns = require("../modules/04-for-loops");

module.exports = function() {
	describe("04: For Loops |", function() {

		describe("sumNumbers(array) |", function() {
			const examples = [
				[[1, 2, 3], 6],
				[[55, 27, 23], 105],
				[[100, -100], 0],
				[[28, 42, 99, 12852, -2829], 10192],
			];

			it("Should return a number, given an array", function() {
				const res = fns.sumNumbers([0]);
				expect(res).to.be.a("number");
			});

			examples.forEach(function(ex) {
				it(`Should return ${ex[1]}, given [${ex[0].join(", ")}]`, function() {
					const res = fns.sumNumbers(ex[0]);
					expect(res).to.equal(ex[1]);
				});
			});
		});

		describe("onlyOdds(array) |", function() {
			const examples = [
				[[7, 8, 9, 22], [7, 9]],
				[[5, 6, 100, 101], [5, 101]],
				[[2, 4, 6], []],
				[[-8, -9, 20, 53], [-9, 53]],
			];

			it("Should return an array, given an array", function() {
				const res = fns.onlyOdds([]);
				expect(res).to.be.instanceof(Array);
			});

			examples.forEach(function(ex) {
				it(`Should return [${ex[1].join(", ")}], given [${ex[0].join(", ")}]`, function() {
					const res = fns.onlyOdds(ex[0]);
					expect(res).to.deep.equal(ex[1]);
				});
			});
		});

		describe("makeRange(number, number) |", function() {
			const examples = [
				[0, 6, [0, 1, 2, 3, 4, 5, 6]],
				[4, 6, [4, 5, 6]],
				[37281, 37282, [37281, 37282]],
				[-20, -17, [-20, -19, -18, -17]],
				[10, 5, []],
			];

			it("Should return an array, given a number and a number", function() {
				const res = fns.makeRange(1, 2);
				expect(res).to.be.instanceof(Array);
			});

			examples.forEach(function(ex) {
				it(`Should return [${ex[2].join(", ")}], given ${ex[0]} and ${ex[1]}`, function() {
					const res = fns.makeRange(ex[0], ex[1]);
					expect(res).to.deep.equal(ex[2]);
				});
			});
		});
	});
};
