class Calculator {
    constructor() {
        //this.id = Date.now()
        this.id = Math.floor(Math.random() * 1000);
}
    //generic library for logging - not sure if this is what's being asked to be done
    #log = (message, value) => {
        console.log(`[Calculator:${this.id}] ${message} => Result:${value}`);
    }

    add(num1, num2) {
        this.#log(); // public method calling private method
        const value = num1 + num2
        return value;
    }

    subtract(num1, num2) {
        this.#log(); // public method calling private method
        const value = num1 - num2
        return value;
    }

    multiply(num1, num2) {
        this.#log(); // public method calling private method
        const value = num1 * num2
        return value;
    }

    divide(num1, num2) {
        this.#log(); // public method calling private method
        const value = num1 / num2
        return value;
    }



}

module.exports = Calculator;







//name
//property
//method