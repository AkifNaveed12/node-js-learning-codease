// http server

const http = require("http");

const fs = require("fs");
const url = require("url");

//making a web server
// handler 
const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    // incoming requests process krny k liye
    // request -> ip address, client side meta data
    // response -> using res

    // understand request contents, req is an object
    console.log(req)
    console.log("New Request Recived!");
    const log = `${Date.now()}: ${req.url} : New Req Recived!\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data) => {

        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query;
                res.end(`Hi ${username}!`);
                break;
            default:
                res.end("404 Not Found")
        }
        // res.end("hello from server");
    });
    
});
// server run kry k liye port no chiye hota for listening
// local machojne pr max ports open hoty
// port == door, house ma bohat sary doors hoty similary 
// 1st server  == 1 port

myServer.listen(8000, () => console.log("Server Started"));


// browser ny request ki -> server pr aye -> port pr se listen j=ho k -> aur display huwa console ka message
// hr change k liye server restart hoga!