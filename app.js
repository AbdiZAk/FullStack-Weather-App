const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

// configure app views and static files
const app = express();

// return json
app.use(express.json())


// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//main route for app (home page)
const main = require('./routes/main');

// API
const weatherApi = require('./routes/v1/weather-api')
const autoCompleteApi = require('./routes/v1/autocomplete-api')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// main app route
app.use('/', main);

// api routes that use cors
app.use('/v1/weather-api', weatherApi);
app.use('/v1/autocomplete-api', autoCompleteApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {proError: "Page is not found on the server"};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next()
});


module.exports = app;
