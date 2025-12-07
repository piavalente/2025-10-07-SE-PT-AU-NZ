let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2); //changed to a string (0.20 became "0.20")
let fixedTen = tenCents.toFixed(2);       //changed to a string (0.10 became "0.10")
console.log(fixedTwenty + fixedTen) 
/* a) why is this not working? 
toFixed converts numbers to strings
the answer became a string "0.20" + "0.10" prints as 0.200.10 */

/* b) Create a function currencyAddition (float1, float2) which safely adds the two decimal numbers
float1 and float2 and returnds the correct float result.*/

//convert decimals to whole number, add, convert back to decimal
function currencyAddition(float1, float2) {
    let num1 = float1 * 100 //20
    let num2 = float2 * 100 //10
    let sum = num1 + num2;
    return sum / 100;
}

console.log(currencyAddition(twentyCents, tenCents)); // 0.3

/* c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. */


function currencyOperation(float1, float2, operation, numDecimals = 2) {
    let result;

    switch (operation) {    //use switch to compare one value against many possible cases
        case "+":
            result = float1 + float2;
            break;
        case "-":
            result = float1 - float2;
            break;
        case "*":
            result = float1 * float2;
            break;
        case "/":       
            result = float1 / float2;
            break;
        default:
            return "Error"; 
    }
/*d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.*/
   
    return parseFloat(result.toFixed(numDecimals));
}

console.log(currencyOperation(0.2, 0.1, "+")); // 0.3
console.log(currencyOperation(0.2, 0.1, "-", 2)); // 0.10
console.log(currencyOperation(0.2, 0.1, "*", 3)); // 0.020
console.log(currencyOperation(0.2, 0.1, "/", 4)); // 2.0000
