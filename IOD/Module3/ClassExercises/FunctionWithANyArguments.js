/*function sum(a, b) {
    return a + b; 
}

console.log(sum(4, 5, 6)); //not possible. will ignore 3rd parameter */

function sum() {
  return arguments[0] + arguments[1] + arguments[2];
}

console.log(sum(4, 5, 6));
