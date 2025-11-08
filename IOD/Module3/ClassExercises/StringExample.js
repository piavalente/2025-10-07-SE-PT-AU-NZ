let string1 = "sample string in 'double' quotes";
let string2 = 'sample string in "siingle" quotes';
let string3 = `sample string in backticks`;

let numberOfStudents = 6;

console.log(string1);
console.log(string2);
console.log(string3);

console.log("The number of students in this cohort is " + numberOfStudents); //substituted value from let
console.log(`The number of students in this cohort is ${numberOfStudents}`);  //does the same job

let isChecked = true;
let isToggledon = false;
console.log(isChecked);
console.log(isToggledon);

isChecekd = !isChecked; // this ! is called not operator. will reverse the result //result will be false
console.log(isChecked);
console.log(isChecked);
console.log(isToggledon);

if(isChecked) {
    console.log("Is checked true") //this will not be executed bec last statement with ! became FALSE
} else {
    console.log("Is checked false"); //It will go stright here.
}

let x = 10
if(x) {
    console.log("x is true");
} else {
    console.log("x is false");
}

//REMEMBER: 
//0 is always false
//string is false


let age=null;       //defined but no value

if(age) {
     //write logic to proceed
} else {
    console.log("please enter the age.");
}

let nameOfPerson;
console.log(nameOfPerson); //undefined- nothing exist

let location; //undefined
console.log(location);

if(age=location) {
    console.log("age and location are same values");
}

if(age==location) { //== is to compare values
    console.log("age and location are of same types");
} else console.log("age and location are not of the same tiype");
   