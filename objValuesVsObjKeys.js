/**
 * The `Object.values()` method is a non-mutating method that returns an array of a given
 * object's own enumerable property values, in the same order as that provided by a `for...in`
 * loop.
 *
 * Note: `Object.values()` return an array, not an object. If you want to access the values of
 * an object without converting it to an array, you can use a `for...in` loop or
 * `Object.entries()` method.
 */

// Example 1 - Simple object
let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2021,
};

const arr = Object.values(car); // ['Tesla', 'Model 3', 2021]
console.log(arr);

// Example 2 - Array & Array-like object
// Array objects
const arr2 = ["JavaScript", "Python", "C"];
Object.values(arr2); // ["JavaScript", "Python", "C"]

// Array-like object
let arrayLike = {
  length: 3,
  0: "Tesla",
  1: "Model 3",
  2: 2021,
};

Object.values(arrayLike); // ["Tesla", "Model 3", 2021]

// Example 3 - Using Object.values() on primitive values

// Strings have indices as enumerable own properties
const name = Object.values("Dimitar"); // ['D', 'i', 'm', 'i', 't', 'a', 'r']
console.log(name);

// Other primitives have no own properties
// Object.values(7);

// Example 4 - Accessing values of a non-enumerable property
Object.defineProperty(car, "hidden", {
  value: "secret",
  enumerable: false,
});

Object.values(car); // ['Tesla', 'Model 3', 2021]
Object.getOwnPropertyDescriptors(car).hidden.value; // 'secret'

/**
 * The `Object.keys()` method is a non-mutating method that returns an array of a given object's own
 * enumerable properties, in the same order as that provided by a `for...in` loop.
 *
 * Note: `Object.keys()` returns an array, not an object. If you want to access the properties of an
 * object without converting it to an array, you can use a `for...in` loop or `Object.entries()` method.
 */

// Example 1 - Simple Object
let Student = {
  name: "Dimitar",
  age: 28,
  marks: 90.0,
};

// Get All keys of Student
Object.keys(Student);

// Example 2 - Array & Array-like object

// Array objects
const arr3 = ["JavaScript", "Python", "C"];

Object.keys(arr3); // ['0', '1', '2']

// Array-like object
let arrayLike2 = {
  length: 3,
  0: "Tesla",
  1: "Model 3",
  2: 2021,
};

Object.keys(arrayLike2); // ['length', '0', '1', '2']

// Example 3 - using Object.keys() on primitive calues

// Strings have indices as enumerable own properties
Object.keys("dimitar"); //["0", "1", "2", "3", "4", "5", "6"];

// Other primitives have no own properties
Object.keys(7); // []

// Example 4 - Accessing properties of a non-enumerable property

/**
 * By default, `Object.keys()` only returns the enumerable properties of an object.
 *
 * If you want to access the properties of a non-enumerable
 * property, you can use `Object.getOwnPropertyDescriptors()`
 */

Object.defineProperty(car, "abc", {
  value: "dimitar",
  enumerable: false,
});

Object.keys(car); // ['brand', 'model', year]

Object.getOwnPropertyDescriptors(car).abc.value; // {value: 'dimitar', writable: false, enumerable: false, configurable: false}
