// var conn= require('./connection');
var conn = require('../config/sqlconnection');
var oid = require('./createOrderId');

function addRecord(od,callback){
    var orderId = oid();
    console.log(orderId)
    // var orderId = "ssssssssssssssssssssssssssssssssssss";
    console.log(od)
    console.log("inside")
    conn.query(`INSERT INTO customerdet VALUES ('${orderId}','${od.fname}','${od.lname}','${od.address}','${null}','${od.tel}',"Not paied")`,function(err,res){
        if(err){callback(err,false);}
        else{
            conn.query(`INSERT INTO orderdetails VALUES ('${od.ciD}','${od.coD}','${orderId}','${od.rid}')`,function(err,result){
                if(err){callback(err,false);}
                else{
                    callback(null,true);
                }
            });
        }
    });
    // callback(true,true)
}

module.exports = addRecord;