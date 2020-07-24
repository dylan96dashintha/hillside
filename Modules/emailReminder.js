// var addsubtractDate = require('add-subtract-date');
var nodemailer = require('../routes/nodemailerWithTemp');
var conn = require('../config/sqlconnection');

// function sendReminder() {
//     //schedule for send remainder email
// var j = schedule.scheduleJob('01 00 * * *', function(){
//     console.log("hi");
//     conn.query(`SELECT * FROM customerdetails NATURAL JOIN orderdetails ORDER BY bookDate ASC` , function(err , result){
//       if (err) {
//           console.log(err);
//       }else {
//       }
//     const response = JSON.parse(JSON.stringify(result)); 
//     for(x = 0; x<response.length; x++) {
//       const checkIn =new Date((response[x].checkIn).substring(0,10));
//       const bookDate = new Date((response[x].bookDate).substring(0,10));
//       console.log(checkin,bookDate);
//       var diffDays = parseInt((checkIn - bookDate) / (1000 * 60 * 60 * 24));
//       if (diffDays > 2 ) {
//         var pavementDate = addsubtractDate.subtract(new Date(checkIn), 2, "days");
//         var datetime = new Date();
//         var today = new Date(datetime.toISOString().slice(0,10));
//         var difBetweenPavementCurrent = parseInt((pavementDate - today) / (1000 * 60 * 60 * 24)); 
//         if(difBetweenPavementCurrent === 1 || difBetweenPavementCurrent === 0  ) {
//           const email = response[x].email;
//           const name = response[x].fname;
//           const orderId = response[x].orderId;
//           nodemailer.reminder(email, name, orderId, pavementDate.toISOString().slice(0,10));
//         }
         
//       }
//     }
//     });
//   });
// }

// sendReminder();
week = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}
month = {0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}

var today = new Date();
today.setHours(today.getHours()+5);
today.setMinutes(today.getMinutes()+30);
console.log(today);

var paymentdate = new Date();
paymentdate.setDate(paymentdate.getDate()+ 1);
paymentdate.setHours(paymentdate.getHours()+5);
paymentdate.setMinutes(paymentdate.getMinutes()+30);
console.log(paymentdate)
payday = "11.59PM of "+paymentdate.getDate()+"("+week[paymentdate.getDay()]+") "+month[paymentdate.getMonth()]+" "+paymentdate.getFullYear();

var findchekin = new Date();
findchekin.setDate(findchekin.getDate()+ 3);
findchekin.setHours(findchekin.getHours()+5);
findchekin.setMinutes(findchekin.getMinutes()+30);
console.log(findchekin)

function sendRemainder(){
  conn.query('SELECT * FROM `customerdetails` INNER JOIN `orderdetails` ON customerdetails.customerid = orderdetails.customerid WHERE `pavement`="no" AND CONVERT(`checkIn`, DATE) = CONVERT(?, DATE) AND CONVERT(`bookDate`, DATE) <= CONVERT(?, DATE)',[findchekin,today],function(err,result){
    if(err){
      console.log("there is an error !(1e)");
      // console.log('5555555555555555555555');
      console.log(err)
      conn.end();
      return false;
    }else{
      for (i = 0; i < result.length ; i++) {
          var email = result[i].email;
          var name = result[i].fname;
          var orderId = result[i].orderId;
          // console.log(payday)
          nodemailer.reminder(email, name, orderId, payday);
          console.log("remainder emails sent");
      }
      // conn.end()
      return true;
    }
  });
}


var schedule = require('node-schedule') ;
var date = new Date(2020, 6, 25, 3, 15, 0);
// console.log(date)
var emailremaind = schedule.scheduleJob(date, function(){
    console.log("started");
    var k = schedule.scheduleJob('0 5 * * *',  function(){
        console.log("email"+new Date());
        sendRemainder();
    });
});

module.exports = {emailremaind};