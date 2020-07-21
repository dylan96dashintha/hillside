var express = require('express');
var router = express.Router();
var conn = require('../config/sqlconnection');
var checkIn = require('../Modules/checkInOut').getCheckInDate;
var checkOut = require('../Modules/checkInOut').getCheckOutDate;
var roomDetails = require('../Modules/rooms').getRoomsDetails;
var availableRooms = require('../Modules/rooms').getNotBookedRooms;
/* GET home page. */
var day = new Date();
var dateRange = (day.getMonth()+1)+'/'+day.getDate()+'/'+day.getFullYear()+' - '+(day.getMonth()+1)+'/'+(day.getDate()+7)+'/'+day.getFullYear();
console.log(dateRange);


router.get('/', function (req, res, next) {

  // (async ()=>{
  //   console.log(await freeRoomsList());
  // })

  // var freeRooms = freeRoomsList();
  // var roomDetail = ;
  // availableRooms('3/5/2020','6/5/2020',function(err,result){
  //   roomDetails(result,function(err,result){
  //     console.log(result);
  //   });
  // });
  // console.log(res)
  // res.render('index',{date: dateRange, msg: null});
  res.render('index',{checkinmsg: '', checkoutmsg: ''});


});

router.post('/',function(req,res){

  let type = req.body.type;
  // let date = req.body.daterange;

  var checkInDate = req.body.checkin;
  var checkOutDate = req.body.checkout;

  if (checkInDate != '' && checkOutDate != ''){
    //create session for checkIn checkout dates
    var sess = req.session;
    sess.checkIn = checkInDate;
    sess.checkOut = checkOutDate;

    if((Date.parse(checkInDate) < Date.parse(day)) || Date.parse(checkInDate) >= Date.parse(checkOutDate)){
      res.render('index',{checkinmsg: "Invalid Check In Date !", checkoutmsg: ''});
    }else{
      availableRooms(type,checkInDate,checkOutDate,function(err,result){
        roomDetails(result,function(err,result){
          
          let orderDetails = {
            ciD : Date.parse(checkInDate),
            coD : Date.parse(checkOutDate)
          };
          res.render('rooms',{roomDetails: result, od:orderDetails, msg:null})
        });
      });
    }

  }else if(checkInDate == '' && checkOutDate != ''){
    res.render('index',{checkinmsg: "Invalid Check In Date !", checkoutmsg: null});
  }else if(checkInDate != '' && checkOutDate == ''){
    res.render('index',{checkinmsg: null, checkoutmsg: "Invalid Check Out Date !"});
  }else{
    res.render('index',{checkinmsg: "Invalid Check In Date !", checkoutmsg: "Invalid Check Out Date !"});
  }
    // res.send(req.body);
// res.send('ok');
});
//TODO- input validation


module.exports = router;
