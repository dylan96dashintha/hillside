const router = require('express').Router()
const bcrypt = require('bcrypt');
var connection = require('../config/sqlconnection')


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
              return;
            }
            console.log('connected as id ' + connection.threadId);
          });
           
          /* Begin transaction */
        connection.beginTransaction(function(err) {
            if (err) { throw err; }
            // connection.query('INSERT INTO `customerdet` (`firstname`, `lastname`, `address`, `email`, `mobilenum`,`password`) VALUES (?,?,?,?,?,?)',[sess.fname, sess.lname, sess.address, sess.email, sess.mobile,hash], function(err, result) {
            connection.query('INSERT INTO `customerdet` (`firstname`, `lastname`, `address`, `email`, `mobilenum`) VALUES (?,?,?,?,?)',[sess.fname, sess.lname, sess.address, sess.email, sess.mobile], function(err, result) {
                if (err) { 
                    connection.rollback(function() {
                    throw err;
                    });
                }else{
                    var orderid = result.insertId;
                    console.log('orderid :'+orderid)
            
                    connection.query('INSERT INTO `orderdetails` (`checkin`, `checkout`, `orderid`, `roomid`) VALUES (?,?,?,?)',[sess.checkinDate, sess.checkoutDate, orderid, sess.rid], function(err, result) {
                        if (err) { 
                        connection.rollback(function() {
                            throw err;
                        });
                        }else{
                            connection.commit(function(err) {
                            if (err) { 
                                connection.rollback(function() {
                                throw err;
                                });
                            }
                            console.log('Transaction Complete.');
                            connection.end();
                            res.send('task is done');
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