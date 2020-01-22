const db = require('../config/mysql')

module.exports = class saver{
    constructor(){

    }
    save(clients){
        for(let client in clients){
            const id = clients[client].id
            const x = clients[client].x
            const y = clients[client].y
            const map = clients[client].map
            queryPromise('UPDATE `characters` SET `x`=?,`y`=?,`map`=? WHERE `id`=?',[x,y,map,id])
        }
    }
}
function queryPromise(str, params) { 
    return new Promise((resolve, reject) => {
      db.query(str, params, (err, result, fields) => {
        if (err) reject(err); 
        resolve(result);
      })
    })
}