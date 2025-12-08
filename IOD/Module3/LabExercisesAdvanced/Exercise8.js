/*Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.*/

function orderItems(...itemName) {
    return `Order placed for: ${itemName.join(", ")}`;
}

/* 
a) Create a decorator function validateStringArg(fn) which will validate an 
argument passed to fn to ensure that it is a string, throwing an error if not 
b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string
c) Extend the decorator function to validate as strings all arguments passed to fn
*/

function validateStringArg(fn) {
    return function(...args) {
        for (let arg of args) { //check every argument
            if (typeof arg !== "string") {
                throw new Error("Argument is not a string!");
            }
        }
        return fn(...args);
    };
}

// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem("Apple Watch", "iPhone", "Macbook Air")); // should run the function
} catch (error) {
    console.log("Caught an error:" + error.message);
}

try { 
    console.log(validatedOrderItem(123)); // should throw an error
} catch (error) {
    console.log("Caught an error:" + error.message);
}