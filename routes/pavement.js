var express = require('express');
var router = express.Router();
var conn = require('./connection');

router.post('/' , function(req,res){
    let pavementId = req.body.pay;
    let payQuery = `UPDATE customerdet SET pavement = "Paied" WHERE orderId = '${pavementId}'`;
    conn.query(payQuery , function(err,result){
        if (err) {
            console.log(err);

        }else {
            console.log("success");
            res.redirect('/admin');
        }
    });
});

module.exports = router;