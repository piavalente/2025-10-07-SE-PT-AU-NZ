let studentName = "Willy";

let fullName = studentName + " Sobers";
console.log(fullName);

let apple = {
  color: "red",
  size: "medium",
  quantity: 5,
  valueOf() {
    return this.quantity * 3; //number
  },
  toString() {
    return this.color + " royal gala"; //use like a string
  },
};

let totalSales = (apple * 4) / 2;
console.log(totalSales);

let fullNameofApple = apple.toString() + "sobers";
console.log(fullNameofApple);

console.log(apple.toString());
