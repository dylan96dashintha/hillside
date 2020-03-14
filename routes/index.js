var express = require('express');
var router = express.Router();
var conn = require('./connection');
var checkIn = require('../Modules/checkInOut').getCheckInDate;
var checkOut = require('../Modules/checkInOut').getCheckOutDate;
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index')
});
router.post('/',function(req,res){
    console.log("okay");
    let type = req.body.type;
    let date = req.body.daterange;
    console.log(checkIn(date));
    console.log(checkOut(date));
    
}); 
//TODO- input validation


module.exports = router;
