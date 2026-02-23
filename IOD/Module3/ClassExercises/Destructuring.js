let students = ["Mirza", "William", "Smith"];

let students1 = students[0];
let students2 = students[1];
let students3 = students[2];

//more efficient way - destructuring an array
let [student1, student2, student3] = ["Mirza", "William", "Smith"];

console.log(student1);
console.log(student2);
console.log(student3);

//another way
let [d, e, f] = "xyzabc";

console.log(d);
console.log(e);
console.log(f);

//
let [s1, , s2, , s3] = ["Mirza", "William", "Smith", "Villy", "Jacob"]; //Destructuring an array

console.log(s1);
console.log(s2);
console.log(s3);

//array destructuring - It works with any iterable on the right-side.
const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [one, two, three] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [[type, quantity]] = new Map([["apple", 4]]); // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

let customer = {
  customerName: "William Shakespear",
  location: "England",
  country: "United Kingdom",
  DOB: "1600-01-01",
};

let { country, DOB } = customer; //object destructuring
console.log(country);
console.log(DOB);

/*let countryName = customer.country
let Dob = customer.dob*/

//destructuring used for define functions with smart parameters
function processOrder(DOB, location) {
  if (DOB < "1900-01-01") {
  }
  if (location == "United Kingdom") {
  }
}
processOrder(customer);

const monarch = {}; // empty object
[monarch.title, monarch.name] = "King Charles".split(" "); // store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }
