// Implement a sum function that accepts a number and can be called repeatedly with more numbers.
// Calling the function without an argument will sum up all the arguments so far and return the total.

// sum(1)(); // 1
// sum(1)(2)(); // 3
// sum(1)(2)(-3)(); // 0

export default function sum(valueA) {
  return function (valueB) {
    if (valueB === undefined) return valueA;
    return sum(valueA + valueB);
  };
}
