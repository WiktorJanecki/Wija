const WorldLoader = require('../worldEngine/worldLoader');
const PlayerObject = require('../templates/playerObject')
const worldLoader = new WorldLoader();

module.exports = class Response{
    constructor(connection){
        this.connection = connection;
        this.playerObject = new PlayerObject;
    }
    getTiles(client, map){
        let tiles = null;
        for(let i =0;i<Object.keys(map).length;i++){
            if(Object.keys(map)[i]==client.map){
                tiles = map[client.map]
                return tiles;
            }
        }
        if(tiles==null){
            worldLoader.load(client.map)
            .then((data)=>{
                map[client.map] = data
                tiles=map[client.map]
                return tiles;
            })
        }
    }
    analyzeSteps(data, client){
        if(data.steps !== undefined){
            let x = client.x;
            let y = client.y;
            for(let step of data.steps){
                if(step == "u"){y--;}
                else if(step == "d"){y++;}
                else if(step == "l"){x--;}
                else if(step == "r"){x++;}
                else{
                    this.connection.sendUTF(JSON.stringify({success:false,error:"Invalid steps format"}))
                }
            }
            return [x,y]
        }else{
            this.connection.sendUTF(JSON.stringify({success:false,error:"Steps are empty"}))
        }
    }
    sendPackage(data, clients, map){
        const client = clients[data.id]
        if(data.steps != undefined){
            if(Date.now()-client.lastPackage < 800 || data.steps.length > 2){
                this.playerObject.lastPackage = Date.now();
                this.connection.sendUTF(JSON.stringify({success:false,error:"Package send speed is too fast"}))
            }
            else{
                const cords = this.analyzeSteps(data, client);
                this.setPlayerObject(client, map);
                this.playerObject.x = cords[0]
                this.playerObject.y = cords[1]
                let arr = [];
                for(let player in clients){
                    if(clients[player].map == client.map){
                        arr.push({
                            x:clients[player].x,
                            y:clients[player].y,
                            nickname:clients[player].nickname,
                        })
                    }
                }
                this.playerObject.players = arr;
                this.playerObject.lastPackage = Date.now();
                this.connection.sendUTF(JSON.stringify(this.playerObject))
                this.setClientObject(clients, data);
            }
        }
        else{
            this.setPlayerObject(client, map)
            let arr = [];
            for(let player in clients){
                if(clients[player].map == client.map){
                    arr.push({
                        x:clients[player].x,
                        y:clients[player].y,
                        nickname:clients[player].nickname,
                    })
                }
            }
            this.playerObject.players = arr;
            this.connection.sendUTF(JSON.stringify(this.playerObject))
            this.setClientObject(clients, data);
        }   

    }
    setPlayerObject(client, map){
        this.playerObject.nickname = client.nickname;
        this.playerObject.code = client.code;
        this.playerObject.map = this.getTiles(client, map);
        this.playerObject.x = client.x;
        this.playerObject.y = client.y;
    }
    setClientObject(clients, data){
        clients[data.id].x = this.playerObject.x;
        clients[data.id].y = this.playerObject.y;
        clients[data.id].lastPackage = this.playerObject.lastPackage;
    }
}