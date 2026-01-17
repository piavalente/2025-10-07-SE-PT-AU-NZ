class Calculator {
    constructor() {
        this.id = Date.now()
}

    #log = (value) => {
        console.log(`[Calculator:${this.id}:${value}]`);
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