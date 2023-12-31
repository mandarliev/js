function myDisplayer(numberToPresent) {
  console.log(`The calculater number is ${numberToPresent}`);
}

function myCalculator(num1, num2, myDisplayer) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(2, 8, myDisplayer);

/**
 * NOTE: remember not to use paranthesis when passing the
 * function as an argument!
 *
 * WRONG ------> myCalculator(2, 8, myDisplayer());
 */

// Example 1

// Create an Array
const myNumbers = [6, 9, -13, 4, -5, -19, 2];

const isNumberPositive = (x) => x >= 0;
// OR can be written as...
// function isNumberPositive(x) {
//  return >= 0
// }

// Keep only positive numbers
function removeNegativeNumbers(numbers, callback) {
  const myArray = numbers.filter((n) => callback(n));

  return myArray;
}

// Call removeNegativeNumbers with a callback function
const positiveNumbers = removeNegativeNumbers(myNumbers, isNumberPositive);

// Display result
console.log(positiveNumbers);
