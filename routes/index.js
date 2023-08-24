const express = require('express');
const router = express.Router();
const http = require('http');

const get = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => { resolve(JSON.parse(body)); });
        }).on('error', (err) => { reject(err); });
    });
}

router.get('/', function(req, res, next) {
  return get('http://localhost:9100').then((response) => {
    return  res.json({ response })
  })
});

module.exports = router;
