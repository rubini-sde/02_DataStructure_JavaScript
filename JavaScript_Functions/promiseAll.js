// returns a new promise
// results array to carry the values of resolved promises
// if iterabled is empty - resolve with empty results array
// iterate through iterables -> resolve each item
// if value is returned -> add it the same index in results arrays
//                    -> check if all values are resolved
// if reason is returned -> reject with reason

export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);

    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          results[index] = value;
          unresolved -= 1;
          if (unresolved === 0) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}
