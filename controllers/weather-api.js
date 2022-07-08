const axios = require('axios')
require('dotenv').config();

// get weather data
let lat = "43.0481"
let lon = "76.1474"

async function getWeatherData(lat, lon){
    let weatherApiKey = process.env.WEATHER_API_KEY;
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
        "&units=imperial&&appid=" + weatherApiKey;
    return await axios.get(apiUrl)
}

const getWeather = async (req, res) => {
    // const lat = req.params.lat
    // const lon = req.params.lon
    const weatherData = await getWeatherData(lat, lon).catch(err => {
        return {Error: err.stack}
    }).then(data => {
        return data
    })
    res.status(200).json(weatherData.data)
    // res.json({weatherData: "weather controller"})
}

module.exports = {
    getWeather
}