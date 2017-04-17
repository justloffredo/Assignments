/* globals $ */


var jukebox = {
	songs:[],
	currentSong: null, // This will be a song object later
	isntPlaying:  true,
	volume: 100,
	dom: {},
	currentIndex: 0,

// Run this function to start the whole jukebox off
	start: function() {
		this.dom = {

			prev: $(".jukebox-controls-prev"),
			play: $(".jukebox-controls-play"),
			pause: $(".jukebox-controls-pause"),
			stop: $(".jukebox-controls-stop"),
			next: $(".jukebox-controls-next"),
			mute: $(".jukebox-controls-mute"),
			shuffle: $(".jukebox-controls-shuffle"),
			repeat: $(".jukebox-controls-repeat"),
			volume: $(".jukebox-controls-volume"),
			upload: $(".jukebox-header-upload input"),
			songs: $(".jukebox-songs"),
		};

		this.addsong("./songs/Antenna.mp3", {
			title: "Antenna",
			artist: "Bonobo",
		});

		this.addsong("./songs/Caruba.mp3", {
			title: "Caruba",
			artist: "Quantic",
		});

		this.addsong("./songs/Emkay(live).mp3", {
			title: "Emkay(live)",
			artist: "Bonobo",
		});

		this.addsong('./songs/Ten Tigers.mp3', {
			title: "Ten Tigers",
			artist: "Bonobo",
		});
		// Hides the "pause" button
		$(".jukebox-controls-pause").hide();

		// Loads the first song of the array
		this.change(this.songs[0]);



// this ensures that the listenbind and render functions start up once loading the page
	  this.render();
		this.listenbind();
	},

// this function ensure that the buttons brought in bind to each corresponding fnctn
	listenbind: function() {
		this.dom.prev.on("click", function() {
			this.previous();
		}.bind(this));

		this.dom.play.on("click", function() {
			if (this.isntPlaying) {
				this.play();
			}
			else {
				this.pause();
			}
		}.bind(this));

		this.dom.pause.on("click", function() {
			this.pause();
		}.bind(this));

		this.dom.stop.on("click", function() {
			this.stop();
		}.bind(this));

		this.dom.next.on("click", function() {
			this.next();
		}.bind(this));

		this.dom.mute.on("click", function() {
			console.log("this is muting");
			this.volumeSetting(0);
		}.bind(this));

		/* To be worked on..
		 this.dom.shuffle.on("click", function() {
			this.shuffle();
		}.bind(this)); */

		/* To be worked on..
		this.dom.repeat.on("click", function() {
			 this.repeat();
		}.bind(this)); */

		this.dom.volume.on("change", function() {
			this.volumeSetting();
		}.bind(this));

		this.dom.upload.on("change", function() {
			var files = this.dom.upload.prop("files");
			console.log(files);

			for (var i = 0; i < files.length; i++) {
				var file = URL.createObjectURL(files[i]);
				this.addsong(file, {
					title: "Uploaded song",
					artist: "Unknown",
				});
			}
		}.bind(this));
	},

	 render: function() {
		this.dom.songs.html("");
		for (var i = 0; i < this.songs.length; i++) {
			var $song = this.songs[i].render();
			this.dom.songs.append($song);
		}
	},

	change: function(song) {
		if (this.currentSong) {
			this.currentSong.stop();
		}
		this.currentSong = song;
	},

	previous: function() {
		if (this.currentSong) {
			this.currentSong.stop();
			this.currentIndex --;
			if (this.currentIndex < 0) {
				this.currentIndex = this.songs.length - 1;
			}
			this.currentSong = this.songs[this.currentIndex];
			this.currentSong.play();
		}
	},

	play: function(song) {
		if (song) {
			this.change(song);
		}

		if (this.currentSong) {
			this.isntPlaying = true;
			this.currentSong.play();
			$(".jukebox-controls-pause").show();
			$(".jukebox-controls-play").hide();
			this.render();
			return this.currentSong;
		}
	},


	pause: function() {
		this.currentSong.pause();
		$(".jukebox-controls-play").show();
		$(".jukebox-controls-pause").hide();
		this.render();
		return this.currentSong;
	},

	stop: function() {
		this.currentSong.stop();
		$(".jukebox-controls-play").show();
		$(".jukebox-controls-pause").hide();
		this.render();
		return this.currentSong;
	},

	next: function() {
		if (this.currentSong) {
			this.currentSong.stop();
			this.currentIndex ++;
			if (this.currentIndex > this.songs.length - 1) {
				this.currentIndex = 0;
			}
			this.currentSong = this.songs[this.currentIndex];
			this.currentSong.play();
		}
	},

// To be worked on..
	shuffle: function() {
		console.log("Currently shuffling");
	},

	// To be worked on..
	repeat: function() {
		console.log("repeat button is active");
	},




// To be worked on..
	volumeSetting: function() {

	},

	addsong: function(file, meta) {
		// takes new song from our Song class (below)
		var song = new Song(file, meta);
		this.songs.push(song);
		this.render();
		return song;
	},

};



// File refers to the audio file you will import
class Song {
	constructor(file, meta) {
		this.file = file;
		this.meta = meta || {
			title: "Unknown title",
			artist: "Unknown artist",
		};
		this.audio = new Audio(file);
	}


	render() {
		var $song = $('<div class= "jukebox-songs-song"></div>');
		$song.append('<div class= "jukebox-songs-song-pic"></div>');
		$song.append('<div class= "jukebox-songs-song-title">' + this.meta.title + '</div>');
		$song.append('<div class= "jukebox-songs-song-artist">' + this.meta.artist + '</div>');
		$song.data("song", this);
		return $song;
	}

	play() {
		this.audio.play();
	}

	pause() {
		this.audio.pause();
	}

	stop() {
		this.audio.pause();
		this.audio.currentTime = 0;
	}
}




$(document).ready(function() {
	jukebox.start();
});
