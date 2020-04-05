const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, //587
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'dashinthadilan.17@cse.mrt.ac.lk', // email service provider
        pass: '@Kossa96' //  password
    },
    tls: {
        rejectUnauthorized: false
    }
    });


module.exports = {transporter}