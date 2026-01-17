const express = require('express'); //loads Express Library
const app = express()
const calculatorRouter = require('./routes/calculatorRoutes.js');
app.use("/calculator", calculatorRouter) //calculator route

module.exports = app



