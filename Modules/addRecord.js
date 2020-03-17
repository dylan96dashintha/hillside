var conn= require('./connection');
var oid = require('./createOrderId');

function addRecord(od,callback){
    var orderId = oid();
    conn.query(`INSERT INTO customerdet VALUES ('${orderId}','${od.fname}','${od.lname}','${od.address}','${od.tel}',1)`,function(err,res){
        if(err){callback(err,null);}
        else{
            conn.query(`INSERT INTO orderdetails VALUES ('${od.ciD}','${od.coD}','${orderId}','${od.rid}')`,function(err,result){
                if(err){callback(err,null);}
                else{
                    callback(null,true);
                }
            });
        }
    });
}

module.exports = addRecord;