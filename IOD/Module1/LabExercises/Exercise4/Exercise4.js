// First task

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log(sum(1, 1));
console.log(multiply(3, 3)); 
console.log(subtract(8, 3)); 
console.log(divide(3, 3)); 

console.log(multiply(sum(1, 1), subtract(8, 3)));

//Second task
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Pia")
greet("Valente")

let firstName = "Pia";
let lastName = "Valente";

let fullName = firstName + " " + lastName;
console.log(fullName)
