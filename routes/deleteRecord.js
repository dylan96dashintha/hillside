var express = require('express');
var router = express.Router();
var conn = require('../config/sqlconnection');


router.post('/' , function(req,res){
    let delId = req.body.del;
    conn.query(`DELETE FROM customerdetails where customerid IN (SELECT customerid FROM orderdetails WHERE orderid = '${delId}')` , function(err,result){
        if (err) {
            console.log(err);
        }else{
            console.log('success!')
            res.redirect('/admin');
        }
    });
});

module.exports = router;