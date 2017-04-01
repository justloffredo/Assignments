/* Create an HTML page with two buttons that argue with each other.
When one button is clicked, the text "I'm right" should be placed next to it.
When the other button is clicked, the text is replaced with, "No, I'm right!"*/

/* Retreive your elements from the HTML doc*/
var button1 = document.getElementById("button1");
console.dir(button1);
var button2 = document.getElementById("button2");
console.dir(button2);

function onClick(event) {
	button1.innerText = "I'm Right!";
}
function onClick2(event) {
	button2.innerText = "No, I'm Right!";
}

button1.addEventListener("click", onClick);
button2.addEventListener("click", onClick2);


/* Create an HTML page with a large element on the page that says
"Don't hover over me" inside of it. When you hover over the element, send an
alert to the user that says, "Hey, I told you not to hover over me!"*/
/* Retreive your elements from the HTML doc*/
var hover  = document.getElementById("donthovertext");
console.dir(hover);

function onmouseover(event) {
	alert("Hey! I Told You Not to Hover Over ME!!");
}

hover.addEventListener("mouseover", onmouseover);



/* Create an HTML page with javascript that listens for a keypress.
When the user presses that key, the text of the H1 should show the value of the
key they have pressed. Example: If the user presses "J", the text inside the H1
should be "J". */

var header = document.getElementById("keypress");
console.log(event);
function keyPressChange(event) {
	header.innerText = event.key;
}
window.addEventListener("keypress", keyPressChange);

/* Create an HTML page with a form. The form should include inputs for a
username, email, and password as well as a submit button.
In a Javascript file, write code that does the following things:
checks that the password is 12345678
checks that the username contains at least one number
if anything is wrong, send an alert message saying "incorrect"*/

var enterUsername = document.getElementById("inputusername");
var enterEmail = document.getElementById("inputemail");
var enterPassword = document.getElementById("inputpassword");
var form = document.getElementById("form");

function checkPassword(event) {
	if (enterPassword.value === "123456768") {
		return true;
	}
	else {
		return false;
}
}

function checkUsername(event) {
	if (enterUsername.value === ([/0-9/])) {
		return true;
	}
	else {
		return false;
	}
}

form.addEventListener("submit",checkPassword);
form.addEventListener("submit", checkUsername);


function checkForm() {
	if ((checkUsername() && checkPassword()) === true) {
		return true;
	}
	else {
		alert("Incorrect Entry");
	}
}
