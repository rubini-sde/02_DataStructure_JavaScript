// CREATE ARRAYS

// from numbers
Array.of(1, 2, 3); // [1,2,3]

// from strings
Array.from("abc"); //['a', 'b', 'c']

// array of 0 - n
Array.from({ length: 5 }, (_, i) => i); // [0,1,2,3,4]

// array from Set
Array.from(new Set([1, 2, 3])); // [1, 2, 3]

// CHECK IF ARRAY
Array.isArray([1, 2, 3]); //true

// ADD OR REMOVE ELEMENTS

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2); // [1,2,3,4,5,6] - adds to the end - returns new length of the array

arr1.pop(); // [1,2,3,4,5] - removes from the end and returns the removed element

arr1.unshift(0); // [0,1,2,3,4,5] - adds to the beginning and returns new length of the array

arr1.shift(); // [1,2,3,4,5] - removes from the beginning and returns the removed element

arr1.splice(1, 2, [...arr2]); // [1,4,5,6,4,5,6] - removes 2 elements from index 1 and adds arr2 at index 1 - returns the removed elements [2,3]

Array.fill(0, 0, 5); // [0,0,0,0,0] - fills the array with 0 from index 0 to index 5

arr1.copyWithin(0, 3, 5); // [4,5,3,4,5] - copies elements from index 3 to index 5 and pastes them at index 0

// Slicing / Combining

// Reduce

const myArr = [10, 20, 30, 40, 50];
const myFunction = (acc, currValue, currIndex, myArr) => {
  acc = acc + currValue; // do anything here
  console.log(myArr[currIndex]);
  return acc;
};

myArr.reduce(myFunction, initialValue); 
