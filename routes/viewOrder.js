var express = require('express');
var router = express.Router();
var rooms = require('../Modules/rooms');
// var time  = require('time')



router.post('/',function(req,res,next){
    console.log(req.body.order);
    rooms.getOrderDetailsById(req.body.order,(err,result)=>{
        if(err){
            res.redirect('/admin');
        }else{
            console.log(result)
            res.render('orderDetails',{order: result})
        }
    })
    

})

module.exports = router