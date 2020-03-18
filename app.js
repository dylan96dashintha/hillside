var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var parseurl = require('parseurl')
var session = require('express-session')




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookNowRouter = require('./routes/bookNow');
var adminRouter = require('./routes/admin');
var pavementRouter = require('./routes/pavement');
var deleteRecordRouter = require('./routes/deleteRecord');
var createNewRecordrouter = require('./routes/createNewRecord');
var adminAuthRouter = require('./routes/adminAuth');

var app = express();

require("firebase/firestore");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/bookNow' , bookNowRouter);
app.use('/admin' , adminRouter);
app.use('/pavement' , pavementRouter);
app.use('/deleteRecord' , deleteRecordRouter);
app.use('/createNewRecord' , createNewRecordrouter);
app.use('/adminAuth' , adminAuthRouter);
app.use(function(req, res, next) {
  next(createError(404));
});

//session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})

app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})


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
