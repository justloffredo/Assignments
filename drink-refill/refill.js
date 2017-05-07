function refill(drinkType, hasIce, cb) {
	if (!drinkType) {
		cb(new Error("Hey, you need a drinkType"));
		return;
	}

	if (drinkType === "iced tea" && !hasIce) {
		cb(new Error("Iced Tea must have ice!!"));
		return;
	}


	setTimeout(function() {
		let msg = "Your glass of " + drinkType;

		if(hasIce) {
			msg+= " with ice";
		}

		msg += " has been refilled";
		cb(null,msg);
	}, 1000);
}



module.exports = refill;
