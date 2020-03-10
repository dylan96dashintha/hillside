var express = require('express');
var router = express.Router();
var conn = require('./connection');
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index')
});
router.post('/',function(req,res){
    console.log("okay");
    let type = req.body.type;
    let date = req.body.daterange;
    console.log(type);
    res.send(date + type);
   
});
//TODO- input validation




module.exports = router;
