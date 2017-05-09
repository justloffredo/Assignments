const describe = require("mocha").describe;
const before = require("mocha").before;
const it = require("mocha").it;
const expect = require("chai").expect;

const start = require("../modules/06-events");

module.exports = function() {
	describe("06: Events |", function() {
		describe("CoffeeShop |", function() {
			const order = "macchiato";
			const method = "cash";
			let cs;

			before(function() {
				cs = start(order, method);
			});

			it("Should be taking an order immediately", function(done) {
				setTimeout(function() {
					expect(cs.isTakingOrder).to.be.true;
					done();
				}, 10);
			});

			it("Should start taking payment after taking the order", function(done) {
				cs.on("order-taken", function(evOrder) {
					expect(evOrder).to.equal(order);
					setTimeout(function() {
						expect(cs.isPaying).to.be.true;
						done();
					}, 10);
				});
			});

			it("Should start making the order after it's taken", function(done) {
				cs.on("order-paid", function(evPaymentMethod) {
					expect(evPaymentMethod).to.equal(method);
					setTimeout(function() {
						expect(cs.isMakingCoffee).to.be.true;
						done();
					}, 10);
				});
			});

			it("Should start delivering the order after it's made", function(done) {
				cs.on("coffee-made", function(coffee) {
					expect(coffee).to.equal("cup of " + order);
					setTimeout(function() {
						expect(cs.isServing).to.be.true;
						done();
					}, 10);
				});
			});

			it("Should serve the coffee at some point", function(done) {
				cs.on("coffee-served", function() {
					done();
				});
			});
		});
	});
};
