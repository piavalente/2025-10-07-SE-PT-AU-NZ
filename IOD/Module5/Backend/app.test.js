const request = require("supertest"); // import supertest
const app = require("./app"); // import your app.js

// Describe test case
describe('calculator routes', () => {

    // Generate two random numbers
    let num1 = Math.floor(Math.random() * 1_000_000);
    let num2 = Math.floor(Math.random() * 1_000_000);

    // ADDITION
    test('GET /calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${num1}&num2=${num2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    res: num1 + num2,
                });
            });
    });

    // SUBTRACTION
    test('GET /calculator/subtract => difference of numbers', () => {
        return request(app)
            .get(`/calculator/subtract?num1=${num1}&num2=${num2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    res: num1 - num2,
                });
            });
    });

}); // Close describe
