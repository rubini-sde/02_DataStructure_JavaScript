export default function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, ...val) => {
        if (err) {
          reject(err);
        } else {
          resolve(val);
        }
      });
    });
  };
}
