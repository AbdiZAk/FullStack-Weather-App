const express = require('express');
const router = express.Router();
const path = require("path")
const weatherApi = require("../controllers/weather-api")
const autocompleteApi = require("../controllers/autocomplete-api")
const cors = require('cors')


const corsOptions = {
    origin: 'https://ayweather.herokuapp.com',
    optionsSuccessStatus: 200
}

/* GET home page. */
router.get('/',cors(corsOptions), function(req, res, next) {

    const page = req.params.page
    const myData = {
        page: "home"
    }

    res.sendFile(path.join(__dirname, '../public/dist', 'index.html'));
});

// weatherApi Routes GET
router.get('/api/weather-api/:lat&:lon',cors(corsOptions), weatherApi.getWeatherData_GET)

// weatherApi Routes POST
router.get('/api/autocomplete-api/',cors(corsOptions), autocompleteApi.getAutocomplete)

module.exports = router;
