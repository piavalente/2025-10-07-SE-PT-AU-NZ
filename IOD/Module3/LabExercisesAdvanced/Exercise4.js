/* Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.*/

/*
function printFibonacci(x) { //fibonacci sequence
    let num = 0, num1 = 1, num2 = 2;
    console.log(num1); 

    const intervalId = setInterval(() => {
        if (num >= x) {
            clearInterval(intervalId); //stops afte x numbers
            return;
        }

        console.log(num1);

        let nextNum = num1 + num2; // calculate the next Fibonacci number
        num1 = num2; 
        num2 = nextNum; 

        num++
    }, 1000); // prints every 1 second
}

printFibonacci(8); //prints first 8 numbers
*/

/* Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing */

function printFibonacciTimeouts(x) {
    let num = 0, num1 = 1, num2 = 2;

    function sequence() {
        if (num >= x) return; 
        /* c) Extend one of the above functions to accept a limit argument, which tells it how many
        numbers to print before stopping.*/

        console.log(num1);

        // calculate next number
        const nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;

        num++;

        setTimeout(sequence, 1000); // call next after 1 second
    }

    sequence(); // start the first call
}

printFibonacciTimeouts(8);  


