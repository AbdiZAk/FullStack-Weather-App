const express = require('express');
const router = express.Router();
const weatherApi = require("../controllers/weather-api")
const autocompleteApi = require("../controllers/autocomplete-api")
const path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.sendFile(path.join(__dirname, '../public/dist', 'index.html'));

});

// weatherApi Routes GET
router.get('/api/weather-api/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json({
    Message: "GET Request Not Allowed"
    })
})

router.post('/api/weather-api/', function (req, res
){
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    return weatherApi.getWeatherData_POST(req, res)
})

router.post('/api/autocomplete-api/', autocompleteApi.getAutocomplete)
router.get('/api/autocomplete-api/', autocompleteApi.getAutocomplete)

module.exports = router;
