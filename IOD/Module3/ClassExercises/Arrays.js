let arr1 = ["Auckland", "Christchurch", "Wellington"];

let arr2 = [...arr1]; // creates a copy (not by reference)

arr2.pop(); // removes the last element from arr2

console.log(arr1); // ['Auckland', 'Christchurch', 'Wellington']
console.log(arr2); // ['Auckland', 'Christchurch']

const matrix = [
  // 3x3 matrix
  [1, 2, 3], // row 0
  [4, 5, 6], // row 1
  [7, 8, 9], // row 2
];

const students = [
  { firstName: "Mirza", location: "Auckland" },
  { firstName: "Billy", location: "Wellington" },
];

console.log(students[1].location); // Wellington

// SLICE
const sliceArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const sliced = sliceArray.slice(0, 3); // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3); // start at the end, get last 3 items
console.log(sliced); // [ 'red', 'orange', 'yellow' ]
console.log(endSliced); // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray); // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// SPLICE
const spliceArray = ["I", "study", "JavaScript", "right", "now"];
const removed = spliceArray.splice(0, 3, "Let's", "dance");
console.log(removed); // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray); // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

// CONCATENATION
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const combined = array1.concat(array2, array3);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(combined.concat(10, 11)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// indexOf
const colors = ["red", "green", "blue"];
console.log(colors.indexOf("green")); // 1
console.log(colors.indexOf("purple")); // -1 (not found)

// JOIN
const elements = ["Wind", "Water", "Fire", "Air"];
console.log(elements.join()); // Wind,Water,Fire,Air
console.log(elements.join(" ")); // Wind Water Fire Air
console.log(elements.join("; ")); // Wind; Water; Fire; Air

//forEACH
