/**
 * The map() function
 * ------------------------------------------
 * ## Important Points
 * SYNTAX: map((element, index, array) => {... return v})
 *
 * map() creates a new array from calling a function for every array element
 * map() calls a function one for each element in an array
 * map() does not execute the function for empty elements.
 * map() does not change the original array.
 *
 * When NOT to use a map() function:
 *
 * You shouldn't be using map if:
 * -- you're not using the array it returns; and/or
 * -- you're not returning a value from the callback.
 */

// Example 1) Calling a Function on Each Item in an Array

const numberArray = [2, 3, 4, 5, 35];
const doulbeArray = numberArray.map((numberItem) => {
  return numberItem * 2;
});

console.log(doulbeArray);

// Let's clean this up with ES6
// create a function to use
const makeDouble = (numberItem) => numberItem * 2;

// We have the array
const numberArray2 = [2, 3, 4, 5, 35];

// Calling the function above
const doulbeArray2 = numberArray.map(makeDouble);

//OR
const doulbeArray3 = numberArray2.map((n) => n * 2);

console.log(doulbeArray3); // [4, 6, 8, 10. 70]

// Example 2) Converting a String to an Array
const myName = "Dimitar";
const nameArray = myName.split("");
console.log(nameArray);
const newName = nameArray.map((l) => `${l}${l}`);

console.log(newName);

const joinedNewName = newName.join("");
console.log(joinedNewName);

// Example 3) Rendering Lists in Javascript Libraries
// Use it to loop through items in react for example

// Example 4) Reformatting Array Objects
const names = [
  { name: "Dimitar", likes: "Coding" },
  { name: "Jay", likes: "Gaming" },
  { name: "Elon", likes: "Tesla" },
];

const namesByLikes = names.map((item) => ({
  [item.name]: item.likes,
  noOfLettersInName: item.name.length,
}));

console.log(namesByLikes);

// Some more examples

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

console.log(numbers);
console.log(roots);

// Using map to reformat objects in an array

const players = [
  { name: "Andy", score: 10 },
  { name: "Bob", score: 20 },
  { name: "Charlie", score: 30 },
];

const reformattedArray = players.map((player) => ({
  [player.name]: player.score,
}));

// Using ES6 Destructuring
const reformattedArray2 = players.map(({ name, score }) => ({ [name]: score }));

console.log(reformattedArray);
console.log(reformattedArray2);