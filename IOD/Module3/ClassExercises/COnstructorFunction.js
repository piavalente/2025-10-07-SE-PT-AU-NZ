//Creating objects
//simple method
let person = {
    firstName: "Mirza"
}
let person2 = {...person,firstName: "Billly" }


//WLL CREATE THE SAME RESULT. BOTH VALID
function Person(firstName) {
    this.firstName = firstName
}

//constructor function
let person2 = new Person("Mirza")

let person4 = new Person("Billy");

//classes
class Person {
    constructor9firstName) {
        this.firstName = firstName;
    }
}

let person5 = new Person("Willy");


