var express = require('express');
var router = express.Router();
var conn = require('./connection');


router.post('/',function(req,res){
    
    
   let checkIn = req.body.checkIn;
   let checkOut = req.body.checkOut;
   let type = req.body.type;
   console.log("sdsdsds");
   console.log(checkIn);
   console.log(type);

    
});

module.exports = router;