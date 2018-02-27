var mongodb = require('mongodb');
var assert = require('assert');
var MongoClient = mongodb.MongoClient;
var Urls = "mongodb://localhost:27017/demo3";
MongoClient.connect(Urls, function (err, db) {
    assert.equal(null, err);
    db.collection('t1').insert({name: 'xiaomi'}, function (err, result) {
        assert.equal(null, err);
        console.log(result);
        db.close();
    });
    db.collection('t1').updateOne({name: 'xiaomi'}, {$set: {age: '120'}}, function (err, result) {
        assert.equal(null, err);
        console.log(result);
        db.close();
    })
    db.collection('t1').deleteMany({name: 'xiaomi'}, function (err, result) {
        assert.equal(null, err);
        console.log(result);
        db.close();
    })
})