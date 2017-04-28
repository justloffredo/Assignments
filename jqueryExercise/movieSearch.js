/* globals $ */

var movieSearch= {
	dom: {},


	start: function() {
		this.dom = {
			input = $(".movieSearch-input"),
			title = $("#title"),
			poster = $("#poster"),

		};

listenbind() {
this.dom.input.on("keyup", function() {
	movieSearch(this.input.val());
	}
}).bind(this);


function movieSearch() {
	$.ajax({
		url: "http://omdbapi.com",
		data: { t: title },
		dataType: "json",
		success: function(res) {
			this.title.html(res.title);
			this.poster.img(res.poster);
		},
	});
}


$(document).ready(function() {
	movieSearch.start();
});
