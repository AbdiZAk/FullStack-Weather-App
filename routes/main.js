const express = require('express');
const router = express.Router();
const weatherApi = require("../controllers/weather-api")
const autocompleteApi = require("../controllers/autocomplete-api")

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index');
});

// weatherApi Routes GET
router.get('/api/weather-api/', (req, res) => {
    res.json({
    Message: "GET Request Not Allowed"
    })
})

router.post('/api/weather-api/', function (req, res
){
    return weatherApi.getWeatherData_POST(req, res)
})


router.get('/api/autocomplete-api/', autocompleteApi.getAutocomplete)

module.exports = router;
