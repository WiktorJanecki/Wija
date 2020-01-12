var WebSocketServer = require('websocket').server;
var http = require('http');

const auth = require('./auth')
const response = require('./response')

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
let map = {

}
 
wsServer.on('request', function(request) {
var connection = request.accept(null, request.origin);
    connection.on('message', function(message) {
        if(message.type="utf8"){
            const data = JSON.parse(message.utf8Data);
            const that = this;
            auth(this, data).then((authed)=>{
                if(authed[0]){   
                    if (clients.hasOwnProperty(data.id)) { //jezeli jest juz na serwie
                        console.log(clients)
                        response.responseToClient(that,clients[data.id], map)
                    }
                    else{ //jezeli go nie ma na servie to dodaje go z bazy danych
                        row = authed[1][0];
                        clients[data.id] = {
                            'x':row.x,
                            'y':row.y,
                            'map':row.map,
                            'code':getRandomInt(0,10000)
                            //dodaj wiecej daty z msqla
                        }
                        response.responseToClient(that,clients[data.id], map)
                    }
                }
                else{
                    that.sendUTF(JSON.stringify({success:false,error:"Cant access to this character"}))
                }
            })
        }
    });
    connection.on('close', function(connection) {});
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}