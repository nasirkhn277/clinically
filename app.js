var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const crypto = require("crypto");
var session = require('express-session');
const multer  = require('multer')
var forms = multer();

var app = express();

app.use(session({
  secret: 'clinically',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signup = require('./routes/signup');
var doctor = require('./routes/doctor');
var clinics = require('./routes/clinics');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signup);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/doctor', doctor);
app.use('/clinics', clinics);

// catch 404 and forward to error handler
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
