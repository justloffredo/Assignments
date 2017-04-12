
/*
var Website = {
	"title" = "Justins Website"
	"description" = "Singleton Assignment"
}

start: function() {
	console.log(this.title);
	console.log(this.description)
	this.geeting("user");
}

window.addEventListener("resize",function() { this.handleResize)


	greeting: function(name) {
		console.log("Welcome to the website, " + name);
	}

	handleResize: function() {
		console.log("Hey, stop shaking " + this.title + "!");

},
	}

/*Step One
console.log(Website.title)
console.log(Website.description)
Step One*/
/*
Website.greeting("Bob");
*/


/*Exercise 2*/
var clickMe1 = document.getElementById("clickmebutton");
var clickMe2 = document.getElementById("clickmebutton2");
var clickMe3 = document.getElementById("clickmebutton3");

class AlertButton {
	constructor(element, text)
	{this.element = element;
		this.text = text;

		this.element.addEventListener("click", this.handleClick().bind(this));
	},
	handleClick() {
		alert(this.text);
		this.beenClicked = true;
	},
}

var button1 = new AlertButton(clickMe1,"Enter this door");
var button2 = new AlertButton(clickMe2, "Enter the second door");
var button3 = new AlertButton(clickMe3, "Enter the third door");
