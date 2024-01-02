/**
 * Object.entries()
 *
 * The Object.entries() is a static method that returns an array of key-value pairs of object's
 * enumerable.properties.
 *
 * It's important to note that Object.entries() return a new array, it does not modify the original object.
 *
 * Syntax:
 * Object.entries(obj)
 *
 * Return values: Returns array of the
 * given object's own enumerable/iterable
 * string-keyed property [key,value] pairs.
 */

// Example 1 - Using Object.entries() on an object
let person = {
  name: "Dimitar",
  age: 28,
  city: "Sofia",
};

let entries = Object.entries(person);
console.log(entries);

// [['name', 'Dimitar'], ['age', '28], ['city', 'Sofia']]

// Example 2 - Iterating over properties using Object.entries()
let car = {
  make: "Tesla",
  model: "Model Y",
  year: 2023,
};

let entries2 = Object.entries(car);

// Traditional loop
for (let item of Object.entries(car)) {
  console.log(`${item[0]}: ${item[1]}`);
}

// Traditional loop with destructuring
for (let [key, value] of entries2) {
  console.log(`${key}: ${value}`);
}

// ES6 Function forEach/Map etc
Object.entries(car).forEach(([key, value]) => {
  console.log(key, value);
});

// make: Tesla
// model: Model Y
// year: 2023

// Example 3 - Converting an object to a Map
// Note: The Map object holds key-value pairs and remembers the original
// insertion order of the keys.

const person2 = { name: "Dimitar Mandarliev", age: 28, occupation: "TPM" };

const map = new Map(Object.entries(person2));
console.log(map);
map.get("name");
