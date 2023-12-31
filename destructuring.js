// Accessing Objects the Old way

let person = {
  firstName: "Dimitar",
  lastName: "Mandarliev",
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

console.log(personFirstName);
console.log(personLastName);

// Access Objects the New way

let { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

// We can also RENAME the variables with the New way

let { firstName: fName, lastName: lName } = person;
console.log(fName);
console.log(lName);

/**
 * Setting defaults when object destructuring
 */

let person2 = {
  firstName: "Dimitar",
  lastName: "Mandarliev",
  current: 28,
};

let { firstName2, lastName2, middleName = "", currentAge: age = 20 } = person;

console.log(middleName);
console.log(age);

/**
 * Destructuring of arrays
 */

const arr = [1, 2, 3];

// Prior to ES6, when you want to assign the elements of the
// array to variables, you typically do it like this:

let x = arr[0];
let y = arr[1];
let z = arr[2];

console.log(x);
console.log(y);
console.log(z);

// But NOW ES6 introduces the array destructuring syntax that
// provides an alternative way to assign elements of an array to
// variables:

let [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d); // undefined
console.log(arr[3]); // undefined

/**
 * Let's see the syntax based on this example.
 * The left-hand side of the assignment is an array of variables, and the right-hand side is
 * an array of values. The array elements are assigned in order, with the first element of the
 * array going to the first variable, and so on.
 *
 * For example, if you have an array of multiple values, you can assign them to multiple
 * variables like this:
 */

let [e, f, g, h] = [1, 2, 3, 4];

// Skipping items when array destructuring

const arrValue = ["one", "two", "three"];

// destructuring assignment in arrays
const [s, , t] = arrValue;

console.log(s);
console.log(t);

/**
 * Assign Remaining Elements to a Single Variable
 *
 * You can assign the remaining elements of an array to a variable
 * using the spread syntax `...`
 */

const names = ["Dimitar", "Ben", "Batman", "Julius"];

// destructuring assignment in arrays
// assigning remaining elements to y
const [k, ...o] = names;

console.log(k);
console.log(o);

// This trick works in object destructuring too!

const person3 = {
  name3: "Dimitar Mandarliev",
  age: 28,
  gender: "Male",
};

// Destructuring assignment
// assigning remaining properties to rest
let { name3, ...rest3 } = person3;

console.log(name3);
console.log(rest3);

// ! Note: The variable with the spread syntax cannot have a
// travelling comma ,. You should use this rest element (variable
// with spread syntax) as the last variable. For example:

const namess = ["Dimitar", "Ben", "Donald", "Victor"];

// const [y, ...x] = namess; // throws an error

// In the example below, two variables are swapped using the
// destructuring assignment syntax:

let name8 = "Dimitar";
let name9 = "Victor";

// swapping variables
[name8, name9] = [name9, name8];
console.log(name8);
console.log(name9);

// A function may return an object or null in some situations.
// For example:

function getPerson() {
  return null;
}

/**
 * let {firstName5, lastName5} = getPerson();
console.log(firstName5, lastName5);

This will throw an error
 * TypeError: Cannot destructure property 'firstName5' of 'getPerson(...)' as it is null.
 */

// Correct way
let { firstName5, lastName5 } = getPerson() || {};
console.log(firstName5, lastName5);

/**
 * Nested Object Destructuring
 *
 * Assuming that you have a member in the family where the object has
 * a name object as the property:
 */

let member = {
  id: 0o1,
  name: {
    firstName9: "Dimitar",
    lastName9: "Mandarliev",
  },
};

// Heres how to destructure it...
let {
  name: { firstName9, lastName9 },
} = member;

console.log(firstName9);
console.log(lastName9);
