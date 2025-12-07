/* The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers. */

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
/*const phoneBookDEF = new Map()
phoneBookDEF.set('David', '0411223344')
phoneBookDEF.set('Ellen', '0412345678')
phoneBookDEF.set('Francis', '0487654321')*/

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF = new Map([
    ['David', '0411223344'],
    ['Ellen', '0412345678'],
    ['Francis', '0487654321']
]);

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0499887766') //set(key,new value) overwrites the old value

console.log("Caroline, " + phoneBookABC.get('Caroline'))

/* 
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map 
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book
*/


//merge the maps first
const mergedContacts = new Map([...phoneBookABC, ...phoneBookDEF]);

//for a cleaner look
function printPhoneBook(contacts) {
    mergedContacts.forEach((number, name) => {
    console.log(name + ": " + number);
});
}

printPhoneBook(mergedContacts);



