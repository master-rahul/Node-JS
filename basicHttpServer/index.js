const http = require('http');
const port = 8000;
const host = '127.0.0.1';
const fs = require('fs');
const { type } = require('os');
const server = http.createServer(requestHandler);
//function requestHandler(request, response){
    // if(request.url == '/'){
    //     response.writeHead(200,{'content-type' : 'text/html'});
    //     fs.readFile('./index.html', function(err, data){
    //         if(err){
    //             console.log(err);
    //             return response.end(err);
    //         }else {
    //              response.write(data);
    //              return response.end();
    //         }
    //     });
    //     console.log(request.url);
    // }else{
    //     response.writeHead(400);
    //     fs.readFile('./404.html', function(err, data){
    //         if(err){
    //             console.log(err);
    //             return response.end(err);
    //         }else {
    //              response.write(data);
    //              return response.end();
    //         }
    //     });
    //     console.log(request.url);
    // } 
//}
function requestHandler(request, response){
    let filePath = '';
    switch(request.url){
        case '/':
            filePath = './index.html';
            response.writeHead(200, {'content-type':'text/html'});
            break;
        default :
            filePath = './404.html';
            response.writeHead(400,{'content-type':'text/html'});
    }
    fs.readFile(filePath,function(err,data){
        console.log(request.url);
        if(err){
            response.write(err);
            console.log(err);
            return response.end();
        }else{
            response.write(data);
            return response.end();
        }
    });
}
server.listen(port,host,function(err){
    if(err) {
        console.log(err);
        return;
    }
    console.log('The server is running at ', host, 'at port : ',port);
});
