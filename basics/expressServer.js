const methods = require('./methods');
const express = require('express');
const port = 8000;
const fileReader = require('fs');
const app = express();
var addr = methods.address();

app.get('/', function(request, response){
    console.log('/home');
    response.send('<h1> Welcome to Express JS server.');
    console.log(response.header);
});

app.listen(port, addr, function(err){
    if(err) console.log(err);
    console.log('This is express Server running on port : ',port);
});