var nodemailer = require("nodemailer");
var EmailTemplate = require("email-templates").EmailTemplate;

var sender = 'smtps://hillsideNuwaraeli%40gmail.com' ;
var psw = 'cxoxfvvjozbdruhk';

var transporter = nodemailer.createTransport(sender + ':' + psw + '@smtp.gmail.com');

var verifyReg = transporter.templateSender(
    new EmailTemplate('./templates/emailTmp'), {
          from: '4NoteFour.com',
    });
  
var confirmBooking = transporter.templateSender(
    new EmailTemplate('./templates/confirmTmp'), {
        from: '4NoteFour.com',
    });

var reminder = transporter.templateSender(
    new EmailTemplate('./templates/reminder'), {
        from: '4NOteFour.com',
});

exports.reminder = function (email, name, orderId, paymentDate) {
    // transporter.template
    reminder({
        to: email,
        subject: 'Payment-Reminder'
    }, {
        name: name,
        orderId: orderId,
        paymentDate: paymentDate
    }, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Link sent\n'+ JSON.stringify(info));
        }
    });
};

exports.verifyReg = function (email, name, code) {
    // transporter.template
    verifyReg({
        to: email,
        subject: 'Booking- verification'
    }, {
        name: name,
        code: code
    }, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Link sent\n'+ JSON.stringify(info));
        }
    });
};

exports.confirmBooking = function(email,name,checkIn,checkOut,des) {
    confirmBooking({
        to: email,
        subject: 'Booking -confirmation'
    }, {
        name: name,
        checkIn: checkIn,
        checkOut: checkOut,
        des: des
    }, function(err,info) {
        if (err) {
            console.log(err)
        }else {
            console.log('Link sent\n'+ JSON.stringify(info));
        }
    });
};


