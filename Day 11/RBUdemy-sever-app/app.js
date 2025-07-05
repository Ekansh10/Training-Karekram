const mongoose = require('mongoose'); // imported mongoose
const cors = require('cors'); // imported cors
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/RBUdemyDB');


var coursesRouter = require('./routes/courses');
var usersRouter = require('./routes/users');


// configuring cors

const corsOptions = { // this is called whitelisting
  origin: ['http://localhost:3000'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};


// CORS middleware enable
// app.use(cors(corsOptions)); can pass the configured cors as well
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', coursesRouter);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);

module.exports = app;
