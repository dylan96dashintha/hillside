var express = require('express');
var router  = express.Router();
var conn = require('./connection');

router.post('/' , function(req,res){
    console.log("created a new Record!");
});

module.exports = router;