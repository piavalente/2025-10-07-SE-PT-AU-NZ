//each route file should also have a router
//no need to create web server

const express = require("express")
const myAppRouter = express.Router() //create a router


//aap.get transferred route from index.js changed to myAppRouter.get
myAppRouter.get("/test", (req, res) => {
    res.send("This is for testing purposes...");
})

myAppRouter.get("/about", (req, res) => { //paths/routes
    res.send("This is about...");
})

myAppRouter.get("/contact", (req, res) => {
    res.send("This is my contact...");
})

module.exports = myAppRouter //module will export router