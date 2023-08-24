const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', function(req, res, next) {
  return axios.get('http://localhost:9100').then(({data}) => {
    return  res.json({ data })
  })
});

module.exports = router;
