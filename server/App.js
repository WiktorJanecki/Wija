var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {});
server.listen(50505, function() { });
wsServer = new WebSocketServer({
  httpServer: server
});
let clients = {};
let noc = 0;
addClient(123)
// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  connection.on('message', function(message) {
    if(clients[message.utf8Data] !== undefined){
      newMessage(message.utf8Data,connection);
    }
    else if(clients[message.utf8Data] === undefined){
      addClient(message.utf8Data);
      console.log(clients);
    }

  });
  connection.on('close', function(connection) {});
});

function newMessage(message,connection){
  const playerObject = JSON.stringify(clients["Wigtor"]);
  connection.sendUTF(playerObject);
}
function addClient(name){noc++;clients[name] = new player();}
function player(){
  this.x = 4;
  this.y = 5;
}