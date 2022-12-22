const router = require("express").Router();
const fetch = require('node-fetch')
require('dotenv').config();


let AutocompleteApiKey = process.env.AUTOCOMPLETE_API_KEY
// GET weather api page.

router.get('/', function(req, res, next) {
    //get weather api params
    let query = req.query
    let apiUrl = `https://weather-api-ashy-one.vercel.app/api/autocomplete?${query}`;
    
    const autocomplete = async () => {
        try {
        const suggestionsResponse = await fetch(apiUrl)
        return  await suggestionsResponse.json()
    }catch (err){
        return { Error: err.stack}
    }
    }
    autocomplete().then(responseData => {
        res.json(responseData)
    })


});


module.exports = router