const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    var infoURL = url.parse(req.url, true).query;
    var imagePath = "../up_img/";
    var contentImagePath = "../www/img/";

    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    try {
        if (infoURL.type == "up_img") {
            var fileLocation = imagePath + infoURL.img;
            fs.readFile(fileLocation, function (err, data) {
                res.write(data);
                return res.end();
            });
        } else if (infoURL.type == "content") {
            var fileLocation = contentImagePath + infoURL.img;
            fs.readFile(fileLocation, function (err, data) {
                res.write(data);
                return res.end();
            });
        }
    } catch (error) {
        console.log("error: " + error);
    }
}).listen(8092);
console.log('Server running at http://127.0.0.1:8092/');
