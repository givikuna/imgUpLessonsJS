const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    try {
        fs.readFile("../data/data.json", function (err, data) {
            if (fs.existsSync("../data/data.json")) {
                res.write(data);
                return res.end();
            } else {
                res.write("");
                return res.end();
            }
        });
    } catch (error) {
        console.log(error);
    }
}).listen(8091);
console.log('Server running at http://127.0.0.1:8091/');
