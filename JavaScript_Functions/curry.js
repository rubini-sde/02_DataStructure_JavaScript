// curry is a wrapper. You hand it a function; it hands you back a different function that behaves smarter.
// Every time you call the returned function, ask one question: "Do I have enough arguments yet to run the real function?"
// If yes → just run the real function with everything collected so far, and return the answer. Done.
// If no → don't run anything yet. Instead, remember what's been collected so far, and give back another waiting function — one that will repeat this same check once it receives more arguments.
// This repeats — collect, check, wait, collect, check, wait — until enough arguments have piled up, at which point step 3 finally fires.

function curry(func) {
  // higher order function that takes a function & returns a new function

  return function curried(...args) {
    // ...args collects the arguments it was called with into an array
    if (args.length >= func.length) {
      // if arguments passed > named, non default, non rest parameters (collected enough arguments to call the function)
      return func.apply(this, args);
    }
    return (...more) => curried.apply(this, [...args, ...more]);
  };
}
