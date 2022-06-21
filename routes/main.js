const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const page = req.params.page
    const myData = {
        page: "home"
    }

    res.render('index', {data: myData});
    // res.json({mess: "Weather-api"})
});


module.exports = router;
