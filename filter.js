/**
 * filter() function
 *
 * The filter() method allows us to filter through an array - iterating over the existing
 * values, and returning only the ones that fit certain criteria, into a new array.
 *
 * JavaScript's Objects are not iterable like arrays or strings, so we can't make use of
 * the filter() method directly on an Object.
 *
 * JavaScript objects don't have a filter() function. You just need to be able to iterate
 * over an object and convert the object into an array using Object.entries() as shown in the
 * upcoming examples below:
 *
 * It allows us to iterate through an array and returns only the items of that array that fit
 * certain criteria into a new array
 */

// Example 1

const numbers = [1, 2, 3, 4, 5, 6];

// Checking for EVEN numbers
let callback = (value) => value % 2 === 0;
const even = numbers.filter(callback);
console.log(even);

// Checking for ODD numbers
callback = (v) => v % 2 === 1;
const odd = numbers.filter(callback);
console.log(odd);

// Cleaner approach
numbers.filter((v) => v % 2 === 1);

// Example 2

/**
 * How ES6 Simplified filter()
 */

// 1) Let's take a look at the filter() method in action. In earlier versions of
// JS, prior to ES6 - a callback function would be used as :

const randomNumbers = [20, 40, 17, 99, 59, 77];
const filteredNumbers = randomNumbers.filter(function (number) {
  return number > 20;
});

console.log(filteredNumbers); // [40, 99, 59, 77]

// 2) Since ES6, we can simplify this as an arrow function:
const randomNumbers2 = [20, 40, 17, 99, 59, 77];
const filteredNumbers2 = randomNumbers2.filter((number) => {
  return number > 20;
});

console.log(filteredNumbers2); // [40, 99, 59, 77]

// 3) Or, you can collapse the function down into just one line:
const randomNumbers3 = [20, 40, 17, 99, 59, 77];
const filteredNumbers3 = randomNumbers3.filter((number) => number > 20);

console.log(filteredNumbers3); // [40, 99, 59, 77]

// Using Objects.keys() to filter an Object
const prices = {
  github: 67,
  platinumPlan: 597,
  diamondPlan: 997,
};

const memberships = Object.keys(prices);
const plans = memberships.filter((m) => m.includes("Plan"));
console.log(memberships);
console.log(plans);

// Combining Filter with Reduce
const user = {
  firstName: "Dimitar",
  lastName: "Mandarliev",
  userName: "doctorholy",
  email: "dimitar.mandarliev@gmail.com",
  age: 28,
};

const names = Object.keys(user)
  .filter((key) => key.includes("Name"))
  .reduce((obj, key) => {
    return Object.assign(obj, {
      [key]: user[key],
    });
  });

console.log(names);

// We can do this better... with a ES6 operator!
const names2 = Object.keys(user)
  .filter((key) => key.includes("Name"))
  .reduce((obj, key) => ({
    ...obj,
    [key]: user[key],
  }));

console.log(names2);

// Filtering Array of Objects by keys
const users = {
  Dimitar: { username: "doctorholy", age: 28 },
  Jay: { username: "jay4339", age: 21 },
  Ruth: { username: "rutie01", age: 24 },
  Ivan: { username: "joebiden", age: 28 },
};

const selectedUsers = ["Dimitar", "Jay"];

const filteredUsers = Object.keys(users)
.filter(key => selectedUsers.includes(key))
.reduce((obj, key) => {
    obj[key] = users[key];
    return obj;
}, {});

console.log(filteredUsers);
