const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, //587
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'rashnanayakkara96@gmail.com', // email service provider
        pass: '' //  password
    },
    tls: {
        rejectUnauthorized: false
    }
    });


module.exports = {transporter}