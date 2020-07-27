var express = require('express');
var router = express.Router();
var a = require('../Modules/booking');

router.get('/',function(req,res,next){
    // res.send('dsf');
    a.getDeleted(function(err,result){
        res.send(result)
    })
    // res.render('detetedRecordes');
})

module.exports = router