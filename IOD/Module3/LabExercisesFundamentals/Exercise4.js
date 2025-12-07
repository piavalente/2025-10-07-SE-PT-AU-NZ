/*Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b.*/ 

//What does the ‘+=’ do? Take the current value and add something to it

let a = 2, b = 3;
let result =`${a} + ${b} is `;

if (a + b < 10) {               //this is 5 < 10 
    result += 'less than 10';   //this will be the result
} else {
    result += 'greater than 10';
}

console.log(result); //2 + 3 is less than 10
console.log(result ? 'result is true' : 'result is false');


//changing the value to greater than 10
let c = 6, d = 5;
let result2 =`${c} + ${d} is `;

if (c + d < 10) {               
    result2 += 'less than 10';   
} else {
    result2 += 'greater than 10';
}

console.log(result2);
console.log(result2 ? 'result is true' : 'result is false');