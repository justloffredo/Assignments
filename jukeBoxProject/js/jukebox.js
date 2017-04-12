/* globals $ */


var jukebox = {
	songs:[],
	activeSong: null, // This will be a song object later
	volume: 100,
	isPlaying:  false,
	dom: {},

// Run this function to start the whole jukebox off
	start: function() {
		this.dom = {

			prev: $(".jukebox-controls-prev"),
			play: $(".jukebox-controls-play"),
			pause: $(".jukebox-controls-pause"),
			next: $(".jukebox-controls-next"),
			mute: $(".jukebox-controls-mute"),
			shuffle: $(".jukebox-controls-shuffle"),
			repeat: $(".jukebox-controls-repeat"),
			songs: $(".jukebox-songs"),
		};
	},

	/* 		this.addsong.push(new Song("./song/"))*/


	listen: function() {
		this.dom.prev.on("click", function() {
			this.previous();
		}.bind(this));

		this.dom.play.on("click", function() {
			this.play();
		}.bind(this));

		this.dom.pause.on("click", function() {
			this.pause();
		}.bind(this));

		this.dom.next.on("click", function() {
			this.next();
		}.bind(this));

		this.dom.mute.on("click", function() {
			this.mute();
		}.bind(this));

		this.dom.shuffle.on("click", function() {
			this.shuffle();
		}.bind(this));

		/* this.dom.repeat.on("click", function() {
			console.log(this);
			this.setVolume(0);
		}.bind(this)); */
	},

	previous: function() {
		console.log	("Previous button is active");
	},

	play: function(song) {
		console.log("Play button is active");
	},


	pause: function() {
		console.log("Pause button is active");
	},

	next: function() {
		console.log("next button is active");
	},

	mute: function() {
		console.log("Mute button is active");
	},

	shuffle: function() {
		console.log("shuffle button is active");
	},

	repeat: function() {
		console.log("repeat button is active");
	},
};




/* class Song {
	constructor(file) {
		this.file = file;
	}

	render() {
		return $('div class= "jukebox-songs-song"></div>')
	}

	play() {

	}

	pause(){


	}

	stop(){


	}
}*/



/* $(document).ready(function() {
	jukebox.start
)}; */
