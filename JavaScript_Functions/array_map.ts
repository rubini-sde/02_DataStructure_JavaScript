interface Array<T> {
  myMap<U>(
    callbackFn: (element: T, index: number, array: Array<T>) => U,
    thisArg?: any
  ): Array<U>;
}

Array.prototype.myMap = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function") {
    throw TypeError(`${callbackFn} is not a function`);
  }

  const len = this.length;
  const results = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in this) {
      results[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return results;
};
