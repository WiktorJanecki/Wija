const fetch = require('node-fetch');
const db = require('../config/mysql');
const link = require('../config/link');
const decoder = require('../ext/jwt-decode');

module.exports = class Authorizator{
    async auth(data){
        const api = link.websiteServer+"/auth";
        let dbres = null;
        let boolek = false;
        let booleka = false;
        await queryPromise("SELECT * FROM `characters` WHERE `owner-id`=?",[decoder(data.token).id]).then((row) =>{
            dbres = row;
            let x = false;
            for(let player of dbres){
                if(player['id'] == data.id){
                   x=true;
                   dbres = player;
                }
            }
            if(x){
                boolek = true;
            }else{
                boolek = false;
            }
        })
        await fetch(api,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+data.token,
            },
        })
        .then((res)=>{
            if(res.status===403){
                booleka = false;
            }else{
                booleka = true
            }
        });
        if(boolek&&booleka){return [true,dbres]}else{return [false,null]}
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