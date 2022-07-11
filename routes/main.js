const express = require('express');
const router = express.Router();
const path = require("path")
const weatherApi = require("../controllers/weather-api")
const autocompleteApi = require("../controllers/autocomplete-api")


/* GET home page. */
router.get('/', function(req, res, next) {

    const page = req.params.page
    const myData = {
        page: "home"
    }

    res.sendFile(path.join(__dirname, '../public/dist', 'index.html'));
});

// weatherApi Routes GET
router.get('/api/weather-api/:lat&:lon', weatherApi.getWeatherData_GET)

// weatherApi Routes POST
router.get('/api/autocomplete-api/', autocompleteApi.getAutocomplete)

module.exports = router;
