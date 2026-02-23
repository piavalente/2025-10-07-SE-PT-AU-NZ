const promise1 = new Promise((resolve, reject) => {
  let number = Math.floor(Math.random() * 50);
  if (number % 2) resolve(true);
  else reject(true);
})
  .then((result) => console.log("Successful outcome"))
  .catch((result) => console.log("Failure or unsuccessful"))
  .finally(() => console.log("Promise fulfilled"));
