//function declarations 
function preparePizza() {
    setTimeout( () => console.log("Prepare pizza"), 1000);
};

//function expressions
const makeBase = function() {
    setTimeout( () => console.log("Make base"), 3000)
};

//arrow functions
const sauceAndCheeese = () => {
    setTimeout( () => console.log("Add sauce and cheese"), 7000);
}

//function declarations 
function pizzaToppings() {
    setTimeout ( () => console.log("Add pizza toppings"), 9000);
};

//function expressions
const cookPizza = function() {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => console.log("Cook pizza"), 11000);
        resolve();
};

//arrow functions
const pizzaReady = () => {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => console.log("Pizza is ready"), 13000);
        resolve();
    });
}




preparePizza();
makeBase();
sauceAndCheeese();
pizzaToppings();
cookPizza();
pizzaReady();


