
/* Singleton Exercise
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


/*Exercise 2
var clickMe1 = document.getElementById("clickmebutton");
var clickMe2 = document.getElementById("clickmebutton2");
var clickMe3 = document.getElementById("clickmebutton3");
Exercise 2*/

/* class AlertButton {
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
var button3 = new AlertButton(clickMe3, "Enter the third door");*/


/* Classes Exercise
class Wordmodifier {
	constructor(word) {
		this.word = word;
	}

	printAllCaps() {
		console.log(this.word.toUpperCase());
	}
}

var englishwordmod = new Wordmodifier('Hello');
var frenchwordmod = new Wordmodifier('Bonjour');
var spanishwordmod = new Wordmodifier('Hola');

englishwordmod.printAllCaps();
frenchwordmod.printAllCaps();
spanishwordmod.printAllCaps();
Classes Exercise */

class Food {
constructor() {
this.juicingmessage = "Juicing";
this.hasbeenjuiced = false;
}

	juice() {
    if (this.hasBeenJuiced) {
      console.log("This has already been juiced!");
    } else {
      console.log(this.juicingMessage);
    }
  }
}


class Fruit extends Food {
	constructor(){
		this.apple = "Apple";
		this.orange = "Orange";
		this.lemon = "Lemon";
		this.banana = "Banana";
		this.strawberry = "Strawberry"
}
sayName() {
	console.log(this.name)
}

this.juicingmessage {
	console.log(juicingmessage + sayName);
}

}

class
