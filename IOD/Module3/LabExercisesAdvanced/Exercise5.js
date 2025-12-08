let carOriginal = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); //This car is a Porsce 911 from 1964
    }
};

let carNew = {      //b) cloned and overriden
    ...carOriginal, 
    year: 1970,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); //This car is a Porsce 911 from 1970
    }
};

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
let carDifferent = {      
    ...carOriginal, 
    make: "Ferrari",
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); //This car is a Porsce 911 from 1970
    }
};



carOriginal.description(); //works - this points to the carOriginal
carNew.description();
carDifferent.description();



//setTimeout(car.description, 200); //fails = setTimeout just runs by itself, it does not belong to car

//a) Wrapping inside a function
//c) Still calls the original (1964) values because the original is still referenced. 

setTimeout(function() {
    carOriginal.description();      
}, 200);


// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
const boundDescription = carOriginal.description.bind(carOriginal)
setTimeout(boundDescription, 200)
// will still print the original values since its already bound no matter if i change another property












//setTimeout(() => car.description(), 200); - arrow 