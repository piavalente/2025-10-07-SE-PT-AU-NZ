//Different ways of creating an object

//object literal
let student = {
  firstName: "Pia",
  location: "Wellington",
  printFirstName() {
    console.log(this.firstName);
  },
};

//function creator
function student(firstName, location) {
  this.firstName = firstName;
  this.location = location;
}

let student1 = new Student("Bill", "Sydney");
let student2 = new Student("Willy", "Wellington");

//Classes

class Student {
  constructo(fistName, location) {
    //replaces function student
    this.firstName = this.firstName;
    this.location = location;
    this.region = "Oceania";
  }
  hasShortName() {
    this.firstName.length <= 3 ? true : false;
  }
  printFirstNAme() {
    console.log(this, firstName);
  }
}

let student3 = new StudentClass("John", "Hamilton");
let student4 = new StudentClass("Steve", "Tasman");
