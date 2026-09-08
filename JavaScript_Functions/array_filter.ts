// filter() creates a new array containing only the elements that pass a condition.
// does not modify original array
// callback fn - takes element, index, array
// igonores empty values
interface Array<T> {
  myFilter(
    callbackFn: (element: T, index: number, array: Array<T>) => boolean,
    thisArg?: any
  ): Array<T>;
}

Array.prototype.myFilter = function <T>(
  callbackFn: (element: T, index: number, array: Array<T>) => boolean,
  thisArg?: any
) {
  const len = this.length;
  const results: Array<T> = [];

  for (let i = 0; i < len; i++) {
    if (i in this) {
      const val = this[i];
      const fnResult = callbackFn.call(thisArg, val, i, this);
      if (fnResult) {
        results.push(val);
      }
    }
  }

  return results;
};
