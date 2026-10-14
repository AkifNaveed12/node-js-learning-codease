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
    const log = `${Date.now()}: ${req.method} : ${req.url} : New Req Recived!\n`;
    const myUrl = url.parse(req.url, true); // node parses the query string into an object

    // a modern alternative for url.parse
    // const myUrl = new URL(req.url, `http://${req.headers.host}`);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data) => {

        switch(myUrl.pathname){
            case "/":
                if(req.method === 'GET') res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                const userId = myUrl.query.userId;

                // modern approach way
                // const username = myUrl.searchParams.get("myname");
                // const userId = myUrl.searchParams.get("userId");
                // console.log(username); // akifnaveed
                // console.log(userId);   // 2       
                
                res.end(`Hi ${username}!`);
                break;
            case '/search':
                // how youtube search query works..
                const search = myUrl.query.search_query;
                res.end("here are the results " + search);
                break;

            case '/signup':
                if(req.method === 'GET' ) res.end("This is a signup Form");
                else if(req.method === "POST"){
                    // db query
                    res.end("Success");
                }
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