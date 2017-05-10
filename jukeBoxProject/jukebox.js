/* globals $, SC */


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
			import: $(".jukebox-header-import input"),
			input: $(".soundcloud-submit-field"),
			submit: $(".soundcloud-submit-button"),

			songs: $(".jukebox-songs"),
		};

		SC.initialize({ client_id: "fd4e76fc67798bfa742089ed619084a6" });

		this.addsong("./songs/Antenna.mp3", {
			title: "Antenna",
			artist: "Bonobo",
			genre: "Electronic",
			image: "./images/antenna.jpg",
			userlink: "https://soundcloud.com/bonobo",
			songlink: "https://soundcloud.com/bonobo/antenna",
		});

		this.addsong("./songs/Caruba.mp3", {
			title: "Caruba",
			artist: "Quantic",
			genre: "Electronic",
			image: "./images/curuba.jpg",
			songlink: "https://soundcloud.com/quantic/curuba",
			userlink: "https://soundcloud.com/quantic",

		});

		this.addsong("./songs/Emkay(live).mp3", {
			title: "Emkay(live)",
			artist: "Bonobo",
			genre: "Electronic",
			image:"./images/emkay.jpeg",
			userlink: "https://soundcloud.com/bonobo",
			songlink: "https://soundcloud.com/bonobo/emkay-live",
		});

		this.addsong('./songs/Ten Tigers.mp3', {
			title: "Ten Tigers",
			artist: "Bonobo",
			genre: "Electronic",
			image: "./images/ten_tigers.jpeg",
			userlink: "https://soundcloud.com/bonobo",
			songlink: "https://soundcloud.com/bonobo/ten-tigers",
		});

		this.addsong("https://soundcloud.com/viceroymusic/50-cent-disco-inferno-viceroy-jet-life-remix");

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

		this.dom.import.on("change", function() {
			var files = this.dom.import.prop("files");
			console.log(files);

			for (var i = 0; i < files.length; i++) {
				var file = URL.createObjectURL(files[i]);
				this.addsong(file, {
					title: "Imported song",
					artist: "Unknown",
				});
			}
		}.bind(this));

		this.dom.submit.on("click", function() {
			var url = this.dom.input.val();
			console.log("This is working");
			this.addsong(url);
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
		this.render();
		return this.currentSong;
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


/* To be worked on..
	volumeSetting: function(volumeLevel) {
		console.log("This is sliding");
		this.currentSong.volume(this.volumeLevel = this.myvolume.value / 100);
	}, */

	addsong: function(file, meta) {
		// takes new song from our Song class (below)
		var song;

		if (file.indexOf("soundcloud.com") !== -1) {
			song = new SoundCloudSong(file);
		}
		else {
			song = new FileSong(file,meta);
		}

		var $song = song.render();
		this.songs.push(song);
		this.render();
		return song;
	},


};



// File refers to the audio file you will import
class Song {
	constructor() {
		this.file	= null;
		this.meta	= {};
		this.audio	= null;
	}

	render() {
		var $song = $('<div class= "jukebox-songs-song"></div>');

		$song.append('<div class= "jukebox-songs-song-artist">' + this.meta.artist + '</div>');
		$song.append('<div class= "jukebox-songs-song-title">' + this.meta.title + '</div>');
		$song.append('<img class= "jukebox-songs-song-pic" src= ' + this.meta.image + '></img>');
		$song.append('<div class= "jukebox-songs-song-genre">' + this.meta.genre + '</div>');
		$song.append('<a class= "jukebox-songs-song-song-link" href=' + this.meta.songlink + ' target="_blank"> Song Link </a>');
		$song.append('<a class= "jukebox-songs-song-artist-link" href=' + this.meta.userlink + ' target="_blank"> Artist Link </a>');


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

	volume(volumeLevel) {
		this.audio.volume;
	}
}

class FileSong extends Song {
	constructor(file,meta) {
		super();
		this.file = file;
		this.meta = meta || {
			title: "Unknown Title",
			artist: "Unknown Artist",
		};
		this.audio = new Audio(file);
	}
}


class SoundCloudSong extends Song {
	constructor(url) {
		super();
		SC.resolve(url)
		.then(function(song) {
			console.log(song);
			this.meta = {
				title: song.title,
				artist: song.user.username,
				image: song.artwork_url,
				genre: song.genre,
				songlink: song.permalink_url,
				userlink: song.user.permalink_url,
			};
			return song;
		}.bind(this))
	.then(function(song) {
		this.audio = new Audio(song.uri + "/stream?client_id=fd4e76fc67798bfa742089ed619084a6");
	}.bind(this))
	.then(function(song) {
		this.render;
	}.bind(this));
	}
	// render() {
	// 	this.$song.append('<div class= "jukebox-songs-song-artist">' + this.meta.artist + '</div>');
	// 	this.$song.append('<div class= "jukebox-songs-song-title">' + this.meta.title + '</div>');
	// 	this.$song.append('<img class= "jukebox-songs-song-pic" src= ' + this.meta.image + '></img>');
	// 	this.$song.append('<div class= "jukebox-songs-song-genre">' + this.meta.genre + '</div>');
	// 	this.$song.append('<a class= "jukebox-songs-song-song-link" href=' + this.meta.songlink + ' target="_blank"> Song Link </a>');
	// 	this.$song.append('<a class= "jukebox-songs-song-artist-link" href=' + this.meta.userlink + ' target="_blank"> Artist Link </a>');

}
$(document).ready(function() {
	jukebox.start();
});
