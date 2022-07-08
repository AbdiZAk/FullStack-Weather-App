const axios = require('axios')
require('dotenv').config();

// get weather data
async function getWeatherData(lat, lon){
    let weatherApiKey = process.env.WEATHER_API_KEY;
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
        "&units=imperial&&appid=" + weatherApiKey;
    return await axios.get(apiUrl)
}

const getWeather = async (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon
    const weatherData = await getWeatherData(lat, lon).catch(err => {
        return {Error: err.stack}
    }).then(data => {
        return data
    })
    res.json(weatherData.data)
    // res.json({weatherData: "weather controller"})
}

module.exports = {
    getWeather
}