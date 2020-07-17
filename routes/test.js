var express = require('express');
var router = express.Router();
var bookig = require('../Modules/booking').creaetBooking;


router.get('/',function(req,res,next){
    console.log("ddefr")
    bookig("df",function(err,result){
        if(err){
            console.log(err)
        }
       console.log(result)
       res.send(result); 
    });
    // res.send("dddd")
})

module.exports = router