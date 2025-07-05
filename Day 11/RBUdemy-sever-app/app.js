var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var coursesRouter = require('./routes/courses');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', coursesRouter);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);

module.exports = app;
