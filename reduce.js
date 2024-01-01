/**
 * The `reduce()` method executes a reducer function for array element.
 * The `reduce()` method returns a single value: the function's accumulated result
 * The `reduce()` method does not execute the function for empty array elements.
 * The `reduce()` method does not change the original array.
 */

/**
 * Reduce Function
 *
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 *
 * OLD - Calculating numbers on a regular for loop:
 */

function sum(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}

sum([1, 3, 5, 7]); //16

/**
 * NEW - Calculating numbers using a Reduce
 */
function sum2(arr) {
  const reducer = (total, value) => total + value;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}

sum([1, 3, 5, 7]);

// OR
// const arr = [1, 3, 5, 7]
// const sum = arr.reduce((total, value, currentIndex, arr) => total + value, 0)

// The best way
const array = [1, 3, 5, 7, 5, 3, 9, 4, 7];
const sum5 = array.reduce(
  (total, value, currentIndex, arr) => total + value,
  0
);

// Reduce Function
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const array2 = [
  { item: "imac", price: 1000 },
  { item: "ipad", price: 500 },
];

const sum9 = array.reduce((total, item) => total + item.price, 0);
console.log(sum); // 1500

/**
 * While `reduce()` is often used for summing, it doesn't have to be.
 *
 * The `accumulator` can be any value: number, `null`, `undefined`,
 * array, POJO (Plain Old Javascript Object), even a promise!
 *
 * For example, suppose you have an array of Javascript dates, and you
 * want to find the most recent date.
 */

const dates = [
  "01/08/2023",
  "02/08/2023",
  "04/08/2023", // This is the most recent date, but how to find it?
  "04/07/2023",
].map((v) => new Date(v));

const maxDate = dates.reduce((max, d) => (d > max ? d : max), dates[0]);
console.log(new Date(maxDate).toLocaleDateString());
