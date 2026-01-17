const express = require("express")
const calculatorRouter = express.Router()
const calculatorController = require("../controllers/calculatorControllers");

//ADDITION ROUTE
calculatorRouter.get("/Add", (req, res) => { 
    calculatorController.addNumbers(req,res);
});

//SUBTRACTION ROUTE
calculatorRouter.get("/Subtract", (req, res) => {
    calculatorController.subtractNumbers(req,res);
})

//MULTIPLICATION ROUTE
calculatorRouter.get("/Multiply", (req, res) => {
    calculatorController.multiplyNumbers(req,res);
})

//DIVISION ROUTE
calculatorRouter.get("/Divide", (req, res) => {
    calculatorController.divideNumbers(req,res);
})

module.exports = calculatorRouter//attach this router to web server application


