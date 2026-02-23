let timerID = setInterval(() => console.log("Processing..."), 1000);

setTimeout(() => clearInterval(timerID), 10 * 1000);
