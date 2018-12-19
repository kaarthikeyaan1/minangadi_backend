var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = "mongodb://localhost:27017";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Array of orders object');
});

module.exports = router;