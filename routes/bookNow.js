var express = require('express');
var router = express.Router();
// var conn = require('./connection');
var conn = require('../config/sqlconnection');
var rid;//roomId
var checkinDate;//checkin date number format
var checkoutDate;//checkout date number format
// var cid; //checkin daate in date format
// var cod; //check date in date format


router.get('/:od', function (req, res, next) {
  //pp15844698000001587234600000
    var str = req.params.od;
    rid = str.substring(0,2);
    checkinDate = str.substring(2,15);
    checkoutDate = str.substring(15);
    // cid = new Date(checkinDate);
    // cod = new Date(checkoutDate);
    console.log(rid,checkinDate,checkoutDate);
    // res.send(rid+cid+cod);
    // res.send(rid);

    //put details into session
    var sess = req.session;
    sess.checkinDate = checkinDate;
    sess.checkoutDate = checkoutDate;
    sess.rid = rid;

     //get room details from room type
    // conn.query(`SELECT des FROM roomdet WHERE roomId='${rid}'` , function(err , result){
    conn.query('SELECT `des` FROM `roomdet` WHERE `roomId`=?',[rid], function(err , result){
      if (err) {
          console.log(err);
      }else {
          const des = result[0].des;

          //create session for room details
          var sess = req.session;
          sess.des = des;
      }
  });

    output = {mailmessage: '',
             passmessage: '',
             mobilemessage:''}
    res.render('register',output)


});

router.post('/',function(req,res){
    
    console.log("sdsdsds");
  
     
  });
  
  
    
    
     


module.exports = router