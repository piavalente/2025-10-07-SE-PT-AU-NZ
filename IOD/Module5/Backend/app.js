
const express = require("express"); //importing express
const app = express() //web server
const calculatorRouter = require("./routes/calculatorRoutes.js");
app.use("/Calculator", calculatorRouter) //calculator route

module.exports = app;