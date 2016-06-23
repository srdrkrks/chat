var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('/usr/local/lib/node_modules/socket.io');

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;

    switch (path) {
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('hello world');
            response.end();
            break;
        case '/socket.html':
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write("opps this doesn't exist - 404");
                    response.end();
                } else {
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data, "utf8");
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});

server.listen(9031);

//io.listen(server);

var listener = io.listen(server);


//listener.sockets.on('connection', function(socket){
//    socket.emit('message', {'message': 'hello world'});
//});


listener.sockets.on('connection', function (socket) {
    //send data to client
    setInterval(function () {
        socket.emit('date', {'date': new Date()});
    }, 1000);

    socket.on('client_data', function (data) {
//        process.stdout.write(data.letter);
         socket.emit('mdata', {'my': data.letter});
    });
});


//recieve client data

