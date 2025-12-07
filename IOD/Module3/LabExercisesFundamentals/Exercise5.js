/*Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/

let name = "Pia"

function getGreeting(name) {
    return 'Hello ' + name + '!';
}

console.log(getGreeting(name))


//Function expression syntax
const getGreeting2 = function(name) {
  return 'Hello ' + name + '!';
};

console.log(getGreeting2("Pia"));

//Arrow function
const getGreeting3 = name => "Hello" + " " + name + "!"

console.log(getGreeting3("Pia"))