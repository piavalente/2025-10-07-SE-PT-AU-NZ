const express = require('express'); //loads Express Library
const app = express()

const fakeStoreRouter = require('./routes/fakeStoreRoutes.js');
app.use("/fakeStore", fakeStoreRouter) //fakeStore route

module.exports = app


