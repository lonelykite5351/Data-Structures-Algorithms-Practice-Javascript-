console.log("Promise start");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Complete");
  }, 3000);
});

console.log(myPromise);

console.log("Promise in progress");

myPromise
  .then((value) => {
    console.log(value);
  });

