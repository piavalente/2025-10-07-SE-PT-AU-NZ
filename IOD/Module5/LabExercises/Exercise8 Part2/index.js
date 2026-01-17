const express = require("express");
const app =require("./app") //import app.js file

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const cors = require('cors');

const port = 3010
const fakeStoreRoutes = require("./routes/fakeStoreRoutes")


app.use(cors()); //enable cors
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/", express.static("public"));
app.use('/fakeStore', fakeStoreRoutes)


app.get("/", (req, res) => {         //use the router
    res.send("Welcome to Fake Store API");
});

app.listen(port, () => {
    console.log("This Fake Store API running on port 3010"); //start server
});



