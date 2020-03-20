const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth:{
            user: 'rashnanayakkara96@gmail.com',
            pass: '1Ahangama'
        },
        tls: {
            rejectUnauthorized:false
        }
    }
);


module.exports = {transporter}