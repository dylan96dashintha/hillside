var express = require('express');
var router  = express.Router();
var conn = require('./connection');
var roomDetails = require('../Modules/rooms').getRoomsDetails;
var availableRooms = require('../Modules/rooms').getNotBookedRooms;

router.get('/',function(req,res){

  if(req.session.psw == 'hill'){
    availableRooms('All','0','0',function(err,result){
        roomDetails(result,function(err,result){
            // console.log(result);
          res.render('createNewBookingAdmin',{details: true, roomDetails: result, str:false});
        });
      });
  }else{
    res.redirect('/adminAuth');
  }
});

router.post('/' , function(req,res){
    // console.log("created a new Record!");
    var type = req.body.type;
    var date = req.body.daterange;
    var checkInDate = date.split('-')[0];
    var checkOutDate = date.split('-')[1];
    checkInDate = checkInDate.replace('/','-').replace('/','-');
    checkOutDate = checkOutDate.replace('/','-').replace('/','-');
    var str = checkInDate+checkOutDate+type;
    availableRooms(type,checkInDate,checkOutDate,function(err,result){
        roomDetails(result,function(err,result){
            // console.log(result);
          res.render('createNewBookingAdmin',{details: true, roomDetails: result, str:str});
        });
      });
    

});

module.exports = router;