/* Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips: */

const animals = ['Tiger', 'Giraffe']
console.log(animals)

//a) add 2 new values to the end
animals.push("Elephant", "Lion")
console.log(animals)

//b) add 2 new values to the beginning
animals.unshift("Alligator", "Monkey")
console.log(animals)

//c) sort the values alphabetically
animals.sort();
console.log(animals) //[ 'Alligator', 'Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger' ]

/* Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue */

function replaceMiddleAnimal(newValue) {
    animals.splice(2, 1, newValue);
};

replaceMiddleAnimal("Zebra")
console.log(animals)

/* Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */

function findMatchingAnimals(beginsWith) {
  return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}

console.log(findMatchingAnimals("M"));
console.log(findMatchingAnimals("t"));