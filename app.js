const createError = require('http-errors');
const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const cors = require('cors')
const main = require("./routes/main")

//Create express app
const app = express();

const whitelist = ['https://ayweather.vercel.app/',]
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

app.use(cors(corsOptions))

// Configure app views and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", main)

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

