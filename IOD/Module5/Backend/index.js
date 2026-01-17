/*move this to app.js
const express = require("express"); //loads Express library*/

const express = require("express");
const app =require("./app.js"); //import app.js file

//SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const myAppRouter = require("./routes/myAppRoutes.js"); //imported router
const secondAppRouter = require("./routes/secondAppRoutes.js"); //imported second router
//CALCULATOR ROUTE
/*move this to app.js 
const calculatorRouter = require("./routes/calculatorRoutes.js")*/
//USER ROUTES
const userRouter = require("./routes/userRoutes.js")

//CORS
const cors = require("cors");


//APP 1
/*move this to app.js 
const app = express()//web server*/
const port = 3003; //const port = 80; //default port. no need to type port number. Will go to default page
app.listen(port, ()=>{  //each web server should listen to a port number and a function that acknowledge that the application is listening
    console.log("Web server started...");
});
/*app.get("/", (req, res) => {
    res.send("Welcome to my backend application");
})*/ 
//CHANGED TO STATIC PAGE

app.use(cors()); //this will resolve the cors blocking policy
app.use(express.json()); //enabling application to use JSON format as incoming data
app.use("/", express.static("public"));
app.use("/", myAppRouter); //attached router back to web server
/*move this to app.js
app.use("/Calculator", calculatorRouter);*/ //http://127.0.0.1:3003/Calculator/Add?num1=10&num2=3
app.use("/Users", userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//transfer this to myAppRoutes
/*
app.get("/about", (req, res) => { //paths/routes
    res.send("This is about...");
})

app.get("/test", (req, res) => {
    res.send("This is for testing purposes...");
})
app.get("/contact", (req, res) => {
    res.send("This is my contact...");
})
*/




//APP2 - SAMPLE ONLY
const app2 = express();//second web server
const port2 = 3004; //port for web server2
app2.listen(port2, ()=>{
    console.log("Second web server is started");
});
/*
app2.get("/", (req, res) => {
    res.send("Welcome to my second server");
})
app2.get("/about", (req, res) => {
    res.send("About the second server...");
})
app2.get("/test", (req, res) => {
    res.send("Testing the second server...");
})
*/
app2.use("/", secondAppRouter);



//CALCULATOR 
//will show on the static page
//imported calculator












//npm start on terminal
//use new port number to access 2nd web server 127.0.0.1:3001