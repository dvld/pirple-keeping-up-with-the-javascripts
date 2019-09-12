/*
Pirple Homework Assignment #3: Statements and Operators
  By Nikolas Roberts
In this assignment we will use
if else statements
which, based on a piece of conditional logic
will determine our output.
*/

/*
All men are mortal.
Socrates is a man.
Therefore, Socrates is mortal.
*/

/* Here we are creating a mortal object
which contains an array of men
of which 'Socrates' exists in
*/
const mortal = {
  men: [
    'Socrates',
    'Aristotle',
    'Plato'
  ]
};

/* if the 'mortal' object
contains the 'men' property
then 'All men are mortal.'
*/
if (mortal.men) {
  console.log('All men are mortal.');
}

/*
if the array of 'men'
includes 'Socrates'
then 'Socrates is a man.'
*/
if (mortal.men.includes('Socrates')) {
  console.log('Socrates is a man.');
}

/*
if the 'mortal' object
contains the 'men' property
&&
the array of 'men'
includes 'Socrates'
then 'Therefore, Socrates is mortal.'
*/
if (mortal.men && mortal.men.includes('Socrates')) {
  console.log('Therefore, Socrates is mortal');
}


// _______________________________________________ //
// Extra Credit

/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

const thisCake = 'vanilla';

if (thisCake !== 'vanilla') {
  console.log('This cake is chocolate');
} else {
  console.log('\nThis cake is vanilla');
}