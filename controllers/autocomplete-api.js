const axios = require("axios")

AUTOCOMPLETE_API_KEY = "a2de75c9d4e14b87a354a37215aef683"

let AutocompleteApiKey = AUTOCOMPLETE_API_KEY

async function getAutocompleteData(text){

    let apiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&format=json&
    limit=5&apiKey=${AutocompleteApiKey}`;
    return await axios.get(apiUrl)
}

// GET weather api page.
const getAutocomplete = async (req, res) => {
    //get weather api params
    let queryData = req.query.text
    const suggestions = await getAutocompleteData(queryData).catch(err => {
        return {Error: err.stack}
    }).then(data => {
        return data
    })
    res.status(200).json(suggestions.data)
};


module.exports = {
    getAutocomplete
}