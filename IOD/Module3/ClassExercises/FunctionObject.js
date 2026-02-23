function sayHiDefn() {
  console.log("Hi (function definition)");
} // named function

const sayHiExpn = function () {
  console.log("Hi (function expression)");
}; // named variable

console.log(sayHiDefn.name);
console.log(sayHiExpn.name);
const sayHiArrow = () =>
  console.log("Hi (arrow function)'); // named variable"); //named variable
console.log(sayHiArrow.name);
