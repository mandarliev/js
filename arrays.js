// Arrays in JS - Basic Functions
// The Array object is used to store multiple values in a single variable:

// Full list of functions here: https://www.w3schools.com/js/js_array_methods.asp

let students = ["Dimitar", "Ivan", "Sarah", "Nikola", "Jesus"];

// Arrays 101 - Push & Pop
// Push adds new element and returns length of the array
// Pop removes the last element of the array and returns it
students.push("Kiril");
console.log(students);

students.pop();
console.log(students);

// Arrays 101 - slice (it's non-inclusive)
console.log(students.slice(1, 3));

// Arrays 101 - splice(start, end, item1, item2, itemX)
// WARNING: Splice overwrites the original array
students.splice(0, 3, "Bob", "Andy");
console.log(students);

// Arrays 101 - shift - removes first item of array and returns it
// WARNING: shift overwrites the original array
const firstStudent = students.shift();
console.log(firstStudent);

// Arrays 101 - unshift - adds new elements to the beginning of an array
// WARNING: unshift overwrites the original array
students.unshift("Apple", "Banana", "Orange");
console.log(students);

// Arrays 101 - join
students.join(" | ");

// Arrays 101 - fill
students.fill("Mandarliev", 0, students.length);
console.log(students);

// Arrays 101 - length
console.log(students.length);

// Arrays 101 - toString
console.log(students.toString());

// Arrays 101 - recerse
students = ["Dimitar", "Ivan", "Sarah", "Nikola", "Jesus"];
console.log(students.reverse());

// Arrays 101 - contact
let moreStudents = ['Andy', 'Andrew', 'Stefani'];
const allStudents = students.concat(moreStudents).concat(['Andy'])
console.log(allStudents);