const hobbits = ["Bilbo", "Frodo", "Samwise", "Merry", "Pippin"];
const students = [
  { firstName: "Mirza", location: "Auckland" },
  { firstName: "Billy", location: "Sydney" },
];

for (let k = 0; k < hobbits.length; k++) {
  console.log(hobbits[k]);
}

//using forEach syntax
hobbits.forEach(function (item, i) {
  console.log("item = " + item + "i = " + i);
});

hobbits.forEach((item, i) => console.log(`item ${item} and i ${i}`));
//one line of code does not need {}
//=> is shorter way of writing a function

//FIND
console.log(hobbits.indexOf("Samwise"));

let studentFound = students.find((item) => item.firstName === "Billy");
// arrow function that checks the name right away

console.log(studentFound);

//FIND
const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
];

let winterproduct = products.find((product) => product.category == "Winter");

let winterProducts = products.filter((product) => product.winter == "Winter");

let shirtsProducts = products.filter((product) => product.shirts == "Shirts");

let under50s = products.filter((product) => product.price < 50);

console.log(winterproduct);
console.log(winterProducts);
console.log(shirtsProducts);
console.log(under50s);
