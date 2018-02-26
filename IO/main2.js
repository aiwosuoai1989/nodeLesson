var fs = require('fs');
var data = '';
var rs = fs.createReadStream('./a.txt');
var ws = fs.createWriteStream('b.txt');
rs.setEncoding('utf-8');
//监听当有数据流入的时候
rs.on('data', function (chunc) {
    // data+=chunc;
    console.log('...');
    ws.write(chunc, 'utf-8');
});
rs.on('end', function () {
    console.log('没有数据了');
    ws.end();
});