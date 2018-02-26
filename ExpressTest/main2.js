var express = require('express');
var path = require('path');
var app = express();
var files = express.static(path.join(__dirname, 'files'));
app.use(files); //use这个路径设置 才可以 真正使用
app.listen(3000);
