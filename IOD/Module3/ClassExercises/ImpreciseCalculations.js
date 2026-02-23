const toobig = 1e350; // 1 * 10350 - overflows storage
console.log(toobig); // Infinity
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

if ((toobig, Number.MAX_VALUE)) console.log("Number within the range");
else console.log("number outside the range");

const point1 = 0.1;
const point2 = 0.2;

const result = point1 + point2;

console.log(result.toFixed(2)); //formats a number to a fixed number of decimal places and returns it as a string
console.log(9_999_999_999_999_999); // 16 digits, prints as 10000
console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
