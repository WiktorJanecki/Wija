var fs = require('fs')
var BlocksID = require('./blocksID')
var bid = new BlocksID

module.exports = class WorldLoader{
    load(map){
        return new Promise((resolve,reject)=>{
            fs.readFile('./maps/'+ map +'.txt','utf8', (err, data)=>{
                let x = "";
                let y = "";
                let index = 0;
                let first = false;
                while(true){
                    if(!first){
                        if(data[index] == ";"){
                            first = true;
                        }else{
                            x = x+data[index];
                        }
                    }
                    else{
                        if(data[index] == ";"){
                            break;
                            }else{
                                y= y+data[index]
                            }
                    }
                    index++;
                }
                let tiles = new Array(parseInt(x));
                for(let i = 0; i < tiles.length ;i++){tiles[i]= new Array(parseInt(y))}
                let jindex = 0;
                let lines = [];
                data.split(/\r?\n/).forEach(function(line) {
                    lines[jindex] = line;
                    jindex++;
                });
                let firstL = true;
                jindex = 0;
                for(let i = 0;i<lines.length-1;i++){
                    let string = "";
                    jindex = 0;
                    if(firstL){
                        firstL = false;
                    }       
                    else{
                        for(let j = 0;j<lines[1].length;j++){
                            if (lines[i][j] != ';'){
                                string = string+lines[i][j];
                            }else{
                                tiles[i-1][jindex] = bid.getObject(parseInt(string));
                                jindex++;
                                string = "";
                            }
                        }
                    }
                }
                resolve(tiles);
            })
        })
    }
}