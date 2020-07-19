var express = require('express');
var router  = express.Router();
// var conn = require('./connection');
var conn = require('../config/sqlconnection');
const { response } = require('express');
// var addRecord = require('../Modules/addRecord');
var addRecord = require('../Modules/booking').creaetBooking;
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
    var now = new Date()

    var bookingDet = {
        orderId: false,
        checkinData: checkinDate.split("-")[2]+"-"+checkinDate.split("-")[0]+"-"+checkinDate.split("-")[1]+" 00:00:00",
        checkoutDate: checkOutDate.split("-")[2]+"-"+checkOutDate.split("-")[0]+"-"+checkOutDate.split("-")[1]+" 00:00:00",
        bookingTime: now.getFullYear() +"-"+ (now.getMonth()+1) +"-"+ now.getDate() +" "+now.getHours() +":"+now.getMinutes()+":"+now.getSeconds(),
        roomId: rid,
        orderType: "manual",
        customerId: false,
        customerFName: firstName,
        customerLName: lastName,
        customerEmail: "none",
        customerMobile: telephone,
        customerAddress: address,
        pavementStat: "no"
    }

    // var orderDetails = {
    //     fname : firstName,
    //     lname : lastName,
    //     address : address,
    //     tel : telephone,
    //     rid : rid,
    //     ciD : Date.parse(checkinDate),
    //     coD : Date.parse(checkOutDate),
    //     type :type
    // };
    console.log(bookingDet,"aaaaaaaaaaaaaaaaaaaa")
    
    // addRecord(orderDetails,function(err,result){
    //     console.log(err,"error")
    //     console.log(result,"result")
    //     if(result != null){
    //         res.redirect('/admin');
    //     }
    // }); 

    addRecord(bookingDet,function(err,result){
        if(result){
            res.redirect('/admin');
        }else{
            res.redirect('/admin');
        }

    })
    
    
});


module.exports = router;