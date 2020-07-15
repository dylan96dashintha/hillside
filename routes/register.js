const router = require('express').Router()
const bodyParser = require('body-parser')
const randomize = require('randomatic')
const Validation = require('../config/middleware')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var nodemailer = require('./nodemailerWithTemp')


router.get('/',(req,res) => {
    output = {mailmessage: '',
            mobilemessage:''}
    res.render('register',output);
})

router.post('/',urlencodedParser,(req,res,next) =>{
    //create random verification key
    var code = randomize('A0',6)
    
    var firstname = req.body.fname
    var lastname = req.body.lname
    var email = req.body.email
    var address = req.body.address
    var mobile = req.body.mobile
    // var password = req.body.password
    // var confirmpassword = req.body.confirmpass

    //create session
    var sess = req.session;
    sess.fname = firstname;
    sess.lname = lastname;
    sess.email = email;
    sess.address = address;
    sess.mobile = mobile;
    sess.code = code;
    // console.log(code);
    // sess.password = password;
    next();
    },Validation,(req,res) => {
        nodemailer.verifyReg(sess.email, sess.fname, sess.code);
        output = {message: '',
        sent: 'Email has been sent..!'}
        res.render('verify',output);
});


module.exports = router