const fetch = require('node-fetch')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");
AUTOCOMPLETE_API_KEY = "a2de75c9d4e14b87a354a37215aef683"

let AutocompleteApiKey = process.env.AUTOCOMPLETE_API_KEY

// GET weather api page.
const getAutocomplete = async (req, res) => {
    //get weather api params
    let queryData = req.query
    let apiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${queryData.text}&format=json&
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


};


module.exports = {
    getAutocomplete
}