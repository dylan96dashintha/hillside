var express = require('express');
var router = express.Router();
var bookig = require('../Modules/booking').creaetBooking;
// var time  = require('time')



router.get('/',function(req,res,next){
    // console.log("ddefr")
    // bookig("df",function(err,result){
    //     if(err){
    //         console.log(err)
    //     }
    //    console.log(result)
    //    res.send(result); 
    // });
    // // res.send("dddd")
    var now = time.Date();
    now.setTimezone('America/Los_Angeles')
})

module.exports = router