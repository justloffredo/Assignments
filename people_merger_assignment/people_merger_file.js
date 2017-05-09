const fs  = require('fs');

const people1 = require('./people1.json');
const people2 = require('./people2.json');

let output = "";

let peopleMerged = people1.concat(people2).sort();

for (var i = 0; i < peopleMerged.length; i++) {
	output += peopleMerged[i] + "\n";
}





		fs.writeFile('./sorted_people.txt', output, (err) => {
		  if (err) throw err;});




//
// people1.concat(people2)
// .map(item => item.toLowerCase())
// .sort()
// .join('\n');
