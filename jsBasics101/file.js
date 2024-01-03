/**
 * - Variables, let / const && var
 * - Data types: string, number, array, weakly vs strongly typed
 * - Arrays, Objects, Functions, ES6, Async functions, fetch(), ES6 Array method, reduce(), filter(), map(), forEach
 * - Spread operator (Array vs Object)
 */

// Always const until you need to change. Use let when you need to change it
const name = "Dimitar"; // String
const age = 28; // Integer
const isMale = true; // Boolean

const studentOne = {
  name: "Dimitar",
  email: "dimitar.mandarliev@gmail.com",
  tel: "+3591231231", // whenever you do phone numbers, always store them in a string
};

const students = ["Dimitar", "Gabriel", "Luke"]; // Array
students.forEach((student) => console.log(student.toLowerCase()));

/**
 * However, if you put in the array an object it will fail
    const students1 = [studentOne, "Gabriel", "Luke"]; // Array

 * students1.forEach((student) => console.log(student.toLowerCase()));

 * This will result in an error
 */

/**
 * You can (sometimes you should just to avoid misunderstanding) declare explictly the type of varirable.
 * For example:
 *  const name1: String = "Pesho";
    const students2 : [String] = ["asd", "asdsad", "zzz"]

    However, this will result since it's Typescript.
    If you try this in a .tsx file, it will work.
    Check file.tsx file for reference
 */

console.log(""); // just to separate things in the terminal

// Loops

// Iterate through each element
const students3 = ["misho", "pesho", "ivan"];
for (let i = 0; i < students3.length; i++) {
  console.log(students3[i]);
}
console.log(""); // just to separate things in the terminal

// Different way to do it
for (student of students3) {
  console.log(student);
}
console.log(""); // just to separate things in the terminal

// With ES6!!!
students3.forEach((student) => console.log(student));
console.log(""); // just to separate things in the terminal

// Let's try something
const newStudentsArray = students3.forEach((student) => console.log(student));
console.log(newStudentsArray); // you get undefined at the end

console.log(""); // just to separate things in the terminal

// Let's try with map
const newStudentsArray2 = students3.map((student) => console.log(student));
console.log(newStudentsArray2); // [undefined, undefined, undefined]

// OR check this out!
const newStudentsArray3 = students3.map(
  (student) => `${student} is a student!`
); // a one-liner is called implicit return
console.log(newStudentsArray3);

// Look through object
const favColors = {
  dimitar: "blue",
  luke: "red",
  shefa: "green",
};
console.log(favColors.dimitar); // blue
console.log(favColors["dimitar"]); // blue

// Iterate over the values
for (key in favColors) {
  console.log(favColors[key]);
}

// Iterate with ES6
console.log(Object.values(favColors));
console.log(Object.values(favColors).forEach((color) => console.log(color)));

console.log(Object.keys(favColors));
console.log(""); // just to separate things in the terminal

console.log(
  Object.entries(favColors).forEach((key, value) => console.log(key, value))
);
console.log(""); // just to separate things in the terminal

console.log(favColors);

const cars = [
  {
    name: "Tesla",
    speed: 1000,
    topSpeed: 2000,
    color: "white",
  },
  {
    name: "Ferrari",
    speed: 1010,
    topSpeed: 2020,
    color: "red",
  },
  {
    name: "Lambo",
    speed: 1000,
    topSpeed: 2040,
    color: "white",
  },
];

const totalSpeed = cars.reduce((total, car) => (total += car.speed), 0);
console.log(totalSpeed);

/**
 * If we need an array like this:
 * [
 * {
 *  correntName: 'Tesla which is white',
 *  speed: 500
 * }
 * ]
 *
 * Do the following:
 */
const transformedData = cars.map((car) => ({
  correctName: `${car.name} which is ${car.color}`,
  speed: car.speed / 2,
}));

console.log(transformedData);

const newTopSpeed = cars
  .map((car) => ({
    correctName: `${car.name} which is ${car.color}`,
    speed: car.speed / 2,
  }))
  .reduce((speed, car) => (speed += car.speed), 0);

console.log(newTopSpeed); // 1505

// with a filter to exclude the Lambo speed
const newTopSpeedWithoutLambo = cars
  .filter((car) => car.name !== "Lambo") // in fact you should include car.name.toLowerCase() !== 'lambo' for the defensive programming
  .map((car) => ({
    correctName: `${car.name} which is ${car.color}`,
    speed: car.speed / 2,
  }))
  .reduce((speed, car) => (speed += car.speed), 0);

console.log(newTopSpeedWithoutLambo);

// Async functions
async function fetchSomeData() {
  return "some data";
}

console.log(fetchSomeData()); // Promise {'some data'}

async function fetchFakeStore() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();

  /**
     * OR you can do it with .then
     * like this: https://fakestoreapi.com/docs#p-single
     * 
     * fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
     */

  console.log(data);
}

console.log(fetchFakeStore());
