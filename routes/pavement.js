var express = require('express');
var router = express.Router();
// var conn = require('./connection');
var conn = require('../config/sqlconnection');

router.post('/' , function(req,res){
    let orderId = req.body.pay;
    let payQuery = `UPDATE customerdetails SET pavement = 'yes' WHERE customerid  IN (SELECT customerid FROM orderdetails WHERE orderId = '${orderId}')`;
    console.log(payQuery);
    conn.query(payQuery , function(err,result){
        if (err) {
            console.log(err);

        }else {
            // conn.query('SELECT `checkIn`, `checkout`, `orderId`, `roomId`, `bookDate`, `customerid`, `ordertype` FROM `orderdetails` LIMIT 1',function(err,result){
            // //    res.send(result);
            //     // console.log(result);
            //     // res.send(result);
            //     console.log("success");
            //     res.redirect('/admin');
            // })
            console.log("success");
            res.redirect('/admin');
        }
    });
});

module.exports = router;