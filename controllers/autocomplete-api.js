const axios = require("axios")
require('dotenv').config();

async function getAutocompleteData(text){
    const AutocompleteApiKey = process.env.AUTOCOMPLETE_API_KEY
    
    let apiUrl = `https://weather-api-ashy-one.vercel.app/api/autocomplete?text=${text}`;
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