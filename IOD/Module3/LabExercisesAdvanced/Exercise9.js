/* We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute. */

/* a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) - do this first

and returns a promise we can use
via .then(), as in the starter code below */

function randomDelay() {
    return new Promise ((resolve, reject) => {
       
        let delay = Math.floor(Math.random() * 20) + 1; //creats random number between 1 and 20
        let delayMs = delay * 1000;  //convert to ms as JS only reads ms

        /* b) if the random delay is even, consider this a successful delay and resolve the promise,
        and if the random number is odd, consider this a failure and reject it */
        setTimeout(() => {
            if (delay % 2 === 0) {  //if it is even, success
                resolve(`Successful delay of ${delay} seconds!`);
            } else {                //if it is odd, failed
                reject(`Failed delay of ${delay} seconds!`);
            }
        }, delayMs);
    });
}

// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value
randomDelay()
  .then(message => console.log(message)) 
  .catch(error => console.log(error)); 