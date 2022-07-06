const createError = require('http-errors');
const express = require('express');
const path = require('path');
// configure app views and static files
const app = express();

// return json
app.use(express.json())

// const whitelist = ['http://127.0.0.1:3000', "http://127.0.0.1:35729"]
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   optionsSuccessStatus: 200
// }

// Configure app views and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + 'public/css'))

const weatherApi = require('./routes/v1/weather-api')
const autoCompleteApi = require('./routes/v1/autocomplete-api')

app.use(express.json());

app.use('/v1/weather-api', weatherApi);
app.use('/v1/autocomplete-api', autoCompleteApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/dist', 'index.html'))
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Backend is running at PORT:${3000}`)
})


module.exports = app;
