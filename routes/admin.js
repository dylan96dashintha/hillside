var express = require('express');
var router = express.Router();
var conn = require('./connection');

router.get('/' , function(req,res,err){
    var orderIdList = []  ;
    var firstNameList = [];
    var lastNameList = [];
    var addressList = [];
    var mobileList = [];
    var pavementList = [];

    var count_query=`SELECT COUNT(*) as num from customerdet`;
    conn.query(count_query,function(err,result){
    
        if (err) throw error;
    
        const count = JSON.parse(JSON.stringify(result));
    
    conn.query(`SELECT * FROM customerdet` , function(err , result){
        if (err) {
            console.log(err);
        }else {
        }
    
    
    const response = JSON.parse(JSON.stringify(result));  
 
    for(x=0 ; x<response.length ; x++){
        orderIdList.push(response[x].orderId);
        firstNameList.push(response[x].firstname);
        lastNameList.push(response[x].lastname);
        addressList.push(response[x].address);
        mobileList.push(response[x].mobilenum);
        pavementList.push(response[x].pavement);
     
     }

     //let flag = req.session.flg;
     //console.log(flag);
     if (true) {
        res.render('admin' , {count:count[0].num,orderId : orderIdList,firstname :firstNameList , lastname :lastNameList , address : addressList , mobilenum : mobileList , pavement :pavementList});
     }
    });
});
});

module.exports = router;