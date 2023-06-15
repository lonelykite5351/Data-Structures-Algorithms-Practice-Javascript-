console.log("Promise start");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 3000);
});


console.log(myPromise);
console.log("in Progress...");

myPromise.then(() => {
  console.log(("Step1 complete!"));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step2 complete!");
    }, 3000)
  });
}).then((msg) => {
  console.log(msg);
})