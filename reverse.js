// Example 1
let names = ["Dimitar", "Ivan", "Rumyana", "Shefa", "Pesho"];

// reversing the order
let reversedArray = names.reverse();
console.log(reversedArray);

// It MODIFIES the original array
console.log(names);

// Example 2
// If you don't want to modify the original array, use the {...} operator
// using the spread operator you actually spread copies of the array into a new array
let names2 = ["Dimitar", "Ivan", "Rumyana", "Shefa", "Pesho"];
let reversedArray2 = [...names2].reverse();
console.log(reversedArray2);
// see that the original array is not reversed - this is the concept of immutability
console.log(names2);

// Example 3
let exampleArray = [1, , 3];
console.log(exampleArray.reverse());
// [3, <1 empty item>, 1]