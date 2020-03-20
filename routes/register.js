const router = require('express').Router()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const jwtconfig = require('../config/jwt')
const provider = require('../config/provider')
const randomize = require('randomatic')
const responseimpl = require('../config/responses')
const customer = require('../Modules/customer')
const validation = require('../config/middleware')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/',urlencodedParser,validation,(req,res) =>{
    //create random verification key
    var code = randomize('A0',6)

    var firstname = req.body.fname
    var lastname = req.body.lname
    var email = req.body.email
    var password = req.body.password
    // var confirmpassword = req.body.confirmpass

    //create session
    var sess = req.session;
    sess.fname = firstname;
    sess.lname = lastname;
    sess.email = email;
    sess.password = password;
    sess.code = code;

    //html format of the sending mail
    const output = '<p>You are Welcome to Visit HILLSIDE Resort</p>' 
        + '<h3>Confirm your contact details</h3>'
        +'<ul>'
            +'<li>Name : '+ name + '</li>'
            +'<li>Email : '+ email + '</li>'
            +'<li>Phone Number : '+ phone + '</li>'
        +'</ul>'
        +'<h4>Your Verification Key is '+ code
    

    //provider details
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, //587
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'rashnanayakkara96@gmail.com', // generated ethereal user
            pass: '1Ahangama' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
        });

    let mailOptiions = {
        from: '"Administrator" <rashnanayakkara96@gmail.com>', // sender address
        to: "nanayakkararash19@gmail.com", // list of receivers
        subject: "TRY HILLSIDE", // Subject line
        text: "TESTING",// plain text body
        html: output // html body
    }
    
    // send mail with defined transport object
    transporter.sendMail(mailOptiions,(error,info) => {
        if(error){
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    
    return res.redirect('/verify')
})



router.post('/verify', (req,res) => {
    console.log('***************************************');
    // if (decoded.code == req.body.code){
    //     customer.regcustomer(decoded.username, decoded.email, decoded.password)
    //     .then(result =>{
    //         if(!result){
    //             return responseimpl.error(res,401,'unauthorized','user authondication failed.')
    //         }

    //     })
    //     .catch(error => {
    //         responseimpl.error(res, 500, 'server_error', 'Server Error', error)
    //     })
    // }

    // responseimpl.error(res, 408, 'request timeout', 'please resend verification code', error)
})


router.get('/',(req,res) => {
    res.render('register');
})

router.get('/',(req,res) => {
    res.render('verify');
})

module.exports = router