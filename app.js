const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

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

// Configure app views and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + 'public/css'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/dist', 'index.html'))
});

//main route for app (home page)
// const main = require('./routes/main');

// API
const weatherApi = require('./routes/v1/weather-api')
const autoCompleteApi = require('./routes/v1/autocomplete-api')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// main app route
// app.use('/', main);

// api routes that use cors
app.use(cors(corsOptions));
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

app.listen(process.env.PORT || 3000, () => {
  console.log(`Backend is running at PORT:${3000}`)
})


module.exports = app;
