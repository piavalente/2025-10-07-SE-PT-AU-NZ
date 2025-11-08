const phone = {
model: 'iPhone 11',
colour: 'black'
}

if (phone.colour) {
    console.log(`My ${phone.model} is ${phone.colour}`) // prints message
}

if (phone.storage) { // undefined counts as false, so the below won't print
    console.log(`My ${phone.model} has ${phone.storage}GB`);
}

