// A - Has initial Value
// B - Has no initial value > need to account for empty arrays, sparse arrays - find start index with value and assign it to accumulator

interface Array<T> {
  myReduce<U>(
    callbackFn: (
      accumulator: U,
      currentVal: T,
      currIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);

  const hasInitialValue = arguments.length >= 2;

  let accumulator;
  let startIndex = 0;

  if (hasInitialValue) {
    accumulator = initialValue;
  } else {
    // find the start index
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }
    if (startIndex >= this.length) {
      throw new TypeError("Empty array with no initial value");
    }
    accumulator = startIndex;
    startIndex++;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};
