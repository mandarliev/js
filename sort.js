/**
 * sort() function
 *
 * The sort() function sorts the elements of an array (depends on whether compareFn is passed or
 * not) and overwrites the original array.
 *
 * The default sort order is ascending, where it will convert the elements intro strings, then
 * comparing their sequences of UTF-16 code units values. (Basically it will sort them in ASCENDING
 * order!)
 *
 * 2 ways to call a sort function
 *      1) sort()
 *      2) sort(compareFunction)
 *
 * The `compareFunction` is simply a function with the following syntax:
 * function(a, b)
 * - a is the first element for comparison
 * - b is the second element for comparison
 *
 * When `compareFunction` is not passed,
 * - All non-`defined` array elements are first converted to strings.
 * - These strings are then compared using their UTF-16 code point value.
 * - The sorting is done in ASCENDING order.
 * - All `undefined` elements are sorted to the end of the array.
 */

// Example 1

// sorting an array of strings
let names = ["Dimitar", "Jay", "Brian", "Roy", "John"];
console.log(names);

// returns the sorted array in ascending order of the string
names.sort();

// modifies the array in place
console.log(names);

// Example 2
let priceList = [32, 50, 1001, 2, 7, 14, 5002];
console.log(priceList);

priceList.sort((a, b) => a - b); // Ascending
console.log(priceList);

priceList.sort((a, b) => b - a); // Descending
console.log(priceList);

// Example 3
let names2 = ["Dimitar", "Ivan", "Veni", "Shefa", "Fabiano"];

function length_compare(a, b) {
  return a.length - b.length;
}

// sort according to string length
names2.sort(length_compare);
console.log(names2);