var worldLoader = require('./worldLoader')

module.exports.responseToClient = function(connection, client, map, datat){
    let tiles = null;
    for(let i =0;i<Object.keys(map).length;i++){
        if(Object.keys(map)[i]==client.map){
            tiles = map[client.map]
            sendPackage(connection, client, tiles, map, datat)
            break;
        }
    }
    if(tiles==null){
        worldLoader.load(client.map)
        .then((data)=>{
            map[client.map] = data
            tiles=map[client.map]
            sendPackage(connection, client, tiles, map, datat)
        })
    }
}
function sendPackage(connection, client, tiles, map, datat){
    if(datat.steps !== undefined){
        let x = client.x;
        let y = client.y;
        for(step of datat.steps){
            if(step == "u"){y--;}
            else if(step == "d"){y++;}
            else if(step == "l"){x--;}
            else if(step == "r"){x++;}
            else{
                sendPackageSecond(connection, client, tiles, map, client.x, client.y, datat)
            }
        }
        sendPackageSecond(connection, client, tiles, map,x,y, datat)
    }else{
        sendPackageSecond(connection, client, tiles, map, client.x, client.y, datat)
    }
}
function sendPackageSecond(connection, client, tiles, map, x, y, datat){
    if(datat.steps == undefined){
        client.lastPackage = Date.now();
        connection.sendUTF(JSON.stringify({
            code: client.code,
            x:x,
            y:y,
            map: tiles,
        }))
    }else{
        if(Date.now()-client.lastPackage < 800 || datat.steps.length > 2){
            console.log('hacekr')

        }else{
            client.x = x
            client.y = y
            client.lastPackage = Date.now();
            connection.sendUTF(JSON.stringify({
                code: client.code,
                x:x,
                y:y,
                map: tiles,
            }))
        }
    }

}