/* globals $ */

// Wrap everything we're about to do in a document ready function//
$(document).ready(function()) {

	/*Cache our jQuery element selectors. We'll need:
	// * The todo list
	// * The addform input
	// * The addform form element*/
	var $list = $(".todo list");
	var $input = $(".todo addform-input");
	var $form = $(".todo addform");
	/* First we should add the ability to click on list items to cross them out.
	// Clicking on a list item should add the "crossed" class to it. Remember to
	// use a child selector with the event, because we'll be adding todos later.*/


	$list.on("click", "todo-list-item", function(event) {
		$(event.currentTarget).addClass("crossed");
	});


		/* You can grab the todo we clicked by using the event object*/



	// Next, we'll want to bind to the form's submit event. When the form is
	// submitted, we'll want to add a new todo. Don't forget to prevent default
	// the event, or it'll refresh the page!
	$form.on("submit", function(event) {
		event.preventDefault();


		// Grab the text from the input element using the `val()` function, and make
		// a new todo element with that text. Alert the user of an error if they
		// entered no text.
		var text = input.val();

		if (!text) {
			alert("You must enter text!");
			return;
		}

		var $listitem = $('<li class="todo-list-item">' + text '</li>');

		// Insert the new element in the todo list
		$list.append($listItem);

		// Don't forget to clear out the value of the input! Hint: if we can get
		// html using html(), and set it using html(string), maybe val() works
		// in a similar way? Read the docs!
		$input.val("");
	});

});
// And that's it! You're done! Got some free time? Try some of the BONUS tasks
// below to further enhance your application.

// BONUS: Convert all of your code in to a TodoApp singleton. Split out what it
// does in to separate functions.

// BONUS: Toggle the crossed class instead of adding it, to allow for
// uncrossing of list items.

// BONUS: Add shift-clicking to remove todos. Check the event object and see
// if there's something that tells us what keys they're holding?

// BONUS: Don't allow them to add the same todo twice, warn them if they try to

// BONUS: Make the title editable without having to change the HTML file
