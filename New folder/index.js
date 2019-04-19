'use strict'
let express = require('express');
let app = express();

let bodyParser = require('body-parser')

//loading our routers
let mainRouter = require("./mainRouter.js");
let todoRouter = require("./classRoute.js");

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//mounting our routers
app.use("/", mainRouter);
app.use("/class", todoRouter);
app.use('/cdn',express.static('public'))
app.listen(3000);
console.log("Express server running on port 3000");