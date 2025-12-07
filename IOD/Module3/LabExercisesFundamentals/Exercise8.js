/*The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for…in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.*/

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};
function printSydneyInfo(sydney) {
    for(let key in sydney) {
        console.log('key: '+ key);
        console.log('value: '+ sydney[key]);
    }
}

printSydneyInfo(sydney);

//New City
const wellington = {
    name: 'Wellington',
    population: 200_000,
    state: 'Wellington',
    founded: '22 January 1840',
    timezone: 'NewZealand/Auckland'
};
function printWellingtonInfo(wellington) {
    for(let key in wellington) {
        console.log('key: '+ key);
        console.log('value: '+ wellington[key]);
    }
}

printWellingtonInfo(wellington);


