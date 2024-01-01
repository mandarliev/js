let promise = new Promise(function (resolve, reject) {
  // do something
});

/**
 * A promise may have one of three states.
 *
 *  - Pending: initial state, neither fulfilled nor rejected.
 *  - Fulfilled: meaning that the operation was completed successfully.
 *  - Rejected: meaning that the operation failed.
 */

// Example 1
// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value.");
//   } else {
//     reject("There is no count value.");
//   }
// });

// console.log(countValue);

// Example 2 - async operation. This is where a Promise is most handy
let promise1 = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the the job is done with the result "done"
  setTimeout(() => {
    resolve("done");
  }, 500);
});

promise1.then((success) => console.log(success));

// Example 3
let promise2 = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
});

// Example 4 - Promise Chaining
let exampleTask = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// Executes when promise is resolved successfully
exampleTask
  .then(function successValue1(result) {
    console.log(result);
  })
  .then(function successValue2() {
    console.log("You can call multiple functions this way.");
  });
