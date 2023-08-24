const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', function (req, res, next) {
    return axios.get('http://0.0.0.0:9100')
        .then(({data}) => {
            return res.json({data})
        })
        .catch((error) => {
            return res.json({error})
        })
});

module.exports = router;
