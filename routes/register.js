const router = require('express').Router()
const bodyParser = require('body-parser')
const provider = require('../config/provider')
const randomize = require('randomatic')
const Validation = require('../config/middleware')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/',(req,res) => {
    output = {mailmessage: '',
             passmessage: '',
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
    var password = req.body.password
    // var confirmpassword = req.body.confirmpass

    //create session
    var sess = req.session;
    sess.fname = firstname;
    sess.lname = lastname;
    sess.email = email;
    sess.address = address;
    sess.mobile = mobile;
    sess.password = password;
    sess.code = code;
    next()
},Validation, (req,res) => {

    // html format of the sending mail
    const output =  
        + '<h3> Hi ' + req.session.fname + ' '+ req.session.lname +',</h3>'
        + '<p>You are Welcome to Visit HILLSIDE Resort</p><br>'
        + 'Please confirm details you have entered<p>'
        +'<ul>'
            +'<li>Address : '+ req.session.address +'</li>'
            +'<li>Mobile Number : '+ req.session.mobile + '</li>'
        +'</ul>'
        +'<p>Your verification key is <h4>' + req.session.code + '</h4><p>'
    
    
    let mailOptiions = {
        from: '"Administrator" <rashnanayakkara96@gmail.com>', // sender address
        to: req.session.email, // list of receivers
        subject: "HILLSIDE RESORT", // Subject line
        // text: "TESTING",// plain text body
        html: output // html body
    }
    
    // send mail with defined transport object
    provider.transporter.sendMail(mailOptiions,(error,info) => {
        if(error){
            // return console.log(error);
            outputt = {mailmessage: 'Email is Invalid',
                      passmessage: '',
                      mobilemessage:''}
            res.render('register',outputt);
        }
    
    });
    outputt = {message: '',
              sent: 'Email has been sent..!'}
    res.render('verify',outputt);
})



module.exports = router