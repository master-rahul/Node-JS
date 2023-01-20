// 'npm init' --> is used to setup a new or exiting npm package (sets : package.json)
const methods = require('./methods');
const http = require('http');
const fs = require('fs');
const port = 8000;
const filePath = '/Users/extreme/Web Development Practise/Front End/Functionalities/Alerts/alert.html';
var address = methods.address();


const server = http.createServer(requestHandler);
function requestHandler(req, res){
    console.log(req.url);
    fs.readFile(filePath, function(err, data){
        if(err) res.end("Page Not Loaded !!!!");
        else res.end(data);
    });
}
server.listen(port, address, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port : ",port);
});