// Implement a function that accepts a callback and restricts its invocation to at most once. Subsequent calls to the returned function will return the result of the first invocation of the callback function. The callback function is invoked with the this binding and arguments of the created function.

export default function once(func) {
  let value;
  let ranOnce = false;
  return function (...args) {
    if (!ranOnce) {
      value = func.apply(this, args);
      ranOnce = true;
    }
    return value;
  };
}
