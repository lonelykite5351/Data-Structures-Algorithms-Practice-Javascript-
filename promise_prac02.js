console.log("Promise start");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 3000);

  setTimeout(() => {
    reject()
  }, 2000);
});


console.log(myPromise);
console.log("in Progress");

myPromise
  .then(() => {
    console.log(("Program complete!"));
  })
  .catch(() => {
    console.log("Failure");
  })