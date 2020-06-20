const router = require('express').Router();
const bcrypt = require('bcrypt');
var nodemailer = require('./nodemailerWithTemp');
var connection = require('../config/sqlconnection');
var oid = require('../Modules/createOrderId')


router.get('/',(req,res) =>{
    outputt = {message: '',
              sent: 'Email has been sent..!'}
    res.render('verify',outputt)
})

router.post('/', (req,res) => {
    var sess = req.session;
    if(sess.code == req.body.verify){
        // const hash = bcrypt.hashSync(sess.password, 10);

        connection.connect(function(err) {  
            if (err) {
              console.error('error connecting: ' + err.stack);
              return res.render('error'); 
            }
            console.log('connected as id ' + connection.threadId);
          });
           
          /* Begin transaction */
        connection.beginTransaction(function(err) {
            if (err) { throw err; }
            // connection.query('INSERT INTO `customerdet` (`firstname`, `lastname`, `address`, `email`, `mobilenum`,`password`) VALUES (?,?,?,?,?,?)',[sess.fname, sess.lname, sess.address, sess.email, sess.mobile,hash], function(err, result) {
                var orderid = oid();
            connection.query('INSERT INTO `customerdet` ( `orderId`, `firstname`, `lastname`, `address`, `email`, `mobilenum`) VALUES (?,?,?,?,?,?)',[orderid, sess.fname, sess.lname, sess.address, sess.email, sess.mobile], function(err, result) {
                if (err) { 
                    connection.rollback(function() {
                        res.render('error');
                        throw err;
                    });
                }else{
                    // var orderid = result.insertId;
                    console.log('orderid :'+orderid)
            
                    connection.query('INSERT INTO `orderdetails` (`checkin`, `checkout`, `orderid`, `roomid`) VALUES (?,?,?,?)',[sess.checkinDate, sess.checkoutDate, orderid, sess.rid], function(err, result) {
                        if (err) { 
                        connection.rollback(function() {
                            res.render('error');
                            throw err;
                        });
                        }else{
                            connection.commit(function(err) {
                            if (err) { 
                                connection.rollback(function() {
                                res.render('error');
                                throw err;
                                });
                            }
                            console.log('Transaction Complete.');
                            // connection.end();
                            nodemailer.confirmBooking(sess.email, sess.fname, sess.checkIn, sess.checkOut, sess.des);
                            res.redirect('/index');
                            });
                        }
                    });
                }
            });
        });
    }
    /* End transaction */
});

module.exports = router;