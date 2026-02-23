let animal = {
  eats: true,
  sleeps: true,
  legs: 4,
  mammal: true,
}; // inherits from object prototype

console.log(animal);
console.log(Object.getPrototypeOf(animal));

console.log(Object, getOwnPropertyNames(animal)); //will return array of all property namess
