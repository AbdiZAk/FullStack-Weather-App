require('dotenv').config();
const router = require("express").Router();
const fetch = require('node-fetch')
// get weather data
const getWeatherData = async (lat, lon) =>{
  let weatherApiKey = process.env.WEATHER_API_KEY;
  console.log(weatherApiKey)
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
      "&units=imperial&&appid=" + weatherApiKey;
  try {
    const weatherData = await fetch(apiUrl)
    return  await weatherData.json()
  }catch (err){
    return { Error: err.stack}
  }
}


router.get('/', function(req, res, next) {

  //Setting store key and data
  res.json({success: "Welcome to the Weather API"})

});

router.get(":lat&:lon", async (req, res) => {
  req.header("Access-Control-Allow-Origin",)
  const lat = req.params.lat
  const lon = req.params.lon
  const weatherData = await getWeatherData(lat, lon)
  res.json(weatherData)
})

router.post('/', async (req, res) =>{
  const lat = req.body.lat
  const lon = req.body.lon
  console.log(req.body)
  const weatherData = await getWeatherData(lat, lon)
  res.json(weatherData)
})

module.exports = router