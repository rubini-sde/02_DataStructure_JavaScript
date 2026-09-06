// Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

type ArrayValue<T> = T | Array<ArrayValue<T>>;

export default function flatten<T>(value: Array<ArrayValue<T>>): Array<T> {
  const result: Array<T> = [];

  for (let item of value) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
