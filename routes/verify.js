const router = require('express').Router();
const bcrypt = require('bcrypt');
var nodemailer = require('./nodemailerWithTemp');
var conn = require('../config/sqlconnection');
var oid = require('../Modules/createOrderId');
const { functions } = require('firebase');
var addRecord = require('../Modules/booking').creaetBooking;



router.get('/',(req,res) =>{
    outputt = {message: '',
              sent: 'Email has been sent..!'}
    res.render('verify',outputt)
})

router.post('/', function(req,res,next){
    var sess = req.session;
    console.log(sess)
    var now = new Date();
    if(sess.code == req.body.verify){
        var bookingDet = {
            orderId: false,
            checkinData: sess.checkIn,
            checkoutDate: sess.checkOut,
            bookingTime:  now.getFullYear() +"-"+ (now.getMonth()+1) +"-"+ now.getDate() +" "+now.getHours() +":"+now.getMinutes()+":"+now.getSeconds(),
            roomId: sess.rid,
            orderType: "online",
            customerId: false,
            customerFName: sess.fname,
            customerLName: sess.lname,
            customerEmail: sess.email,
            customerMobile: sess.mobile,
            customerAddress: sess.address,
            pavementStat: "no"
        }

        addRecord(bookingDet, function(err,result){
            if(result){
                nodemailer.confirmBooking(sess.email, sess.fname, sess.checkIn, sess.checkOut, sess.des);
                res.render('successBooking');
            }else{
                outputt = {message: '',
                sent: err}
      res.render('verify',outputt)
            }
            
        })

    }else{
        outputt = {message: '',
              sent: 'You Entered Code is Wrong'}
    res.render('verify',outputt)
    }
})

// router.post('/', (req,res) => {
//     var sess = req.session;
//     // console.log(sess)
//     // console.log(req.body)
//     if(sess.code == req.body.verify){
//         // const hash = bcrypt.hashSync(sess.password, 10);

//         conn.getConnection(function(err,connection) {  
//             if (err) {
//               console.error('error connecting: ' + err.stack);
//               return res.render('error'); 
//             }
//             console.log('connected as id ' + connection.threadId);
          
           
//             /* Begin transaction */
//             connection.beginTransaction(function(err) {
//                 if (err) { throw err; }
//                 // connection.query('INSERT INTO `customerdet` (`firstname`, `lastname`, `address`, `email`, `mobilenum`,`password`) VALUES (?,?,?,?,?,?)',[sess.fname, sess.lname, sess.address, sess.email, sess.mobile,hash], function(err, result) {
//                     var orderid = oid();
//                 connection.query('INSERT INTO `customerdet` ( `orderId`, `firstname`, `lastname`, `address`, `email`, `mobilenum`) VALUES (?,?,?,?,?,?)',[orderid, sess.fname, sess.lname, sess.address, sess.email, sess.mobile], function(err, result) {
//                     if (err) { 
//                         connection.rollback(function() {
//                             res.render('error');
//                             throw err;
//                         });
//                     }else{
//                         // var orderid = result.insertId;
//                         console.log('orderid :'+orderid)
                
//                         connection.query('INSERT INTO `orderdetails` (`checkin`, `checkout`, `orderid`, `roomid`) VALUES (?,?,?,?)',[sess.checkinDate, sess.checkoutDate, orderid, sess.rid], function(err, result) {
//                             if (err) { 
//                             connection.rollback(function() {
//                                 res.render('error');
//                                 throw err;
//                             });
//                             }else{
//                                 connection.commit(function(err) {
//                                 if (err) { 
//                                     connection.rollback(function() {
//                                     res.render('error');
//                                     throw err;
//                                     });
//                                 }
//                                 console.log('Transaction Complete.');
//                                 // connection.end();
//                                 nodemailer.confirmBooking(sess.email, sess.fname, sess.checkIn, sess.checkOut, sess.des);
//                                 res.render('successBooking');
//                                 });
//                             }
//                         });
//                     }
//                 });
//             });
//         });
//     }else{
//         outputt = {message: '',
//               sent: 'You Entered Code is Wrong'}
//     res.render('verify',outputt)
//     }
//     /* End transaction */
// });

module.exports = router;