/*
Pirple Homework Assignment #2: Variables and Constants
  By Nikolas Roberts
In this assignment I will explain
the differences between
'var', 'let', and 'const'
Describing appropriate use cases
and providing examples
*/

/*
The keyword 'var' is used in JS to declare and define pieces of data within a JavaScript file.
Due to a concept called 'hoisting' variables created with 'var' are lifted up from the scope of where
they are declared, potentially causing unexpected results when executing JS code. In es6 'let' and
'const' provide a more predictable usage of assigning variables. 'let' and 'const are scoped to the 'block'
of code in which they are declared, meaning they are available below that block but not above.
The key difference between 'let' and 'const' is that variables declared with 'let' can be changed
as well as initialized without a definition. 'const' on the other hand must be assigned a value upon
declaration and the reference to that value cannot be changed; this does not necessarily mean the value
can't be mutated, only that the reference to that value may not be reassigned.
*/

// Var Example
// In this example, though the variable is declared within the for loop it is lifted outside of it and is available in the global scope
for (var i = 0; i < 1; i++) {
  var availableGlobally = "I've been hoisted";
}
console.log(availableGlobally); // this will print the variable

function someFunction() {
  console.log('\n someFunction:');
  for (var j = 0; j < 1; j++) {
    console.log('j inside the for loop: ' + j);
  }
  console.log('Outside: ' + j); // j is lifted outside of the for loop and visible is the scope of the surrounding function
}

someFunction();

// var is functionally scoped
// so although the variable 'j'
// is declared within the for loop
// its value is still readable
// within the function, outside the loop
// ________________________________________


// Let Example
for (let k = 0; k < 1; k++) {
  let notGlobal = "I'm staying in here";
}
// console.log(notGlobal); // this will cause a Reference Error

function anotherFunction() {
  console.log('\n anotherFunction:');
  for (let f = 0; f < 1; f++) {
    // This returns the value of 'f' each iteration
    console.log('Inside for loop: ' + f);
  }
  // console.log('Outside: ' + f); 
  // The above line will return undefined
  // since 'f' is declared with let
  // it is scoped solely to the block
  // of code contained in the for loop
  // and is unavailable to the rest of the function
}

anotherFunction();
// ________________________________________



// Const Example

var name = "nico"; // I want to change the value of this variable because the string "nico" is an incorrect spelling
let favColor = "red"; // I also want to change the value of this variable
console.log(`Name: ${name} FavColor: ${favColor}`);
// var (and let) can be reassigned
name = "Niko";
favColor = "White";
console.log(`Name: ${name} FavColor: ${favColor}`);

// const works differently
const isCool = true;

// isCool = false; // This results in a type error

// The above line will result in a Type Error
// because the variable isCool
// has already been assigned a value
// and cannot be assigned a new value

// However
const info = {};

info.name = 'Niko';
info.age = 29;
info.lovesES6 = true;

console.log(info);
// The above code is perfectly valid
// since we are not changing the fact
// that the variable 'info'
// is a reference to an object
// The values inside the object may be changed
// but the reference to that object cannot

// info = []; // this results in a type error

// Additional Const Example
const favGames = ['Zelda', 'Assassin\'s Creed', 'Fallout'];
console.log(favGames);

favGames.push('Kingdom hearts');
console.log(favGames);
// I can still add/remove things to/from the array 
// but I cannot change the fact that favGames is an array

// ====================================================

// Extra Credit - 'Hoisting'

/* Literal Definition -
  to raise something (by means of ropes and pulleys); to lift up

When the compiler reads through a JS file
it first locates all declarations of variables (if using 'var')
and lifts (hoists) them up to the top of the current scope,
beit a function or the top of the document itself
This is a default behavior of JavaScript and (if not understood)
can lead to errors or unexpected results when executing JS code
*/


// Hoisting Example

var firstName = 'Niko';
console.log(firstName); // This will return the string 'Niko'

// However
console.log(lastName);
var lastName = "Roberts";
// This example will return undefined 
// as opposed to a reference error; 
// Because the declaration of lastName will be
// hoisted to the top of the page
/*
Therefore the code above will be read by the compiler like so...
var lastName;
console.log(lastName); // undefined
lastName = 'Roberts';
*/

// Hoisting and Let

console.log(age); // Reference Error
let age = 29;
// This example will return a reference error
// because the variable 'age'
// is not hoisted to the top of the page
// and therefore does not yet exist
// when the compiler reads the console.log
// Same goes for variables declared using const