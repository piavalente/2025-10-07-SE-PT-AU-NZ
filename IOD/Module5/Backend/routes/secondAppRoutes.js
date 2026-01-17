const express = require("express")
const secondAppRouter = express.Router()



secondAppRouter.get("/", (req, res) => {
    res.send("Welcome to my second server");
})
secondAppRouter.get("/about", (req, res) => {
    res.send("About the second server...");
})
secondAppRouter.get("/test", (req, res) => {
    res.send("Testing the second server...");
})



module.exports = secondAppRouter;