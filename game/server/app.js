var WebSocketServer = require('websocket').server;
var http = require('http');

const Authorizator = require('./networkEngine/authorizator')
const Response = require('./networkEngine/response')
const getRandomInt = require('./ext/getRandomInt')
const Saver = require('./networkEngine/saver')

const clients = {};
const map = {};

var server = http.createServer(function(request, response) {});


server.listen(50505, function() { });
wsServer = new WebSocketServer({
  httpServer: server
});

const saver = new Saver()
const stdin = process.openStdin();

stdin.addListener("data", function(d) {
    if(d.toString().trim() == 'save')
    {
        console.log('SAVING...')
        saver.save(clients);

    }else{
        console.log('Cannot recognize '+d.toString().trim()+' command!');
    }
  });

const authorizator = new Authorizator()

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    const response = new Response(connection);

    connection.on('message', function(message) {
        if(message.type="utf8"){
            const data = JSON.parse(message.utf8Data);
            
            if (clients.hasOwnProperty(data.id)) { //jezeli jest juz na serwie
                if(parseInt(data.code) > 1){
                    response.sendPackage(data, clients, map);
                }else{
                    authorizator.auth(data).then((informationFromDataBase)=>{
                        if(informationFromDataBase[0]){   
                            if (clients.hasOwnProperty(data.id)) { //jezeli jest juz na serwie
                                response.sendPackage(data, clients, map);
                            }
                            else{ //jezeli go nie ma na servie to dodaje go z bazy danych                    
                                row = informationFromDataBase[1];
                                clients[data.id] = {
                                    id:row.id,
                                    x:row.x,
                                    y:row.y,
                                    map:row.map,
                                    nickname:row.nickname,
                                    code:getRandomInt(50,10000),
                                    //dodaj wiecej daty z msqla
                                }
                                response.sendPackage(data, clients, map);
                            }
                        }  
                        else{
                            connection.sendUTF(JSON.stringify({success:false,error:"Cant access to this character"}))
                        }                
                    })
                }
            }
            else{
                authorizator.auth(data).then((informationFromDataBase)=>{
                    if(informationFromDataBase[0]){   
                        if (clients.hasOwnProperty(data.id)) { //jezeli jest juz na serwie
                            response.sendPackage(data, clients, map);
                        }
                        else{ //jezeli go nie ma na servie to dodaje go z bazy danych                    
                            row = informationFromDataBase[1];
                            clients[data.id] = {
                                id:row.id,
                                nickname:row.nickname,
                                x:row.x,
                                y:row.y,
                                map:row.map,
                                code:getRandomInt(50,10000),
                                //dodaj wiecej daty z msqla
                            }
                            response.sendPackage(data, clients, map);
                        }
                    }  
                    else{
                        connection.sendUTF(JSON.stringify({success:false,error:"Cant access to this character"}))
                    }                
                })
            }
        }
    })
})
