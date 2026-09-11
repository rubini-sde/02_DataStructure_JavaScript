export default function get(objectParam, pathParam, defaultValue) {
  //   Step: 1 - Normalize the path param -> array -> easy for traversal
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let object = objectParam;
  // Step 2: Iterate through the path array - until reaching the end of the path
  // assigning the value to the object variable
  for (let index = 0; index < path.length; index++) {
    if (object == null) {
      // handle both null and undefined
      return defaultValue;
    }

    object = object[String(path[index])];
  }
  // if the object expects in the given path > return the value. else defaultValue
  return object === undefined ? defaultValue : object;
}
