var express = require('express');
var router  = express.Router();
// var conn = require('./connection');
var conn = require('../config/sqlconnection');
var addRecord = require('../Modules/addRecord');
var rid;
var checkinDate;
var checkOutDate;
var type;

router.get('/:id',function(req,res){
    ///T104-09-2020  05-03-2020T
    var str = req.params.id;
    console.log(str);
    rid = str.substring(0,2);
    checkinDate = str.substring(2,12);
    checkOutDate = str.substring(14,24);
    type = str.substring(24);
    console.log(rid,checkinDate,checkOutDate,type);
    res.render('addUserDetails',{
        rid: rid,
        checkinDate: checkinDate,
        checkOutDate: checkOutDate,
        type: type,
        msg:null
    });
});

router.post('/register',function(req,res){
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var address = req.body.address;
    var telephone = req.body.tele;

    var orderDetails = {
        fname : firstName,
        lname : lastName,
        address : address,
        tel : telephone,
        rid : rid,
        ciD : Date.parse(checkinDate),
        coD : Date.parse(checkOutDate),
        type :type
    };
    console.log(orderDetails,"aaaaaaaaaaaaaaaaaaaa")
    
    // addRecord(orderDetails,function(err,result){
    //     console.log(err,"error")
    //     console.log(result,"result")
    //     if(result != null){
    //         res.redirect('/admin');
    //     }
    // }); 

    addRecord(orderDetails,function(err,result){
        if(result){
            res.redirect('/admin');
        }else{
            res.redirect('/admin');
        }

    })
    
    
});


module.exports = router;