const express = require('express');
const port = 8000;
const host = '127.0.0.1';
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var contactList = [
    {name : 'Rahul Verma', phone : 89458234533},
    {name : 'Pooja Verma', phone : 9064556173},
    {name : 'Preeti Verma', phone : 9733193275},
    {name : 'Aradhana Verma', phone : 9733193275}
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