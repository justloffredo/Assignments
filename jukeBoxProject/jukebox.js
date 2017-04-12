/* globals $ */


var jukebox = {
	songs:[],
	currentSong: null, // This will be a song object later
	volume: 10,
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

		this.addsong(".songs/Antenna.mp3", {
			title: "Antenna",
			artist: "Bonobo",
		});
		this.addsong(".songs/Caruba.mp3", {
			title: "Caruba",
			artist: "Quantic",
		});
		this.addsong(".songs/Emkay(live).mp3", {
			title: "Emkay(live)",
			artist: "Bonobo",
		});
		this.addsong('.songs/Ten Tigers.mp3', {
			title: "Ten Tigers",
			artist: "Bonobo"
		});

// this ensure that the listenbind function starts up once loading the page
		this.listenbind();
	},

	/* 		this.addsong.push(new Song("./song/"))*/

// this function ensure that the buttons brought in bind to each corresponding fnctn
	listenbind: function() {
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
			this.volumeSetting(0);
		}.bind(this));

		this.dom.shuffle.on("click", function() {
			this.shuffle();
		}.bind(this));

		this.dom.repeat.on("click", function() {
			 this.repeat();
		}.bind(this));
	},

	previous: function() {
		console.log	("Previous button is active");
	},

	play: function(song) {
		this.songplaying;
	},


	pause: function() {
		console.log("Pause button is active");
	},

	next: function() {
		console.log("next button is active");
	},

	shuffle: function() {
		console.log("shuffle button is active");
	},

	repeat: function() {
		console.log("repeat button is active");
	},
// Mute Button refers to volume setting
	volumeSetting: function(volumeLevel) {
		console.log("Volume is set to " + volumeLevel);
	},

	addsong: function(file, meta) {
		//takes new song from our Song class (below)
		var song = new Song(file, meta);
		this.song.push(song);
		this.render();
		return song;

	}

};



//File refers to the audio file you will import
class Song {
	constructor(file) {
		this.file = file;
		this.meta = meta ||
			title: "unknown title"
			artist: "unknown artist"
		};

		this.audio = new Audio(file)
	}

	render() {
		return $('div class= "jukebox-songs-song"></div>')
	}

	play() {
		this.audio.play();

	}

	pause(){
		this.audio.pause();

	}

	stop({
	this.audio.pause();
	this.audio.currentTime = 0;
})


	}
}*/



$(document).ready(function() {
	jukebox.start();
});
