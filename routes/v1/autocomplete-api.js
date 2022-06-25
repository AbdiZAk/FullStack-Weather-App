require('dotenv').config();
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
let AutocompleteApiKey = process.env.AUTOCOMPLETE_API_KEY
// GET weather api page.

router.get('/', function(req, res, next) {
    //get weather api params
    let query = req.query
    let apiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${query.text}&format=json&
    limit=5&apiKey=${AutocompleteApiKey}`;

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



module.exports = router;
