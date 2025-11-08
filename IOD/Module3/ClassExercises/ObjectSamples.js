let student = {
    name: "Bruce",
    location: "Sydney",
};

let person = {}; //empty object. properties are optinal

console.log(student);
console.log(person);

person.name = "William";
person.age = 48;
person.loction = "Auckland"

console.log(student);
console.log(person);

const product = new Object() //object created using constructor

const user = { // user object contained within curly braces
name: 'joe', // string property with key 'name' and value 'joe'
age: 20, // numeric property with key 'age' and value 20
'has a dog': true, //multi-word property key 'has a dog' with boolean value true
};

console.log(user["has a dog"])

user.location = "NSW"
console.log(user["has a dog"]);
console.log(user);

const object = {
2: 'value of numeric property',
'2': 'value of string property'
}
console.log(object) // { '2': 'value of string property' } since 2 and ‘2’ are same

for(let j in user) {
    console.log(`key $(j) of object value is ${user[j]}`);
}