var express = require('express');
var mongo = require('mongodb');
var assert = require('assert');
var router = express.Router();


var url = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Minangadi' });
});

module.exports = router;
