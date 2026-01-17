//DYNAMIC PARAMS

const express = require("express");
const userRouter = express.Router();

const users = [
    {id: 1, name: 'Anthony Albanese', country: 'AU'},
    {id: 2, name: 'Joe Biden', country: 'US'},
    {id: 3, name: 'Chris Hipkins', country: 'NZ'},
    {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
];

//REQUEST HEADERS
userRouter.get("/Headers", (req,res)=> { //header is info abour the request
    res.json(req.headers);
})

//REQUEST BODY
userRouter.post("/", (req,res)=> { //add item
    console.log(req.body); //debugging purpose
    let newUser = req.body;

    if(!newUser.name || !newUser.country)
    {
       res
        .status(500)
        .json({error: "User must have either name or country to add"});
        return;
    } else if (!newUser.id) {
        newUser.id = users.length + 1
    }

    users.push(newUser) //array should be appended

    res.status(200).json(newUser); //succeful

});

//Dynamic request param endpoint - get the user matching
//Dynamic path should be last
//Any routes should be above this
userRouter.get("/:id", (req, res)=> {
    let userid = req.params.id; //dynamic request parameter fetched
    let userFound = users.find((user) => user.id == userid); //if this one matches with the dynamic parameter

    if(userFound) {
        res.status(200) //success
        res.json({result: userFound});
    } else {
        res.status(404) //not found
        res.json({"result": "user not found"})
    }
});

module.exports = userRouter;

























userRouter.put("/:id", (req,res) => {
    
})



