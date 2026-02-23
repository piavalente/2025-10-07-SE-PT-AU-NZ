/*setTimeout(printThirdline, 2000);
//first paramenter, 2000 is 2 seconds*/
setTimeout(() => console.log("First"), 1000);
setTimeout(() => console.log("Second"), 2000);
setTimeout(() => console.log("Third"), 2000);

/*function printThirdline() {
    console.log("Third");   //delay by 2 seconds
}*/

console.log("Fourth");
setTimeout(() => console.log("Fifth"), 4000);
console.log("Sixth");

function sum(a, b) {
  console.log(a + b);
}

let timerID = setTimeout(sum, 2000, 10, 20);

//clearTimeout(timerID);  //clears or stops the execution of set timeout function

for (let i = 10; i < 10; i++) {
  console.log("Processing...");

  if (1 == 5) {
    clearInterval(timerID);
    console.log("Processing stopped..");
    break; //abrupt stop
  }
}
