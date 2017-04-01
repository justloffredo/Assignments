/* 1. To create two dimensional array related to a subject that interests you.
 Output two of the arrays to the console.*/


/* First array with three variables*/
var musiciansG1 = ['Ginger Baker', 'George Clinton', 'Gil Scott-Heron'];
/* Second array with three variables*/
var musiciansG2 = ['Bonobo', 'Vince Staples', 'Run the Jewels'];
/* "Master array"with first array and second array as sub arrays*/
var favoritemusicians = [musiciansG1, musiciansG2];

var favoritemusiciansRefactored = [['Ginger Baker', 'George Clinton',
  'Gil Scott-Heron'], ['Bonobo', 'Vince Staples', 'Run the Jewels']];


/* console.log(favoritemusiciansRefactored[0][2][favoritemusiciansRefactored[0]
[2].length - 1])*/
console.log (favoritemusicians);
console.log (favoritemusicians[0][2]);
console.log (favoritemusicians[1][0]);

/* 2. Declare a function that takes a name as an argument, and returns a new
string that compliments that person. For instance, passing it "Will" would
return "I think that Will is a cool guy." Log the result to the console using
3 different names, but do not use console.log in the function, use the return
value of the function instead! */



function compliments(name) {
  return (name + (" is the most interesting person in the world"));
}

console.log(compliments("Brenna"));
console.log(compliments("Erin"));
console.log(compliments("Justin"));


/* Print the classic "99 bottles of beer on the wall" song to the console, in its
entirety, using a for loop. */

var i = 99;

for (i = 99; i > 0; i--) {
  console.log(i + " bottles of beer on the wall " + i + " bottles of beer. Take"
  +  "one down and pass it around " + (i - 1) + " bottles of beer on the wall.");
}

/* ..Then make a copy of that, and rewrite it to use a
while loop instead. */
var i = 99;
while (i > 0) {
  i--;
  console.log(i + " bottles of beer on the wall " + i + " bottles of beer. Take"
  +  " one down and pass it around " + (i - 1) + " bottles of beer on the wall.");
}

/* Declare a function that takes in an array as an argument, and console logs
out all of its elements backwards. Hint, for loops don't have to start with "for
(var i = 0; i < array.length..." */


var numArray = [1,2,3,4,5,6,7];

function arrayReverse(anyArray) {
    for (i = anyArray.length; i > 0; i--) {
    console.log(anyArray[i - 1]);
}
}
console.log(arrayReverse(numArray));







/* for(i=0; i < musiciansG1.length; i++){
  console.log(musiciansG1[i]) */
