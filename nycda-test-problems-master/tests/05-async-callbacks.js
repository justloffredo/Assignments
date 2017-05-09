const describe = require("mocha").describe;
const it = require("mocha").it;
const expect = require("chai").expect;

const fns = require("../modules/05-async-callbacks");

module.exports = function() {
	describe("05: Async Callbacks |", function() {
		describe("runAfter(number, function) |", function() {
			const examples = [100, 500, 1000];

			it("Should not call the callback immediately", function(done) {
				let check = false;
				fns.runAfter(100, function() {
					check = true;
				});

				setTimeout(function() {
					expect(check).to.equal(false);
					done();
				}, 10);
			});

			examples.forEach(function(ex) {
				it(`Should trigger the callback after ${ex}ms`, function(done) {
					const start = Date.now();
					fns.runAfter(ex, function() {
						expect(Date.now() - start).to.be.below(ex + 100);
						done();
					});
				});
			});
		});

		describe("brewTea(string, function) |", function() {
			const examples = [
				["Earl Grey", false],
				["Oolong", true],
				["English Breakfast", false],
				[null, false],
				["Green", true],
			];

			it("Should not brew immediately", function(done) {
				let check = false;
				fns.brewTea("Oolong", function() {
					check = true;
				});

				setTimeout(function() {
					expect(check).to.equal(false);
					done();
				}, 10);
			});

			it("Should fire error callback immediately", function(done) {
				let error = null;
				fns.brewTea("Something", function(err) {
					error = err;
				});

				setTimeout(function() {
					expect(error).to.be.ok;
					done();
				}, 10);
			});

			examples.forEach(function(ex) {
				if (ex[1]) {
					it(`Should brew ${ex[0]} after 1 second`, function(done) {
						const now = Date.now();

						fns.brewTea(ex[0], function(err, tea) {
							expect(err).to.not.be.ok;
							expect(tea).to.be.an("object");
							expect(tea).to.deep.equal({ hot: true, type: ex[0] });
							expect(Date.now() - now).to.be.above(999);
							done();
						});
					});
				}
				else {
					it(`Should return an error for ${ex[0]}`, function(done) {
						fns.brewTea(ex[0], function(err, tea) {
							expect(err).to.be.ok;
							expect(tea).to.not.be.ok;
							expect(err).to.be.instanceof(Error);
							done();
						});
					});
				}
			});
		});
	});
};
