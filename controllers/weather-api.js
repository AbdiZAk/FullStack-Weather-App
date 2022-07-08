const axios = require('axios')

WEATHER_API_KEY = "04378cdbebbaa0afda239b4cede1b5a4"
// get weather data
// let lat = "43.0481"
// let lon = "76.1474"

async function getWeatherData(lat, lon){
    let weatherApiKey = WEATHER_API_KEY;
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
        "&units=imperial&&appid=" + weatherApiKey;
    return await axios.get(apiUrl)
}

const getWeatherData_GET = async (req, res) => {
    // const lat = req.params.lat
    // const lon = req.params.lon
    const weatherData = await getWeatherData(lat, lon).catch(err => {
        return {Error: err.stack}
    }).then(data => {
        return data
    })
    res.status(200).json(weatherData.data)
    // res.json({Test: "Testing"})
}

const getWeatherData_POST = async (req, res) => {
    const lat = req.body.lat
    const lon = req.body.lon
    const weatherData = await getWeatherData(lat, lon).catch(err => {
        return {Error: err.stack}
    }).then(data => {
        return data
    })
    console.log(weatherData.data)
    res.status(200).json(weatherData.data)
}

module.exports = {
    getWeatherData_GET,
    getWeatherData_POST
}