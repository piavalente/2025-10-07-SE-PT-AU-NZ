let newArray = ["Mirza", "Smith", "Mirza", "Smith", "Karl", "Karl"];
let newSet = new Set(newArray);
console.log(newArray);
console.log(newSet);

newSet.add("Billy");
newSet.add("George");
console.log(newSet.size);

console.log(newSet);

const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
// traditional style of for loop - works because Sets are iterable
for (let name of names) {
  console.log(name);
}
// more concise for simple operations, newer syntax using arrow function
names.forEach((name) => console.log(name));
