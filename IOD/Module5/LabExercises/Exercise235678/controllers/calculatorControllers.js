const calcLibrary = require("../libraries/calculator")
let myCalc = new calcLibrary(); //Instance of the calculator class

//ADDITION
const addNumbers = (req,res) => {
    let num1 = parseInt(req.query.num1); //query parameter
    let num2 = parseInt(req.query.num2);
    
    if(isNaN(num1) || isNaN(num2)) {
        res.status(400).json({"error": "numbers should be integers"})
    } else {
        let result = myCalc.add(parseInt(num1), parseInt(num2));  //parse- converts string into an integer
                
        res.status(200)     //200 is code for successful operations           
        res.json({          //json obj as a respond
            res:result,
        });
    }
};

//SUBTRACT
const subtractNumbers = (req,res) => {
    let num1 = parseInt(req.query.num1); 
    let num2 = parseInt(req.query.num2);

     if(isNaN(num1) || isNaN(num2))
    {
        res.status(400).json({"error": "numbers should be integers"})
    } else {
        let result = myCalc.subtract(num1, num2); //parse- converts string into an integer
            
        res.status(200)     //200 is code for successful operations           
        res.json({          //json obj as a respond
            res:result,
        });
    }
}

//MULTIPLY
const multiplyNumbers = (req,res) => {
    let num1 = parseInt(req.query.num1); 
    let num2 = parseInt(req.query.num2);

     if(isNaN(num1) || isNaN(num2))
    {
        res.status(400).json({"error": "numbers should be integers"})
    } else {
        let result = myCalc.multiply(num1, num2);  //parse- converts string into an integer
            
        res.status(200)     //200 is code for successful operations           
        res.json({          //json obj as a respond
            res:result,
        });
    }
}

//DIVISION
const divideNumbers = (req,res) => {
    let num1 = parseInt(req.query.num1); 
    let num2 = parseInt(req.query.num2);

     if(isNaN(num1) || isNaN(num2))
    {
        res.status(400).json({"error": "numbers should be integers"})
    } else {
        let result = myCalc.divide(num1, num2);  //parse- converts string into an integer
            
        res.status(200)     //200 is code for successful operations           
        res.json({          //json obj as a respond
            res:result,
        });
    }
}
    

module.exports = {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers};

