const axios = require('axios')
require('dotenv').config();

async function getWeatherData(lat, lon){
    const weatherApiKey = process.env.WEATHER_API_KEY;
    
    let apiUrl = `https://weather-api-ashy-one.vercel.app/api/weather/?lat=${lat}&lon=${lon}`
    return await axios.get(apiUrl)
}

const getWeatherData_POST = async (req, res) => {
    // Get data from request body
    const lat = req.body.lat
    const lon = req.body.lon
    // Get weather Data
    const weatherData = await getWeatherData(lat, lon).catch(err => {
        return {Error: err.stack}
    }).then(data => {
        return data
    })
    res.status(200).json(weatherData.data)
}


module.exports = {
    getWeatherData_POST
}