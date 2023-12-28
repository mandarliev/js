// Arrays in JS - Basic Functions
// The Array object is used to store multiple values in a single variable:

// Full list of functions here: https://www.w3schools.com/js/js_array_methods.asp

const students = ["Dimitar", "Ivan", "Sarah", "Nikola", "Jesus"];

// Arrays 101 - Push & Pop
// Push adds new element and returns length of the array
// Pop removes the last element of the array and returns it
students.push('Kiril');
console.log(students);

students.pop();
console.log(students);

// Arrays 101 - slice (it's non-inclusive)
console.log(students.slice(1,3));

// Arrays 101 - splice(start, end, item1, item2, itemX)
// WARNING: Splice overwrites the original array
students.splice(0, 3, 'Bob', 'Andy')
console.log(students);

// Arrays 101 - shift - removes first item of array and returns it
// WARNING: shift overwrites the original array
const firstStudent = students.shift();
console.log(firstStudent);