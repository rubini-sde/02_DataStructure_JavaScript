// jsonStringify(value)
//         |
//         ├── null       → "null"
//         |
//         ├── string     → '"' + value + '"'
//         |
//         ├── number     → number converted to string
//         |
//         ├── boolean    → boolean converted to string
//         |
//         ├── array      → recursively stringify each element
//         |
//         └── object     → recursively stringify each property

export default function jsonStringify(value) {
  if (value === null) {
    return "null";
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    const arrayVal = value.map((item) => jsonStringify(item)).join(",");
    return `[${arrayVal}]`;
  }
  if (typeof value === "object") {
    const obj = Object.entries(value)
      .map(([key, val]) => {
        return `${jsonStringify(key)} : ${jsonStringify(val)}`;
      })
      .join(",");

    return `{${obj}}`;
  }
}
