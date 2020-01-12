var WebSocketServer = require('websocket').server;
var http = require('http');
var worldLoader = require('./worldLoader')

const auth = require('./auth')

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
                        sendData(that,clients[data.id])
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

function sendData(connection, client){
    let tiles = null;
    for(let i =0;i<Object.keys(map).length;i++){
        if(Object.keys(map)[i]==client.map){
            tiles = map[client.map]
            connection.sendUTF(JSON.stringify({
                code: client.code,
                x: client.x,
                y: client.y,
                map: tiles,
            }))
            break;
        }
    }
    if(tiles==null){
        worldLoader.load(client.map)
        .then((data)=>{
            map[client.map] = data
            tiles=map[client.map]//here
            connection.sendUTF(JSON.stringify({
                code: client.code,
                x: client.x,
                y: client.y,
                map: tiles,
            }))
        })
    }

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}