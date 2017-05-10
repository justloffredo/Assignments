const EventEmitter = require("events");

class CoffeeShop extends EventEmitter {
	constructor() {
		super();
		this.order = null;
		this.coffee = null;
		this.paymentMethod = null;
		this.isTakingOrder = false;
		this.isMakingCoffee = false;
		this.isPaying = false;
		this.isPaid = false;
		this.isServing = false;
		this.isServed = false;
	}

	takeOrder(order) {
		this.isTakingOrder = true;

		setTimeout(function() {
			this.order = order;
			this.emit("order-taken", this.order);
		}.bind(this), 100 + Math.random() * 200);
	}

	takePayment(method) {
		this.isPaying = true;

		setTimeout(function() {
			this.isPaid = true;
			this.paymentMethod = method;
			this.emit("order-paid", method);
		}.bind(this), 100 + Math.random() * 200);
	}

	makeCoffee() {
		if (!this.isPaid) {
			throw new Error("Coffee hasn't been paid for!");
		}

		if (!this.order) {
			throw new Error("No order has been taken!");
		}

		this.isMakingCoffee = true;

		setTimeout(function() {
			this.coffee = "cup of " + this.order;
			this.emit("coffee-made", this.coffee);
		}.bind(this), 100 + Math.random() * 200);
	}

	serveCoffee() {
		if (!this.coffee) {
			throw new Error("Coffee hasn't been made yet!");
		}

		this.isServing = true;

		setTimeout(function() {
			this.isServed = true;
			this.emit("coffee-served", this.coffee);
		}.bind(this), 100 + Math.random() * 200);
	}
}

const cs = new CoffeeShop();
module.exports = cs;
