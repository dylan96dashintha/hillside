const passwordValidator = require('password-validator');
const emailValidator = require("email-validator");
const validatePhoneNumber = require('validate-phone-number-node-js')

const Validation = (req,res,next) =>{
    //passowrd validation, email and phone number
    pass = req.session.password
    mail = req.session.email
    mobile = req.session.mobile
    mobilebool = false;
    console.log(req.session)
    var schema = new passwordValidator();
 
    //  Add properties to it
    schema
    .is().min(6)                                    // Minimum length 8
    .is().max(20)                                  // Maximum length 20
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    // .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    if (schema.validate(pass) && emailValidator.validate(mail) && validatePhoneNumber.validate(mobile) && (mobile.length == 10)){
        next();
    }else{
        if(!schema.validate(pass) && !emailValidator.validate(mail) && !validatePhoneNumber.validate(mobile) && !(mobile.length == 10)){
            output = {mailmessage: 'Email is Invalid',
                      passmessage: 'Password should include atleast Lowercase letter, Uppercase letter and Digit as well as atleast 6 length',
                      mobilemessage:'Lenght of mobile number should be 10 as well as not to be Letters'}
        }else if(!schema.validate(pass) && !emailValidator.validate(mail)){
            output = {mailmessage: 'Email is Invalid',
                      passmessage: 'Password should include atleast Lowercase letter, Uppercase letter and Digit as well as atleast 6 length',
                      mobilemessage:''}
        }else if(!emailValidator.validate(mail) && !validatePhoneNumber.validate(mobile) && !(mobile.length == 10)){
            output = {mailmessage: 'Email is Invalid',
                      passmessage: '',
                      mobilemessage:'Lenght of mobile number should be 10 as well as not to be Letters'}
        }else if(!schema.validate(pass) && !validatePhoneNumber.validate(mobile) && !(mobile.length == 10)){
            output = {mailmessage: '',
                      passmessage: 'Password should include atleast Lowercase letter, Uppercase letter and Digit as well as atleast 6 length',
                      mobilemessage:'Lenght of mobile number should be 10 as well as not to be Letters'}
        }else if(!schema.validate(pass)){
            output = {mailmessage: '',
                     passmessage: 'Password should include atleast Lowercase letter, Uppercase letter and Digit as well as atleast 6 length',
                     mobilemessage:''}
        }else if(!emailValidator.validate(mail)){
            output = {mailmessage: 'Email is Invalid',
                      passmessage: '',
                      mobilemessage:''}
        }else{
            output = {mailmessage: '',
                      passmessage: '',
                      mobilemessage:'Lenght of mobile number should be 10 as well as not to be Letters'}
        }

        res.render('register',output);
    }
}

module.exports = Validation