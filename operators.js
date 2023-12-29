// 1) Arithmetic operators

let number = 0;

// Assignment
number = 5;
console.log(number);

// Addition +
number + 5;
console.log(number);

// Substraction -
number - 4;
console.log(number);

// Multiplication *
number = 5;
console.log(number * 5);

// Division /
console.log(number / 1);

// Modulus %
number = 10;
console.log(number % 3);

// Exponential
console.log(number ** 5);

// Increment ++
number = 10;
number++;
console.log(number);

// Decrement --
number = 10;
number--;
console.log(number);

// BIDMAS (Brackets, Indices, Div, Multi, Add, Sub)
const answer = (5 + 2 ** 2) * 3;
console.log(answer);

// Asignment Operators

number = 0;

// =
number = 10;
console.log(number);

// +=
number++;
console.log(number);

// -=

number--;
console.log(number);

// *=
number *= console.log(number);

// /=
number /= 5;
console.log(number);

// %=
number = 10;
number %= 3;
console.log(number);

// String Operators
let text1 = "Dimitar";
let text2 = "Mandarliev";
let text3 = text1 + " " + text2;

console.log(text3);

// Concatenation Operator
let text4 = "Dimitar";
text4 += " Mandarliev";
console.log(text4);

let text5 = `${text1} ${text2}`;
console.log(text5);

// Adding Strings and Numbers
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

console.log(x);
console.log(y);
console.log(z);

// Comparison Operators

// == Equal to
// 'Dimitar' = 'Dimitar';
// 0 == '0';

// != Not Equal
// 0 != '0' // Thinks its true!!!

// !== Not equal value or not equal type
// 0 !== 0
// 0 !== '0'

// > Greater than
console.log(0 > 1);
console.log(1 > 0);

// < Less than
console.log(2 < 1);
console.log(1 < 2);

// >= Greater than or equal to
console.log(1 >= 1);
console.log(1 >= 2);

// <= Less than or equal to
console.log(5 <= 4);
console.log(5 <= 5);

// ? Ternary Operator
console.log(10 / 2 === 5 ? "Yours Maths is awesome" : "You suck at Maths");
// so the syntax is: comparison ? true case : false case; try changing the 5 to 9 and see the output :)

// Logical Operators
const num = 5;

// && Logical AND gate
console.log(num > 1 && num < 10);

// || Logical OR gate
console.log(num == 5 || num == 8);

// ! Logical NOT
console.log(!(num == 5));
 