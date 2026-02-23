//this is synchronus
console.log("sync1");
console.log("sync2");

let promise1 = newPromise((resolve) =>
  setTimeout(() => console.log("10"), 4000),
).then((result) => console.log(result));

await promise1;

console.log("sync3");
console.log("sync4");
console.log("sync5");
console.log("sync6");
console.log("sync7");
console.log("sync8");
