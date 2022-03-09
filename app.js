let createError = require('http-errors');
let express = require('express');
require('express-async-errors');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/user');
let twitterRouter = require('./routes/twitter');
let apiUtil = require('./utils/api-util')


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routerHandle)

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/twitter/', twitterRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.json(apiUtil.fail(apiUtil.ApiCode404))
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err)
  res.json(apiUtil.fail(apiUtil.ApiCodeError))
});

module.exports = app;
