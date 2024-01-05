// JS Essentials

// Variables
var name = "Dimitar"; // don't use 'var' anymore

/**
 * A rule of thumb is: Use 'const' first, and when you need to change the value use 'let'.
 * That's called 'defensive programming'.
 * Make it a habit.
 */

// Arrays (list)
const studentsArray = ["dimitar", "shefa", "interneta", "pesho"];
// Naturally, you will see more often an array of objects
const students = [
  {
    name: "Dimitar",
    age: 28,
  },
  {
    name: "Andy",
    age: 31,
  },
  {
    name: "Bob",
    age: 18,
  },
];

// Functions
const printName = (name) => {
    console.log(name);
}

printName(); // undefined
printName('Pesho')


// Loops

// Async
