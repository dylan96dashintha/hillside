var express = require('express');
var router  = express.Router();
var conn = require('./connection');
var rid;
var checkinDate;
var checkOutDate;
var type;

router.get('/:id',function(req,res){
    ///D301-19-2018%20%2001-20-2018All
    var str = req.params.id;
    rid = str.substring(0,2);
    checkinDate = str.substring(2,12);
    checkOutDate = str.substring(16,26);
    type = str.substring(26);
    console.log(rid);
    res.render('addUserDetails');
});

router.post('/register',function(req,res){
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var address = req.body.address;
    var telephone = req.body.tele;
    
    
});


module.exports = router;