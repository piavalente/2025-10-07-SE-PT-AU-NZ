//debounce - function executes after a pause. I had to research what is this all about

function debounce(func, ms) {   //ms as the second argument
    let timerID = 0;

    return function(...args) { //collects all arguments
        if(timerID) clearTimeout(timerId);  //reset if called again
        timerId = setTimeout(() => func(...args), ms); //i can now customize the dealy instead of 1 second
    };  
}

function printMe(msg) { //argument msg
    msg = "hi"
    console.log('printing debounced message:', msg);
}

printMe = debounce(printMe, 5000); //debounce 5 seconds

/*fire off 3 calls to printMe within 300ms - only the LAST one should print, after
1000ms of no calls*/
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);