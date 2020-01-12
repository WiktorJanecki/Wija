var worldLoader = require('./worldLoader')

module.exports.responseToClient = function(connection, client, map){
    let tiles = null;
    for(let i =0;i<Object.keys(map).length;i++){
        if(Object.keys(map)[i]==client.map){
            tiles = map[client.map]
            sendPackage(connection, client, tiles, map)
            break;
        }
    }
    if(tiles==null){
        worldLoader.load(client.map)
        .then((data)=>{
            map[client.map] = data
            tiles=map[client.map]
            sendPackage(connection, client, tiles, map)
        })
    }
}
function sendPackage(connection, client, tiles, map){
    connection.sendUTF(JSON.stringify({
        code: client.code,
        x: client.x,
        y: client.y,
        map: tiles,
    }))
}