var express = require('express');
var router = express.Router();
var conn = require('./connection');
var checkIn = require('../Modules/checkInOut').getCheckInDate;
var checkOut = require('../Modules/checkInOut').getCheckOutDate;
/* GET home page. */
var firebase = require("firebase/app");
// Get a reference to the database service
// var database = firebase.database();


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
  res.render('index')
});
router.post('/',function(req,res){
    console.log("okay");
    let type = req.body.type;
    let date = req.body.daterange;

conn.query(`SELECT orderId  from orderdetails where  ('${checkIn(date)}' NOT BETWEEN checkIn AND checkOut) AND ('${checkOut(date)}' NOT BETWEEN checkIn AND checkOut) AND roomId = '${type}' `,function(err,result){
  if (err){
    console.log(err);
  }else {
    console.log(result[0].orderId);
  }
})
  
  



});
//TODO- input validation


module.exports = router;
