// for - loops through a block of code a number of times
let cars = [
  "Nissan",
  "BMW",
  "Ferrari",
  "Audi",
  "Bentley",
  "Porsche",
  "Lambo",
  "Mustang",
];
let text = " ";

for (let i = 0; i < cars.length; i++) {
  console.log(`The #${i + 1} car is ${cars[i]}`);
}

// Just a new line, bruh
console.log("\n");

// for/in - loops through the properties of an object
const person = {
  firstName: "Dimitar",
  lastName: "Mandarliev",
  age: 28,
  hairColor: "Brown",
};
for (let attribute in person) {
  console.log((text += person[attribute] + " "));
}

console.log("\n");

// for/of - loops through the values of an iterable object
const alphabet = ["a", "b", "c", "d", "e"];
for (const letter of alphabet) {
  console.log(letter);
}

console.log("\n");

// while - loops through a block of code while a specified condition is true
let count = 0;

while (count < 10) {
  text += count;
  count++;
}

console.log(text);

console.log("\n");

// do/while - also loops through a block of code while a specified condition is true
count = 0;
text = "";

do {
  text += count;
  count++;
} while (count < 10);

console.log(text);

console.log("\n");

// ES6 forEach - My favorite modern loop!
const colors = ["red", "blue", "yellow", "green", "orange"];

colors.forEach((color) => {
  console.log(color);
});
