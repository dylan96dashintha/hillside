var express = require('express');
var router = express.Router();
var conn = require('./connection');
var checkIn = require('../Modules/checkInOut').getCheckInDate;
var checkOut = require('../Modules/checkInOut').getCheckOutDate;
// var freeRoomsList = require('../Modules/checkAvailableRooms').getNotBookedRooms;
var roomDetails = require('../Modules/rooms').getRoomsDetails;
var availableRooms = require('../Modules/rooms').getNotBookedRooms;
/* GET home page. */
var firebase = require("firebase/app");
// Get a reference to the database service
// var database = firebase.database();

var day = new Date();
var dateRange = (day.getMonth()+1)+'/'+day.getDate()+'/'+day.getFullYear()+' - '+(day.getMonth()+1)+'/'+(day.getDate()+7)+'/'+day.getFullYear();
console.log(dateRange);


// var firebaseConfig = {
//   apiKey: "AIzaSyDiKdHQ5fLPEoJIHN_SSq6Eob7GZaf9N_c",
//   authDomain: "hillside-48fd4.firebaseapp.com",
//   databaseURL: "https://hillside-48fd4.firebaseio.com",
//   projectId: "hillside-48fd4",
//   storageBucket: "hillside-48fd4.appspot.com",
//   messagingSenderId: "1072662997503",
//   appId: "1:1072662997503:web:48b47f2b1c28c03fbddfca",
//   measurementId: "G-VGXESZRY1V"
// };
// firebase.initializeApp(firebaseConfig);


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
 
  res.render('index',{date: dateRange, msg: null});

});

router.post('/',function(req,res){

    let type = req.body.type;
    let date = req.body.daterange;

    var checkInDate = date.split('-')[0];
    var checkOutDate = date.split('-')[1];

    if(Date.parse(checkInDate) < Date.parse(day)){
      res.render('index',{date: dateRange, msg: 'Please input valid date.'});
    }else{
      availableRooms(type,checkInDate,checkOutDate,function(err,result){
        roomDetails(result,function(err,result){
          console.log(result);
          let orderDetails = {
            ciD : Date.parse(checkInDate),
            coD : Date.parse(checkOutDate)
          };
          res.render('rooms',{roomDetails: result, od:orderDetails, msg:null})
        });
      });
    }





// res.send('ok');

  
  



});
//TODO- input validation


module.exports = router;
