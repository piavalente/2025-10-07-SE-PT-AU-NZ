const express = require("express");
const app =require("./app") //import app.js file

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const cors = require('cors');

const port4 = 3005

app.use(cors()); //enable cors

app.get("/", (req, res) => {         //use the router
    res.send("Welcome to my calculator");
});

app.listen(port4, () => {
    console.log("This is a calculator running on port 3005"); //start server
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//define the router
//add routes to the router
//use the router
//root the route
//start server



//http://127.0.0.1:3005/calculator/Add?num1=2&num2=3