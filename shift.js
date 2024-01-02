/**
 * shift() function
 *
 * - The `shift()` method is a mutating method that changes the length of the array
 * and contents of the original array.
 * - In case you want the value of the original array to remain the same, but return
 * a new array with the last element removed, you can use `arr.slice(1)` instead -
 * we'll learn this in a different lesson.
 *
 * - This function can also be used with other javascript objects that behave like the array.
 */

// Example 1
const products = ["Platinum", "Diamond", "University of Code", "GitHub Repo"];
const firstProduct = products.shift();

console.log(firstProduct);
console.log(products); // Notice how it doesn't have platinum inside anymore!

// Limitations of shift() function
/**
 * - Returns undefined if the array is empty
 * It's not a pure function as it directly modifies the array
 * It can only be used to remove the FIRST element
 */

const arr = [];
console.log(arr.shift);

// Final example
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];

console.log(numbers.shift()); // [1, 2, 3]

console.log(numbers); // [[4, 5, 6], [-5, -4, -3]]