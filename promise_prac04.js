console.log("Promise start");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({data: "Hello~~~~~", error: null});
  }, 5000);
});


console.log(myPromise);
console.log("in Progress...");

myPromise.then((val) => {
  console.log(val);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise chain complete");
    }, 2000);
  });
}).then((val) => {
  console.log(val);
});

myPromise.then((val) => {
  console.log(val);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise chain complete");
    }, 10000);
  });
}).then((val) => {
  console.log(val);
})

// total run 15s

/*
  Promise then will run in the same time, and console.log print also.
  And then after 2s will return the first new Promise.
  Finally, return the second new Promise
*/
