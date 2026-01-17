//unit to be tested - the square function
//Stored in a file called square.js - from here both test and use the same function, by exporting it

function square(num) {
    return num * num;
}

module.exports = {square}; //export from this file