var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {});
server.listen(50505, function() { });
wsServer = new WebSocketServer({
  httpServer: server
});
let clients = {
    "1":"21",
    "3":"21",
    "4":"21",
};
// WebSocket server
wsServer.on('request', function(request) {
var connection = request.accept(null, request.origin);
    connection.on('message', function(message) {
    if(message.type="utf8"){
        //Sprawdz czy ma dostęp do postaci
        const data = message.utf8Data;
        if (clients.hasOwnProperty(data.id)) {
            //Super
        }
        else{
            //Dodaj go z mysqla
            clients[data.id] = {
                'x':0,
                'y':0,
                'map':"",
            }
        }
    }
    });
    connection.on('close', function(connection) {});
});
