const express = require("express")
const calculatorRouter = express.Router()


calculatorRouter.get("/Add", (req, res) => {
    let num1 = req.query.num1; //query parameter
    let num2 = req.query.num2;

    let result = parseInt(num1) + parseInt(num2); //parse- converts string into an integer
    
    res.status(200)     //200 is code for successful operations           
    res.json({          //json obj as a respond
        res:result,
    });
});


calculatorRouter.get("/Subtract", (req, res) => {
    let num1 = req.query.num1; 
    let num2 = req.query.num2;

    let result = num1 - num2;

    res.status(200)              
    res.json({          
        res:result,
    });
})


module.exports = calculatorRouter//attach this router to web server application - index.js