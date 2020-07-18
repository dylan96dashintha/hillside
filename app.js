var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookNowRouter = require('./routes/bookNow');
var pavementRouter = require('./routes/pavement');
var deleteRecordRouter = require('./routes/deleteRecord');
var createNewRecordrouter = require('./routes/createNewRecord');
var addUserDetailsRouter = require('./routes/addUserDetailsAdmin');
var adminAuthRouter = require('./routes/adminAuth');
var adminRouter = require('./routes/admin');
var registeruser = require('./routes/register');
var verifyuser = require('./routes/verify');
var error = require('./routes/error');
var logOut = require('./routes/logoutAdmin');
var test = require('./routes/test');
var schedule = require('node-schedule');
var conn = require('./config/sqlconnection');
var addsubtractDate = require('add-subtract-date');
var nodemailer = require('./routes/nodemailerWithTemp');
var app = express();

require("firebase/firestore");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// app.use(session({
//   secret :'ssshhhhh',
//   resave : false,
//   saveUninitialized : true,
//   }));
app.use(express.json());

//session configuration
app.use(session(
  {
    name: 'sid',
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    cookie:{
      maxAge: 1000*60*30,
      sameSite: true,
      secure:false
    }
  }
))

//schedule for send remainder email
var j = schedule.scheduleJob('01 00 * * *', function(){
  console.log("hi");
  conn.query(`SELECT * FROM customerdetails NATURAL JOIN orderdetails ORDER BY bookDate ASC` , function(err , result){
    if (err) {
        console.log(err);
    }else {
    }
  const response = JSON.parse(JSON.stringify(result)); 
  for(x = 0; x<response.length; x++) {
    const checkIn =new Date((response[x].checkIn).substring(0,10));
    const bookDate = new Date((response[x].bookDate).substring(0,10));
    var diffDays = parseInt((checkIn - bookDate) / (1000 * 60 * 60 * 24));
    if (diffDays > 2 ) {
      var pavementDate = addsubtractDate.subtract(new Date(checkIn), 2, "days");
      var datetime = new Date();
      var today = new Date(datetime.toISOString().slice(0,10));
      var difBetweenPavementCurrent = parseInt((pavementDate - today) / (1000 * 60 * 60 * 24)); 
      if(difBetweenPavementCurrent === 1 || difBetweenPavementCurrent === 0  ) {
        const email = response[x].email;
        const name = response[x].fname;
        const orderId = response[x].orderId;
        nodemailer.reminder(email, name, orderId, pavementDate.toISOString().slice(0,10));
      }
       
    }
  }
  });
});





app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookNow' , bookNowRouter);
app.use('/pavement' , pavementRouter);
app.use('/deleteRecord' , deleteRecordRouter);
app.use('/createNewRecord' , createNewRecordrouter);
app.use('/addUserDetails' , addUserDetailsRouter);
app.use('/adminAuth' , adminAuthRouter);
app.use('/admin' , adminRouter);
app.use('/register', registeruser);
app.use('/verify',verifyuser);
app.use('/error',error);
app.use('/logout',logOut);
app.use('/test',test);
//Jwt configuration
app.use(bodyparser.json());



app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
