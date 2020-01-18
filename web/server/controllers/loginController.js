const db = require('../config/mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.register = (req,res) => {
    const data = req.body;
    let OK = true;
    let error = "";

    if(data.login == '' || data.password == '' || data.email == '' || data.repeat == '' || data.terms == ''){
        OK = false;
        error = 'Fill all fields';
    }
    if(data.password != data.repeat){
        OK = false;
        error = "Passwords doesnt match";
    }
    if(data.terms != 'true'){
        OK = false;
        error = 'Accept terms';
    }
    if(OK){
        db.query('SELECT * FROM users WHERE login = ?',[data.login], (err , row , fields) => {
            if(row.length > 0){
                OK = false;
                error = "Login has already been taken";
                res.json({error:error})
            }else{
                db.query('INSERT INTO `users`(`login`, `pass`, `email`) VALUES (?,?,?)',[data.login,bcrypt.hashSync(data.password,7),data.email],(err,row,fields)=>{
                    res.json({error:'',success:true})    
                })
            }

        })
    }else{
        res.json({error:error})
    }


}

module.exports.auth = (req,res) =>{
    jwt.verify(req.token,process.env.JWT_SECRET,(err,data)=>{
        if(err){res.sendStatus(403)}
        else{
            sendJWT({error: '',success:true},res)
        }
    })
}

module.exports.login = (req, res) => {
    const data = req.body;
    let player = {
        id:null,
        login:null,
        password:null,
        email:null,
        success:false,
        error:'',
    }
    
    if(data.login != '' && data.password != ''){
        db.query('SELECT * FROM users WHERE login = ?',[data.login], (err , row , fields) => {
            if(row == undefined){player.error = "db error";sendJWT(player,res)}
            else if(row[0] == undefined){player.error="Bad login";sendJWT(player,res)}
            else {
                const p = row[0].pass.replace(/^\$2y(.+)$/i, '$2a$1');
                bcrypt.compare(data.password, p, function(err, ress) {
                    if (ress){
                        player.success=true
                        player.id=row[0].id
                        player.login=row[0].login
                        player.password=row[0].pass
                        player.email=row[0].email
                        sendJWT(player,res)
                    }else{
                        player.error="Bad password"
                        sendJWT(player,res)
                    }
                })   
            }
        })
    }else{
        player.error = "Login is null"
        sendJWT(player,res)
    }
}
function sendJWT(data,res){
    jwt.sign(data,process.env.JWT_SECRET,{expiresIn: 1200},(err,token) =>
    {
        res.json(token)
    })
}