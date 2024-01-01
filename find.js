/**
 * The find() function
 * --------------------------------------------------
 *
 * Some Important Points
 *
 * The find() method returns the value of the FIRST element that passes a test. Then it quits :)
 * The find() method executes a function for each array element.
 * The find() method returns undefined if no elements are found.
 * The find() method does not execute the function for empty elements.
 * The find() method does not change the original array
 */

// Example 1
// SYNTAX: find(callback(element, index, array))
// Optional SYNTAX: find(callback(element, index, array), thisArg)

const names = ["Dimitar", "Ivan", "Ivo", "Elon", "Shefa"];

const result = names.find((name) => name.startsWith("I"));
console.log(result);

// Example 2
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12, , 11].find(isPrime)); // 5

// Example 3
const cars = [
  { name: "Tesla", count: 4 },
  { name: "Mustang", count: 5 },
  { name: "Mercedes", count: 2 },
];

const result2 = cars.find((car) => car.count > 2);
console.log(result2);

// This is an instance where you should probably use filter() instead
// if you need all of the results as it would also show the Mustang
// results!

/**
 * Sometimes you'll want to re-use the same `find()` test function
 * in multiple places. In that case, it can be really helpful to
 * create a separate testing function.
 */

const cars2 = [
  { name: "Tesla", count: 4 },
  { name: "Mustang", count: 5 },
  { name: "Mercedes", count: 2 },
];

const brands = [
  { name: "LV", count: 2 },
  { name: "Gucci", count: 6 },
  { name: "Dior", count: 3 },
];

// Out Testing Function
const hasFiveOrMore = (item) => item.count >= 5;
const carResult = cars.find(hasFiveOrMore);
const brandResult = brands.find(hasFiveOrMore);

console.log(brandResult);

/**
 * Like filter(), there is an optional index parameter we can use.
 * Here's one last example, using it as part of our testing function
 *
 * Suppose we need to skip the first 2 elements
 */

const result3 = cars.find((car, i) => {
  if (car.count > 1 && i > 1 && car.name.startsWith("M")) return true;
});

console.log(result3);