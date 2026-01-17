const express = require("express")
const fakeStoreRouter = express.Router()
const fakeStoreController = require("../controllers/fakeStoreControllers");


fakeStoreRouter.get("/products", (req, res) => { 
    fakeStoreController.getProducts(req,res);
});

fakeStoreRouter.get("/categories", (req, res) => { 
    fakeStoreController.getCategories(req,res);
});



module.exports = fakeStoreRouter;
