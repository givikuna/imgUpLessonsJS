const express = require('../../../nodeModules/myExpress/node_modules/express');
const app = express();
const path = require('path');
const fs = require('fs');
const url = require('url');
const multer = require('../../../nodeModules/multerModule/node_modules/multer');

app.get('/', function (req, res) {
    var infoFromURL = url.parse(req.url, true).query;
    if (infoFromURL.type == "login") {
        var filePath = path.join(__dirname, "../www", "login.htm");
        fs.access(filePath, fs.F_OK, (err) => {
            if (err) {
                console.error(err);
                res.send("Error to finding index file");
                return;
            }
            res.sendFile(filePath);
        })
    } else {
        var filePath = path.join(__dirname, "../www", "index.htm");
        fs.access(filePath, fs.F_OK, (err) => {
            if (err) {
                console.error(err);
                res.send("Error to finding index file");
                return;
            }
            res.sendFile(filePath);
        })
        /*
            if (infoFromURL == null) { } else {
                console.log("1");
                const handleError = (err, res) => {
                    res
                        .status(500)
                        .contentType("text/plain")
                        .end("Oops! Something went wrong!");
                };

                console.log("2");
                const upload = multer({
                    dest: "../up_img/tempImageLocation/1.png"
                    // you might also want to set some limits: https://github.com/expressjs/multer#limits
                });


                console.log("1");
                app.post(
                    "/upload",
                    upload.single("image" /* name attribute of <file> element in your form *),///////////////////
                    (req, res) => {
                        console.log("3");
                        const tempPath = req.file.path;
                        const targetPath = path.join(__dirname, "../up_img/7.png");
                        console.log("4");

                        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
                            console.log("5");
                            fs.rename(tempPath, targetPath, err => {
                                console.log("6");
                                if (err) return handleError(err, res);
                                console.log("7");

                                res
                                    .status(200)
                                    .contentType("text/plain")
                                    .end("File uploaded!");
                            });
                        } else {
                            console.log("8");
                            fs.unlink(tempPath, err => {
                                console.log("9");
                                if (err) return handleError(err, res);
                                console.log("10");

                                res
                                    .status(403)
                                    .contentType("text/plain")
                                    .end("Only .png files are allowed!");
                            });
                        }
                    }
                );
                console.log("11");
            }
        */
    }
});
app.listen(8090)
console.log('Server running at http://127.0.0.1:8090/'); //
