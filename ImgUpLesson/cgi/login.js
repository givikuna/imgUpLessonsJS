const express = require('../../../nodeModules/myExpress/node_modules/express');
const app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    console.log(infoURL);
    var infoURL = url.parse(req.url, true).query;
    console.log(infoURL);
    console.log(infoURL);

    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    try {
        console.log(infoURL);
    } catch (error) {
        console.log("error: " + error);
    }
}).listen(8093);
console.log('Server running at http://127.0.0.1:8093/');
