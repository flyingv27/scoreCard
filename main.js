var http = require('http');
var fs = require('fs');
var urlmodule = require('url');

var querystring = require('querystring');

var app = http.createServer(function(request,response){
    
    var parsedUrl = urlmodule.parse(request.url);
    console.log(parsedUrl.pathname);

    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);
    var url = request.url;

    if(url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end();
        console.log("favicon requested.");
        return;
    }
    if(url == '/'){
      url = '/index.html';
    }
    response.writeHead(200);
    //response.end('End...');
    //response.end(url);
    console.log("========="+url);

    response.end(fs.readFileSync(__dirname + url));

});
app.listen(8080);