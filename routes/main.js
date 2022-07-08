const express = require('express');
const router = express.Router();
const path = require("path")
const WeatherAPI = require("../controllers/weather-api")
/* GET home page. */
router.get('/', function(req, res, next) {

    const page = req.params.page
    const myData = {
        page: "home"
    }

    res.sendFile(path.join(__dirname, '../public/dist', 'index.html'));
});

router.get('/api/weather-api/:lat&:lon', WeatherAPI.getWeather)

module.exports = router;
