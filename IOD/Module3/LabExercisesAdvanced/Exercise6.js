/* Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/

//Function - to be inherited, also the original function
Function.prototype.delay = function(ms) {
    const delays = this;                                //points to the original function                             
    return function(...args) {                          //includes all arguments    
        setTimeout(() => delays.apply(this, args),ms);  //added apply (task b)
    };
}

function multiply(a, b, c, d) {   //this has two parameters, a and b
    console.log( a * b * c * d);
}

multiply.delay(500)(5, 5, 2, 2); // prints 25 after 500 milliseconds          

