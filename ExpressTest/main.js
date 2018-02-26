var express =require('express');
var app=express();
var data='';
var fs=require('fs');
var rs=fs.createReadStream('index.html');
app.get('/',function (req,res) {
    rs.on('data',function (chunc) {
        data+=chunc;
        res.end(data);
    });
});
app.listen(3000);