// Events exist both in the browser, and in node. We can use events to handle
// asynchronous actions, much like callbacks.
//
// If any of this is unfamiliar, revisit the Event Emitter slides from class:
// https://github.com/wbobeirne/nycda-modules/blob/master/modules-5-2/node-js-event-emitter.pdf

const CoffeeShop = require("./06/coffee-shop");

/*
	Above, we imported the CoffeeShop singleton. This is a
	representation of a coffee shop we're in charge of. In
	addition ot having all of the regular EventEmitter
	methods, it has the following custom methods:

	takeOrder(order) - Takes in a string order, ("coffee",
	"latte", "macchiato" etc.) and after taking some time
	to write it down, emits an "order-taken" event.

	takePayment(method) - Takes in a string payment method
	("cash", "credit" etc.) Will error out if there's no
	order taken yet.  After taking some time to process the
	payment, emits an "order-paid" event.

	makeCoffee() - No arguments, makes the current order
	that has been taken AND paid for. Will error out if
	there is no order, or it hasn't been paid for. After
	making the coffee, emits a "coffee-made" event.

	serveCoffee() - No arguments, serves whatever coffee
	is currently made. Will error out if no coffee has
	been made. After some time to serve, emits a
	"coffee-served" event.

	********************************************************

	Your job is to take, pay for, make, and serve one
	item to a customer, once this exported function fires.
	Making coffee items takes a random amount of time, so
	you _cannot_ use setTimeout, you must use the events
	that fire to do things in the correct order. Good luck!

	Hint: CoffeeShop is a singleton, _not_ a class. You
	don't need to make a new one, just call methods and
	bind event listeners to it.
*/

module.exports = function(order, paymentMethod) {
	// ***** START EDITING HERE ***** //

	// ***** STOP EDITING HERE ***** //

	return CoffeeShop;
};
