const express = require('express');
const ipAddress = require('./getIPAddress');
const port = 8000;
const host = ipAddress.address();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var contactList = [
    {name : 'Hello Verma', phone : 4242342},
    {name : 'Hello1 Verma', phone : 23423},
    {name : 'Hello2 Verma', phone : 993275},
    {name : 'Hello3 Verma', phone : 9242275}
];
// sets a view engine used 
app.set('view engine','ejs'); 

// sets the path from where the views need to be extracted
app.set('views',path.join(__dirname,'views')); 

// middleware to parse the payload.
app.use(bodyParser.urlencoded({extended : false})); 

app.get('/', function(request, response){
   // response.writeHead(200,{'content-type':'text/html'});
    return response.end('Hello');
});
app.get('/practise', function(request, response){
    return response.render('practise',{title: 'My Contacts List'});
});
app.get('/contact', function(request, response){
    return response.render('index',{title: 'My Contacts List', contact_list : contactList});
});
app.post('/add-contact', function(request, response){
    console.log(request.body);
    // contactList.push({
    //     name : request.body.name,
    //     phone : request.body.phone
    // });
    for(let i of contactList) if(i.name === request.body.name)  return response.redirect('back');
    contactList.push(request.body);
    return response.redirect('back');
});

app.listen(port, host, function(error){
    if(error) console.log("Error running express Server : ", error);
    else console.log("Express Server is running at ",host," port : ", port);
});