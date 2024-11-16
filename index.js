//request - response => server
//http

var http = require("http"); // node modules => http,fs, os
var fs = require("fs");

var server = http.createServer((req, res) => {
    

    if(req.url == "/"){
        fs.readFile("index.html",(error, html) => {
            res.write(html);
            res.end();
        });

    } else if(req.url == "/products") {
        fs.readFile("urunler.html",(error, html) => {
            res.write(html);
            res.end();
        });
    } else {

        fs.readFile("404.html",(error, html) => {
            res.write(html);
            res.end();
        });
    }

    //res.end();
});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});