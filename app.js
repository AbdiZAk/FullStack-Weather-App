const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config();

// For development
const livereload = require('livereload')
const connectLiveReload = require('connect-livereload')
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


// configure app views and static files
const app = express();

// return json
app.use(express.json())

const whitelist = ['http://127.0.0.1:3000', "http://127.0.0.1:35729"]
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  optionsSuccessStatus: 200
}



// For development
app.use(connectLiveReload());

// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.set('static', path.join(__dirname, 'public'));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

const main = require('./routes/main');

const weatherApi = require('./routes/weather-api')
const autoCompleteApi = require('./routes/autocomplete-api')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// main app route
app.use('/', main);

// api routes that use cors
app.use(cors(corsOptions));
app.use('/weather-api', weatherApi);
app.use('/autocomplete-api', autoCompleteApi);



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
});


module.exports = app;
