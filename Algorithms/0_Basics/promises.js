// Basic syntax

const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("Done"));


  Promise.all()
  // all fulfills(array of values in order) or first rejects (error)

  Promise.allSettled()
  // all settle - fulfill or reject (array of {status, value/reason} objects)

  Promise.any()
  //first to fulfill or all rejects - (value/AggregateError)

  Promise.race()
  // first promise to settle - fulfill/reject (value/error)
  