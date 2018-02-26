var express = require('express');
var rout = express.Router();
rout.get('/', function (req, res) {
    res.send('首页');
})

rout.get('/data', function (req, res) {
    return res.redirect('/数据.png');
})
rout.get('/img',function (req,res) {
    res.send("<img src='监控标注.png' />")
})
module.exports = rout;