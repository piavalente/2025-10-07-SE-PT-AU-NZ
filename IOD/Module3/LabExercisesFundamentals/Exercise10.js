/*The following constructor function creates a new Person object with the given name and
age values.*/

//a)Create a new person using the constructor function and store it in a variable

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        return this.age >= 18 ? "can drive" : "can't drive"; //added can't drive if age is <18
    }
}
let person = [
    new Person ("Pia", 16),
    new Person ("Mary", 39),
    new Person ("Liza", 64)
];

person.forEach(person => {
    console.log(`${person.name}, Age: ${person.age}, ${person.canDrive()}`);
});


/*
let person1 = new Person ("Pia", 16);   //a
let person2 = new Person ("Mary", 39);  //b
let person3 = new Person ("Liza", 64);

console.log(`${person1.name}, Age: ${person1.age}, ${person1.canDrive()}`);
console.log(`${person2.name}, Age: ${person2.age}, ${person2.canDrive()}`);
console.log(`${person3.name}, Age: ${person3.age}, ${person3.canDrive()}`);
*/


