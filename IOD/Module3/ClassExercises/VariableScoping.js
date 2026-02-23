let x = 10; //this is a global variable. can be accessed in any blocl

if (x == 10) {
  //local variable
  let k = 20; //these variables can only be accessed within this {}
  x = x + 5;
}

function processData() {
  let i = 40; //this a global variable in an inner block
  if (i == 40) {
    let z = 50;
    i += 1;
  }
}

//if outside the block {}, it is global
