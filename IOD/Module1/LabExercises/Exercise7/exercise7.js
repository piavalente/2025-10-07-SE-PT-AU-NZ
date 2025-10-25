//Addition
function sum(a, b) {
    return a + b;
}

if (sum(2, 4) !=6) throw new Error("Test Failed");
if (sum(0,6) !=6) throw new Error("Test Failed");
if (sum(-2,-4) !=-6) throw new Error("Test Failed");

console.log("All tests passed");

//Subtraction
function subtract(b, a) {
    return a - b;
}

if (subtract(5, 10) !=5) throw new Error("Test Failed");
if (subtract(0,5) !=5) throw new Error("Test Failed");
if (subtract(-5,-10) !=-5) throw new Error("Test Failed");

console.log("All tests passed");

//Multiplication
function multiply(a, b) {
    return a * b;
}

if (multiply(3, 3) !=9) throw new Error("Test Failed");
if (multiply(0,3) !=0) throw new Error("Test Failed");
if (multiply(.5,3) !=1.5) throw new Error("Test Failed");

console.log("All tests passed");

//Division
function divide(a, b) {
    return a / b;
}

if (divide(12,4) !=3) throw new Error("Test Failed");
if (divide(0,12) !=0) throw new Error("Test Failed");
if (divide(.5,.5) !=1) throw new Error("Test Failed");

console.log("All tests passed");