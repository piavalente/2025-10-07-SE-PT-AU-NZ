let students = ["John", "Bill", "Smith", "Tom"]; // this is an array to avoid retyping 4 times

let cars = ["Audi", "Mercedes", "Toyota", "BMW"]; // first on the list is numbered 0

let countries = new Array();
countries.push("New Zealand");
countries.unshift("Australia");
countries.unshift("USA");
console.log(countries);

console.log(students[0]); // this is John
console.log(students[1]); // this is Bill
console.log(students[2]);
console.log(students[3]);

students.unshift("James");
console.log(students);

console.log(cars); // prints all cars

cars[2] = "Mitsubishi"; // replaces Toyota with Mitsubishi

console.log(cars);

let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]
rivers.shift()
console.log(rivers)

let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji' ];
let fujiIndex = volcanoes.indexOf('Mount Fuji');
console.log(fujiIndex); // 2 (indexes start at 0)
console.log(volcanoes.indexOf("Mount Etna")) //index of use to look for data
console.log(volcanoes.indexOf("Mount Albert")) //1- as it is not indicated in the list of volcanoes

console.log(countries.length) //length gives size of array