var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017';
var dbName = 'minangadi';

/* 
* GET all products. 
* Input:
* Output:
*/
router.get('/all', function(req, res, next) {
    mongo.connect(url, function(err, client){
        assert.equal(null, err);
        var db = client.db(dbName);
        var cursor = db.collection('products').findOne({},function(err, result ){
            //assert.equal(null,result);
            console.log("Result: "+result);
            client.close();
            res.send(result);
        });
    });
});

/* 
* GET latest products. 
* Input: No of latest products needed
* Output: JSON obj of latest products
*/
router.get('/latest', function(req, res, next) {
    mongo.connect(url, function(err, client){
        assert.equal(null, err);
        var db = client.db(dbName);
        var cursor = db.collection('products').findOne({},function(err, result ){
            //assert.equal(null,result);
            console.log("Result: "+result);
            client.close();
            res.send(result);
        });
    });
});

/* 
* GET trending products. 
* Input: No of trending products needed
* Output: JSON obj of trending products
*/
router.get('/trending', function(req, res, next) {
    mongo.connect(url, function(err, client){
        assert.equal(null, err);
        var db = client.db(dbName);
        var cursor = db.collection('products').findOne({},function(err, result ){
            //assert.equal(null,result);
            console.log("Result: "+result);
            client.close();
            res.send(result);
        });
    });
});

/* 
* GET top offer products. 
* Input: No of products needed
* Output: JSON obj of offer products
*/
router.get('/topOffer', function(req, res, next) {
    mongo.connect(url, function(err, client){
        assert.equal(null, err);
        var db = client.db(dbName);
        var cursor = db.collection('products').findOne({},function(err, result ){
            //assert.equal(null,result);
            console.log("Result: "+result);
            client.close();
            res.send(result);
        });
    });
});

module.exports = router;