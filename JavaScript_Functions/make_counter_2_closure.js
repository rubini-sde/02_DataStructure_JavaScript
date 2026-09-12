// Implement a function makeCounter that accepts an optional integer value (defaults to 0) and returns an object that contains the following methods:

// get(): returns the current value.
// increment(): increments the current value and returns it.
// decrement(): decrements the current value and returns it.
// reset(): resets the current value to the initial value and returns it.

export default function makeCounter2(initialValue = 0) {
  const count = initialValue;

  return {
    get: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = initialValue;
      return initialValue;
    },
  };
}
