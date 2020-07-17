var conn = require('../config/sqlconnection');

var today = new Date();
var findchekin = new Date();
findchekin.setDate(findchekin.getDate()+ 2);
console.log(today);
console.log(findchekin);
// var today = [d.getDate(),d.getMonth(),d.getFullYear()].join('/');

function removebookings(callback){
    conn.query(`SELECT * FROM 'customerdet' INNER JOIN 'orderdetails' ON customerdet.orderId == orderdetails.orderId WHERE 'pavement'='NULL' AND 'checkin'= ? AND 'bookingdate'< ?`,(findchekin,today),function(err,result){
        if(err){
            callback(err,false);
        }else if(result[0].count == 0){
            callback(false,true);
        }else if(result[0].count > 0){
            for (i = 0; i < length(result); i++) {
                conn.query(`INSERT INTO 'discardeddetails' VALUES (?,?,?,?,?,?,?,?,?,?)`,(result[i].orderId, result[i].firstname, result[i].lastname, result[i].address, result[i].email, result[i].mobilenum, result[i].checkin, result[i].checkout, result[i].roomId, result[i].bookingdate),function(err,res){
                    if(err){
                        callback(err,false);
                    }else{
                        conn.query(`DELETE FROM 'customerdet' WHERE 'orderId'=?`,(result[i].orderId),function(error,results){
                            if(error){
                                callback(error,false); 
                            }else{
                                callback(false,true);
                            } 
                        });
                    }
                });
              }
        }else{
            callback(null,false);
        }
    });
}

var schedule = require('node-schedule');
var date = new Date(2012, 11, 21, 5, 30, 0);
var rule = new schedule.RecurrenceRule();
rule.hour = 2;
rule.minute = 0;
 
var j = schedule.scheduleJob(date, function(){
  console.log('The world is going to end today.');
});
// j.
 
var j = schedule.scheduleJob(rule, function(){
  console.log('Today is recognized by Rebecca Black!');
});

module.exports = {removebookings}