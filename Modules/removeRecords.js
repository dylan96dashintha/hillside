var conn = require('../config/sqlconnection');

var today = new Date();
today.setHours(today.getHours()+5);
today.setMinutes(today.getMinutes()+30);
console.log(today);

var findchekin = new Date();
findchekin.setDate(findchekin.getDate()+ 2);
findchekin.setHours(findchekin.getHours()+5);
findchekin.setMinutes(findchekin.getMinutes()+30);
console.log(findchekin)

function removebookings(){
    conn.query('SELECT * FROM `customerdetails` INNER JOIN `orderdetails` ON customerdetails.customerid = orderdetails.customerid WHERE `pavement`="no" AND CONVERT(`checkIn`, DATE) = CONVERT(?, DATE) AND CONVERT(`bookDate`, DATE) < CONVERT(?, DATE)',[findchekin,today],function(err,result){
        if(err){
            console.log("there is an error !(1r)");
            // console.log('5555555555555555555555');
            console.log(err)
            conn.end();
            return false;
        }else if(result.length == 0){
            console.log("There is no data for this time");
            // console.log('44444444444444444444');
            // conn.end();
            return false;
        }else if(result.length > 0){
            console.log(result);
            var todo1 = [];
            var todo2 = []
            for (i = 0; i < result.length; i++) {
                todo1.push([result[i].customerid, result[i].fname, result[i].lname, result[i].email, result[i].mobile, result[i].address, result[i].checkIn, result[i].checkout, result[i].orderId, result[i].roomId, result[i].bookDate, result[i].ordertype]);
                todo2.push([result[i].customerid])
            }
            // console.log(todo1);
            // console.log(todo2);
            conn.query('INSERT INTO `discardeddetails`(`customerid`,`fname`,`lname`,`email`,`mobile`,`address`,`checkin`,`checkout`,`orderId`,`roomId`,`bookDate`,`ordertype`) VALUES ?',[todo1],function(err,res){
                if(err){
                    console.log("there is an error !(2)");
                    // console.log('333333333333333333333');
                    conn.end();
                    return false;
                }else{
                    conn.query('DELETE FROM `customerdetails` WHERE (`customerid`) IN (?)',[todo2],function(error,results){
                        if(error){
                            console.log("there is an error !(3)");
                            // console.log('111111111111111111');
                            conn.end();
                            return false; 
                        }else{
                            console.log("removing task completed");
                            // conn.end();
                            return true;
                        }
                    });
                }
            });
            return true;
        }else{
            // console.log('2222222222222222');
            console.log("there is an error !(4)");
            conn.end()
            return false;
        }
    });
}

        
var schedule = require('node-schedule') ;
var date = new Date(2020, 6, 25, 3, 15, 0);

var removetask = schedule.scheduleJob(date, function(){
    console.log("started");
    var k = schedule.scheduleJob('10 5 * * *',  function(){
        console.log("remove"+new Date());
        removebookings();
    });
});

module.exports = {removetask}