const refill = require("./refill");

function callback(err, msg){
	if (err) {
		console.log(err);
		process.exit(1);
	}
	else {
		console.log(msg);
	}
}




	refill("iced tea", true, callback);
	refill("lemonade", false, callback);
	//refill(null, null, callback);
	refill("water", true, callback);
