// instead declaring variables multiple times...
let customerName = "Mirza"
let customerDOB = "01-01-01"
let customeraddress = "Wellington"

//do this instead: define data inside key and value pairs
let customer = {
    name: "Mirza",
    location: "wellington",
    city: "Wellington",
    dob: "01-01-01"
}

const tv = { // object starts here
brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
size: "55-inch", // values can be any data type
model: 2023, // multiple key-value pairs are separated by commas
resolution: "4K" // the comma on the last key-value pair can be ommited
} // object ends here

console.log(tv.brand);
console.log(tv["model"]);
delete tv.model;

tv.manufacturedate = "2025";

