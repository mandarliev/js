/**
 * Conditional statements are used to perform different actions based on different conditions
 *
 * The following 4 conditional statements are used in JS:
 *
 * - Use `if` to specify a block of code to be executed, if a specified condition is **true**
 * - Use `else` to specify a block of code to be executed, if the same condition is **false**
 * - Use `else if` to specify a new condition to test, if the **first** **condition** is **false**
 * - Use `switch` to specify **many** alternative blocks of code to be executed
 *
 */

// The `if` statement in Javascript allows you to execute a block of code if a certain condition is true.

// The condition is a logical expression that evaluates to either `true` or `false`.
// If the condition is true, the code block enclosed in the curly braces will be executed.

// Example #1 | Basic if statement

let num = 5;
if (num >= 5) {
  console.log("The number is positive");
}

// Example #2 | if statement with a boolean variable

let isDimitar = true;

if (isDimitar) {
  console.log("It's Dimitar outside");
}

// Example #3 | if statement with a function
function isEven(num) {
  return num % 2 === 0;
}

if (isEven(4)) {
  console.log("The number is even");
}

// Example #4 | if statement with a comparison operator

let password = "mandarliev";

if (password === "mandarliev") {
  console.log("Access granted");
}

// The else statement is used in conjuction with an if statement, and allows you to
// execute a block of code if the if condition is false.

// if (condition) {
//     // code to execute if the condition is true
// } else {
//     // code to execute if the condition is false
// }

// The code block enclosed in the else clause will only be executed if the condition in the if statement is false.
// If the condition in the if statement is true, the code block in the else clause will be skipped over.

// Example #1 | Basic if...else statement

let number = -5;

if (number < 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

// Example #2 | if...else statement with a function
function isEven(number) {
  return number % 2 === 0;
}

let number2 = 5;

if (isEven(number2)) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Example #3 | if...else statement with a boolean variable

let isSunny = false;
if (isSunny) {
  console.log("It's sunny outside!");
} else {
  console.log("It's not sunny outside!");
}

// Example #4 | if...else statment with a comparison operator
let password1 = "1234";

if (password1 === "password") {
  console.log("Access denied");
} else {
  console.log("Access denied");
}

// The else if statement allows you to check for multiple conditions in a series of if statements,
// and execute different code blocks based on the results of those conditions.

// Syntax

/*
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition1 is false and condition2 is true
} else {
    // code to execute if all previous conditions are false
}
*/

// The else if statement must come after the initial if statement and before the optional else statement.
// It allows you to check for additional conditions, and execute a different code block if the
// previous condition(s) are false and the current condition is true.

// Example #1 | Basic if...else if...else statement

let num2 = 5;

if (num2 > 0) {
  console.log("The number is positive");
} else if (num2 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// Example #2 | if...else if...else statement with a function
function isOdd(num2) {
  return num2 % 2 !== 0;
}

let num3 = 5;
if (isOdd(num3)) {
  console.log("The number is odd");
} else if (num3 === 0) {
  console.log("The number is zero");
} else {
  console.log("The number is even");
}

// Example #3 | if...else if...else statement with a comparison operator
let num4 = 10;

if (num4 > 10) {
  console.log("The number is greater than 10");
} else if (num4 < 10) {
  console.log("The number is less than 10");
} else {
  console.log("The number is equal to 10");
}

// Example #4 | if...else if...else statement with multiple conditions
let num5 = 15;
if (num5 < 0) {
  console.log("The number is negative");
} else if (num5 === 0) {
  console.log("The number is zero");
} else if (num5 > 0 && num5 < 10) {
  console.log("The number is between 0 and 10");
} else if (num5 >= 10 && num5 < 20) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is greater than or equal to 20");
}

// Example #5 | if...else if...else statment with a string comparison

let language = "JavaScript";

if (language === "JavaScript") {
  console.log("You chose Javascript");
} else if (language === "Python") {
  console.log("You chose Python");
} else if (language === "Ruby") {
  console.log("You chose Ruby");
} else {
  console.log("You did not choose a supported language");
}

/**
 * Use the `switch` statement to select one of many code blocks to be executed.
 *
 * - The switch expression is evaluated once and is compared with the values of each case.
 * - If there is a match, the associated block of code is executed and if there is no match,
 *  default code block is executed.
 *
 * // Syntax
 *
 * switch (expression) {
 *  case value1:
 *      // code block to execute when expression matches value1
 *         break;
 *  case value2:
 *      // code block to execute when expression matches value2
 *         break;
 *  default:
 *      // code block to execute when expression does not match any of the cases
 * }
 */

// Example #1 | Basic Switch Statement

let day = "Monday";

switch (day) {
  case "Monday":
    console.log(`Today is ${day}`);
    break;
  case "Tuesday":
    console.log(`Today is ${day}`);
    break;
  case "Tuesday":
    console.log(`Today is ${day}`);
    break;
  case "Wednesday":
    console.log(`Today is ${day}`);
    break;
  default:
    console.log(`Today is ${day}`);
}

// Example #2 | Multiple cases for the same block of code

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "orange":
    console.log("This is a fruit that is either an apple or an orange");
    break;
  case "banana":
    console.log("This is a banana");
    break;
  default:
    console.log("This is not a fruit that we know");
}

// Example #3 | Using switch statement with fallthrough
let num6 = 6;

switch (num6) {
  case 1:
  case 2:
  case 3:
    console.log("The number is a small number");
    break;
  case 4:
  case 5:
  case 6:
    console.log("The number is a medium number");
    break;
  case 7:
  case 8:
  case 9:
    console.log("The number is a large number");
    break;
  default:
    console.log("The number is either negative or greater than 9");
}

// Example #4 | Using switch statement for Type Checking
let num7 = 7;

switch (typeof num7) {
  case "string":
    console.log("The value is a string");
    break;
  case "number":
    console.log("The value is a number");
    break;
  case "boolean":
    console.log("The value is a boolean");
    break;
  default:
    console.log("The value is of an unknown type");
}
