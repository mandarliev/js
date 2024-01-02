/**
 * pop() function
 *
 * - The `pop()` method is a mutating method and changes the length and content of
 * the array.
 *
 * - In case you want the value of the original array to be the same, but return a
 * new array with the last element removed, you can use `arr.slice(0, -1)` instead.
 *
 * - This function can also be used with other javascript objects that behave like
 * the array.
 */

// Example 1
let products = ["Platinum", "Diamond", "University of Code", "GitHub Repo"];
let popped = products.pop();

console.log(popped);
// Element that was returned
// GitHub Repo

console.log(products);
// Array after Pop was used
// ["Platinum", "Diamond", "University of Code"]

/**
 * Limitations of the pop() function
 *
 * - Returns undefined if the array is empty
 *
 * - It's not a pure function as it directly modifies the array
 *
 * - It can be used to remove the LAST element
 */

// Example 2
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];

console.log(numbers.pop()); // [-5, -4, -3]
console.log(numbers); // [[1, 2, 3], [4, 5, 6]]
