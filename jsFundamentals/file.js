// Variables

var name = "Dimitar"; // this variable has access to every line underneath it because it has GLOBAL scope
function showName() {
  var age = 25;
}

// console.log(age); // this will result in an error because age is not in the global scope, but the function scope
// 'const' variables cannot be changed later in the code, so stick with 'let' for God's sake..Use const and when you see a need to change the value, change it to let
// So don't use 'var'. Use 'const' or 'let' (preferably 'let')

let myName = "Dimitar";
myName = 5;
console.log(myName); // 5

let age = 123; // number
let isMale = true; // boolean

// Object
let student = {
  name: "Dimitar",
  age: 123,
  isMale: true,
};

// Arrays (spread)
const colors = ["blue", "red", "orange"];
console.log(colors); // ["blue", "red", "orange"]
console.log(colors[0]); // blue

let extendedColors = [...colors];
console.log(extendedColors); // ["blue", "red", "orange"]. Those 3 dots is just copying
extendedColors = [...colors, "yellow", "purple"];
console.log(extendedColors); // ["blue", "red", "orange", "yellow", "purple"]

// You can even add an item before the spreading, like this:
extendedColors = ["white", ...colors];
console.log(extendedColors); // ["white", blue", "red", "orange"]

// Object (Spread)
console.log(student.isMale); // true

const newStudent = {
  ...student,
  name: "Shefa",
};

console.log(newStudent); // {name: 'Shefa', age: 123, isMale: true}
newStudent.name = "Pesho";
console.log(newStudent); // {name: 'Pesho', age: 123, isMale: true}

// Destructuring - ES6
console.log(student.age); // 123
const studentOne = {
  ime: "Dimitar",
  age: 123,
  isMale: true,
  courses: {
    english: {
      teacher: "Mr Coder",
    },
  },
};

console.log(studentOne.courses.english.teacher); // Mr Coder
const {
  ime,
  courses,
  courses: {
    english: { teacher },
  },
} = studentOne;
console.log(ime); // Dimitar
console.log(courses); // {english: {teacher: 'Mr Coder'}}

// Array destructuring - ES6
const students = ["Dimitar", "Peshi", "Denis"];
const [student1, student2, student3] = students;

console.log(student1); // Dimitar
console.log(student2); // Peshi, etc.

// Optional Chaining
// student.courses.math?.teacher // the question mark basically means that math might not be there

// Dynamic keys in objects
const subject = "maths";
// student.courses['subject']?.teacher // subject is a dynamic key

// Loops

// The old school way
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// same shit
const colors2 = ["red", "blue", "green"];
for (let i = 0; i < colors2.length; i++) {
  console.log(colors2[i]);
}
console.log("/1"); // just to separate the output

// still old way
for (let i of colors2) {
  console.log(i);
}

console.log("/2"); // just to separate the output

// best way
colors2.forEach((color) => console.log(color));

// if you want the index as well
colors2.forEach((color, i) => console.log(i + " " + color));
console.log("/3"); // just to separate the output

// However with forEach() we don't get a value back
const sentences = colors2.forEach((color, i) => color);
console.log(sentences); // undefined

/**
 * A good scenario to use forEach() would be, for example, if we want to send a notification or invoke a function every time we iterate over an item, i.e:
 * colors.forEach(color => {
 *  sendNotification(color;)
 * })
 */

// map() returns a value

/**
 * While loops
 * They are dangerous because they run as long as a condition is true
 */

console.log("/4"); // just to separate the output

// Functions (ES6 vs normal)

// Traditional
function printName(name, age) {
  console.log(name, age);
}
printName("pesho", 35);

// Arrow functions. Arrow functions are variables
const printName2 = (name, age) => {
  console.log(name, age);
};

printName2("pesho", 29);

// A prop in React is basically an argument to a function. Hence the name functional components. :)

// Currying
const sum = (num1) => (num2) => {
  console.log(num1 + num2);
};

sum(1)(2);
console.log("/5"); // just to separate the output

// Recursion
function countDown(number) {
  console.log(number);
  const newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4); // 4 / 3 / 2 / 1


