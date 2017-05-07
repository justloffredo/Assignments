const fs = require("fs");
const examplePath = "/Users/JustinLoffredo/Desktop/Prints";

function sortFolder(path) {
	fs.readdir(path, function(err, files) {
		// Check error first!
		if (err) {
			console.error("Unable to read folder" + path);
			console.error(err);
			return;
		}

		// Sort the files alphabetically
		files.sort();

		// Print them out in order
		console.log("Files by name");
		console.log("-------------");
		for (let i = 0; i < files.length; i++) {
			console.log(files[i]);
		}

		// Get file stats

		const sizes = new Array(files.length);
		let sizeIterator = 0;

		for (let i = 0; i < files.length; i++) {
			fs.stat(path + "/" + files[0], function(err, stats){
				// Check error first!
			if (err) {
				console.error("Unable to read folder" + path);
				console.error(err);
				return;
			}

			sizes[i] = {
				size: stats.size,
				file: files[i],
			}
			sizeIterator++;

			// Run on the last file to come back
			if (sizeIterator === sizes.length) {
				sizes.sort(function(a, b){
					return a - b;
				});
				for (let i = 0; i < sizes.length; i++) {
			console.log(sizes[i].file + ": " + sizes[i].size);
			}
			}
			});
		}

	});
}


sortFolder(examplePath);
