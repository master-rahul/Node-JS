const express = require('express');
const ipAddress = require('./getIPAddress');
const alert = require('alert');
const port = 8000;
const host = ipAddress.address();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var contactList = [
    {name : 'Hello Verma', phone : '4242342'},
    {name : 'Hello1 Verma', phone : '23423'},
    {name : 'Hello2 Verma', phone : '993275'},
    {name : 'Hello3 Verma', phone : '9242275'}
];

var userInfo =[
    {name : 'user1', password : 'password1'},
    {name : 'user2', password : 'password2'},
    {name : 'user3', password : 'password3'},
]
// sets a view engine used 
app.set('view engine','ejs'); 

// sets the path from where the views need to be extracted
app.set('views',path.join(__dirname,'views')); 

// middleware to parse the payload.
app.use(bodyParser.urlencoded({extended : false})); 

// middleware for accessing static files.
app.use(express.static('static'));

//middleware to print the request
app.use(function(request, response, next){
   // console.log('Middleware -1 called : ',request.body.name);
    next();
});
app.use(function(request, response, next){
   // console.log('Middleware -2 called : ',request.body.phone);
    next();
});

app.get('/', function(request, response){
    return response.redirect('login');
});
// app.get('/signed/contact', function(request, response){
//     if(request.signed_in) 
//     else return response.send("LOGIN FIRST");
// });

app.get('/login',function(request, response){
    return response.render('login');
});

app.post('/signed', function(request, response){
    for(let i = 0; i < userInfo.length; i++) 
    if(request.body.name === userInfo[i].name && request.body.password == userInfo[i].password)  
        return response.render('home',{title: 'My Contacts List', contact_list : contactList});
    else{
        alert("USER and PASSOWRD are INCORRECT");
        return response.render('login');
    }
});


app.post('/add-contact', function(request, response){
    console.log('Add : ',request.body);
   
    for(let i of contactList) if(i.name === request.body.name)  return response.redirect('back');
    //  contactList.push({
    //     name : request.body.name,
    //     phone : request.body.phone
    // });
    contactList.push(request.body);
    return response.render('home',{title: 'My Contacts List', contact_list : contactList});

});


app.post('/delete-contact',function(request, response){
    console.log('Remove : ', request.body);
    var nn = request.body.name;
    for(let i = 0; i < contactList.length; i++) if(request.body.name === contactList[i].name) contactList.splice(i,1);
    return response.render('home',{title: 'My Contacts List', contact_list : contactList});
});



app.listen(port, host, function(error){
    if(error) console.log("Error running express Server : ", error);
    else console.log("Express Server is running at ",host," port : ", port);
});