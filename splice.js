/**
 * Splice() function
 *
 * The splice() is a mutating method that changes the contents of an array by removing or replacing existing elements
 * and/or adding new elements in place.
 *
 * It's important to note that the splice() function modifies the original array, it does not create a new one. If you
 * want to create a new array without modifying the original one, you can use the slice() method instead.
 *
 * Check this document for reference: https://www.notion.so/volkswirtschaft/JavaScript-6950e246eee04800a0018e6613cb1a3b?pvs=4
 */

// Example 1
let colors = ["red", "blue", "green", "yellow"];

// replacing "green" & 'yellow' with 'purple' & 'orange'
let removed = colors.splice(2, 2, "purple", "orange");
console.log(removed);
console.log(colors);

// Example 2
const products = [
  "PAPA Diamond",
  "PAPA Platinum",
  "GitHub Repo",
  "University of Code",
];
const removed2 = products.splice(-2, 1);

// products = ["PAPA Diamond", "PAPA Platinum", "University of Code"]
// removed = ["GitHub Repo"]
console.log(products);
console.log(removed2);
