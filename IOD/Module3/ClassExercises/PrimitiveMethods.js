const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)); // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)); // 1.234560000 - fills or rounds to the exact number of digits
console.log(n.toFixed(4)); // only display 4 decimal places

const hello = "hello world"; // primitive string
const welcome = "Welcome";

console.log(hello.toUpperCase()); // HELLO WORLD
console.log(welcome.toLowerCase()); // welcome
console.log(hello.startsWith("hello")); // true

if (hello.startsWith("hello")) {
  console.log("success"); // will print 'success'
} else {
  console.log("fail");
}
