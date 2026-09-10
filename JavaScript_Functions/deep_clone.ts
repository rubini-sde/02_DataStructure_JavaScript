export default function deepClone(value) {
  // primitive values (boolean, number, string, bigint, symbol), null, undefined
  if (typeof value !== "object" || value === null) {
    return value;
  }
  // arrays
  if (Array.isArray(value)) {
    value.map((item) => {
      deepClone(item);
    });
  }
  // objects
  if (typeof value === "object") {
    let clone = {};

    for (const [key, val] of Object.entries(value)) {
      clone[key] = deepClone(val);
    }

    return clone;
  }
}
