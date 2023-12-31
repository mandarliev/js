// The 'throw' statement and when to use it!

try {
  // ...
  // ...
  // ...
  throw "an error has occured";
} catch (error) {
  console.log(error);
}

// Example 1

const number = 60;

try {
  if (number > 50) {
    console.log("Success");
  } else {
    // user-defined throw statement
    throw new Error("The Number is Low!");
  }

  // if throw executes, the below code does not execute
  console.log("Hello World");
} catch (error) {
  console.log("An Error is caught!");
  console.log("Error message: " + error.message);
}

// Example 2

function add(x, y) {
  if (typeof x !== "number") {
    throw "The first argument must be a number";
  }

  if (typeof y !== "number") {
    throw "The second argument must be a number";
  }

  return x + y;
}

const result = add("a", 10);
console.log(result);
