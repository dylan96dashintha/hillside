var express = require('express');
var router = express.Router();
//var conn = require('./connection');


router.get('/', function (req, res, next) {
    res.render('bookNow');
});

router.post('/',function(req,res){
    
    console.log("sdsdsds");
  
     
  });
  
  
    
    
     


module.exports = router