const customSymbol = Symbol.for("util.promisify.custom");

export default function customPromisifyFunction(func) {
  if (func[customSymbol]) {
    return func[customSymbol];
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, value) => {
        if (err) {
          return reject(err);
        } else {
          resolve(value);
        }
      });
    });
  };
}
