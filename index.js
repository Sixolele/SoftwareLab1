'use strict'
let express = require('express');
let app = express();

let bodyParser = require('body-parser')

//loading our routers
let mainRouter = require("/New folder/mainRouter.js");
let todoRouter = require("/New folder/classRoute.js");

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//mounting our routers
app.use("/", mainRouter);
app.use("/class", todoRouter);
app.use('/cdn',express.static('/New folder/public'))
app.listen(3000);
console.log("Express server running on port 3000");