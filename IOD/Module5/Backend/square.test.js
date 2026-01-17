//unit test - stored in square.test.js

//first, we import the square function
const {square} = require("./square");

//Test case to test square of 5
//Execute this using script
test('square of 5 to be 25', () => {
    expect(square(5)).toBe(25);
});

test('square of 25 to be 125', () => {
    expect(square(25)).toBe(625);
});