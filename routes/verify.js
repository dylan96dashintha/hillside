const router = require('express').Router()
const bcrypt = require('bcrypt');
const conn = require('../config/sqlconnection')


router.get('/',(req,res) =>{
    outputt = {message: '',
              sent: 'Email has been sent..!'}
    res.render('verify',outputt)
})

router.post('/', (req,res) => {
    var sess = req.session;
    if(sess.code == req.body.verify){
        const hash = bcrypt.hashSync(sess.password, 10);

        conn.query('INSERT INTO `customerdet` (`orderid`,`firstname`, `lastname`, `address`, `email`, `mobilenum`, `password`) VALUES (?,?,?,?,?,?,?)',['19',sess.fname, sess.lname, sess.address, sess.email, sess.mobile, hash],(error,result) =>{
            if(error){
                output = {mailmessage: 'Email is Invalid',
                         passmessage: 'Recheck the Password',
                         mobilemessage:'Mobile Number is Invalid'}
                res.render('register', output);
            }
            console.log('task is done')
            // res.render();  //set the next view page
        })
    }
    else{
        outputt = {message: 'Verification key is Invalid',
                   sent: ''}
        res.render('verify',outputt)
    }
})

module.exports = router


