/**
 * Types of Errors
 * In programming, there can be 2 types of errors in the code:
 *
 * -----------------------------------------------------------
 * 1) Syntax Error: Error in the syntax. For example, if you write...
 * `consol.log(`your result`);`,
 * the above program throws a syntax error. The spelling of `console` is a mistake in the
 * above code.
 *
 * 2) Runtime Error: This type of error occurs during the execution of the program.
 * For example, calling an invalid function or a variable.
 * -----------------------------------------------------------
 *
 *
 * These errors that occur during runtime are called:
 * EXCEPTIONS.
 * -----------------------------------------------------------
 * Now, let's see how you can handle these exceptions.
 *
 * Error handling Syntax
 * -----------------------------------------------------------
 *
 * try {
 *  // tryStatements
 * }
 * catch (exceptionVar) {
 *  //catchStatements
 * }
 * finally {
 *  // finallyStatements (code that gets executed anyway)
 * }
 *
 *
 * Important Points
 * 1) The try statement defines a code block to run (to try)
 * 2) The catch statement defines a code block to handle any error
 * 3) The finally statement defines a code block to run regardless of the result
 * 4) The throw statement defines a raised custom error
 *
 * NOTE: You need to use `catch` or `finally` statement after `try` statement.
 * Otherwise, the program will throw an error
 * Uncaught SyntaxError: Missing catch or finally after try
 */

let myVariable = "123";

try {
  if (isNaN(+myVariable)) {
    // throws if the value provided can't be coerced to a number
    throw new Error("This is NOT a Number!");
  }
  console.log("My Number is", myVariable);
} catch (e) {
  console.log(e);
}

// Good Practice: Rethrowing an error
let myVariable1 = "123";

try {
  if (isNaN(+myVariable1)) {
    throw new TypeError("This is NOT a Number!");
  }
  console.log("My Number is", myVariable1);
} catch (e) {
  if (e.name === "TypeError") {
    console.log(e);
  } else {
    throw e;
  }
}

// Introducing the FINALLY block!
let myVariable2 = 2;

try {
    console.log(myVariable2 + 77);
} catch (e) {
    console.log('Whoops -', e);
} finally {
    console.log("It Will Run No Matter What");
}
