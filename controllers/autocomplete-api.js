const axios = require("axios")
const util=require('util');
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
    // res.status(200).json(suggestions.data)

    function censor(censor) {
        var i = 0;

        return function(key, value) {
            if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value)
                return '[Circular]';

            if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
                return '[Unknown]';

            ++i; // so we know we aren't using the original object anymore

            return value;
        }
    }

    console.log("Censoring: ");

    // console.log("Result: ", JSON.stringify(req, censor(req)));

    res.json(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    // console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
};


module.exports = {
    getAutocomplete
}