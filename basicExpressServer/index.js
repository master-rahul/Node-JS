const express = require('express');
const port = 8000;
const host = '127.0.0.1';
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/', function(request, response){
    console.log(__dirname);
    return response.render('index',{title: 'My Contacts List'});
});
app.get('/practise', function(request, response){
    return response.render('practise',{title: 'My Contacts List'});
});
app.get('/profile', function(request, response){
    response.send("<h1>It is running at profile</h1>");
});
app.get('/contact', function(request, response){
    response.send("<h1>It is running at contact</h1>");
});

app.listen(port, host, function(error){
    if(error) console.log("Error running express Server : ", error);
    else console.log("Express Server is running at ",host," port : ", port);
});