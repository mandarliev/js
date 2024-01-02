/**
 * slice() function
 *
 * The slice() method returns a portion of an array into a new array object from the start index to
 * the end index (where the end value is non incluside). START and END represent the index of items in
 * that array.
 *
 * Note: The string.slice() is an inbuilt method in JavaScript that is used to return a part or slice
 * of the given input string.
 *
 * The original array WILL NOT be modified.
 *
 * SYNTAX:
 *
 * - string.slice(startIndex, endIndex)
 *
 * OR
 *
 * - arr.slice(startingIndex, endingIndex)
 *
 * OR
 *
 * - slice(startingIndex)
 */

// Example 1
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

// Example 2
const myTesla = {
  color: "white",
  wheels: 4,
  engine: "electric",
};

const myCar = [myTesla, 2, "mint condition", "purchased 2095"];
const newCar = myCar.slice(0, 2);

console.log(myCar);
console.log(newCar);

// Change the color of myTesla
myTesla.color = "red";
myTesla.wheels = 6;

console.log(myCar);
console.log(newCar);

// Exampl 3 - Using slice() with Negative index
const languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array from start to second-to-last
let exampleArray = languages.slice(0, -1);
console.log(exampleArray);

// slicing the array from third-to-last
let negativeSlicingExample = languages.slice(-3);
console.log(negativeSlicingExample);

// Example 4 - Using slice() on sparse arrays
const numbers = [1, 2, , 4, 5];
console.log(numbers.slice(1, 4)); // [2, undefined, 4]
