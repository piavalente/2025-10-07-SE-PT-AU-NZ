/* The following delayMsg function is intended to be used to delay printing a message until
some time has passed.*/

/*a) What order will the four tests below print in? Why? 
- In order, it will be tests 4 and 3 together with no delay, 
follwed by test 2 with .02 seconds delay and then last is test 1 with .1 second delay. */

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`) //b) Rewrite delayMsg as an arrow function
};

let test1 = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
let test2 = setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
let test3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
let test4 = delayMsg('#4: Not delayed at all');
let test5 = setTimeout(delayMsg, 12000, `#5: Delayed by 12000ms`); //c) Add a fifth test which uses a large delay time (greater than 10 seconds) - 12second delay

clearTimeout(test5); //d) Use clearTimeout to prevent the fifth test from printing at all.