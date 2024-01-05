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
const subject = 'maths';
// student.courses['subject']?.teacher // subject is a dynamic key

// Loops