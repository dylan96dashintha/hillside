var addsubtractDate = require('add-subtract-date');
var schedule = require('node-schedule');
var nodemailer = require('../routes/nodemailerWithTemp');
var conn = require('../config/sqlconnection');

function sendReminder() {
    //schedule for send remainder email
var j = schedule.scheduleJob('01 00 * * *', function(){
    console.log("hi");
    conn.query(`SELECT * FROM customerdetails NATURAL JOIN orderdetails ORDER BY bookDate ASC` , function(err , result){
      if (err) {
          console.log(err);
      }else {
      }
    const response = JSON.parse(JSON.stringify(result)); 
    for(x = 0; x<response.length; x++) {
      const checkIn =new Date((response[x].checkIn).substring(0,10));
      const bookDate = new Date((response[x].bookDate).substring(0,10));
      var diffDays = parseInt((checkIn - bookDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 2 ) {
        var pavementDate = addsubtractDate.subtract(new Date(checkIn), 2, "days");
        var datetime = new Date();
        var today = new Date(datetime.toISOString().slice(0,10));
        var difBetweenPavementCurrent = parseInt((pavementDate - today) / (1000 * 60 * 60 * 24)); 
        if(difBetweenPavementCurrent === 1 || difBetweenPavementCurrent === 0  ) {
          const email = response[x].email;
          const name = response[x].fname;
          const orderId = response[x].orderId;
          nodemailer.reminder(email, name, orderId, pavementDate.toISOString().slice(0,10));
        }
         
      }
    }
    });
  });
}

module.exports = sendReminder;