'use strict'
let path = require('path')
let express = require('express')
let router = express.Router();
let classList = require('./classList')

//RESTful api
router.get('/api/list', function (req, res) {
    res.json(classList.getList()); //Respond with JSON
    });
router.get('/api/get/:id', function (req, res) {
    res.json(classList.get([req.params.id])); //Notice the wildcard in the URL?
    //Try browsing to /api/get/0 once you've added some entries
    });

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'));
});
router.get('/create', function (req, res) {
    console.log('creating a student entry')
    res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'));
    
});
router.post('/api/create', function(req, res){
    console.log("Creating the following student:", req.body.student);
    classList.add({name:req.body.student});
    res.redirect(req.baseUrl);
});
router.get('/delete', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'));
});
router.post('/api/delete',function(req,res){
    
    console.log("Deleting the following student:", req.body.student);
    //classList.splice(classList.indexOf(req.body.student),1)
    classList.delete(req.body.student)
    res.redirect(req.baseUrl + '/api/list')
    //res.jajon(req)
})
router.post('/api/edit',function(req,res){
    
})
router.get('/edit', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'));
});
module.exports = router; 