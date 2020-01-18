const jwt = require('jsonwebtoken')
const db = require('../config/mysql')

module.exports.getCharacter = (req,res) =>{
    jwt.verify(req.token,process.env.JWT_SECRET,(err,data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            db.query('SELECT * FROM `characters` WHERE `owner-id` = ?',[req.params.id],(err,row,fields)=>{
                if(row[0] === undefined){res.json({error: "Bad Id"})}
                else if(row[0]['owner-id'] == data.id){
                    res.json(row)
                }else{
                    res.sendStatus(403)
                }
            })
        }
    })
}
module.exports.createCharacter = (req,res) =>{
    let obj = {
        error:'',
    }
    jwt.verify(req.token,process.env.JWT_SECRET,(err,data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            if(req.body.name != '' && req.body.class != '' && req.body.sex != '' && 
               req.body.name !== undefined && req.body.class !== undefined && req.body.sex !== undefined){
                if(isFormGood(req.body.name, req.body.class, req.body.sex)){
                    db.query('SELECT * FROM `characters` WHERE `nickname` = ?',[req.body.name],(err,row,fields)=>{
                        if(row[0] === undefined){
                            db.query('INSERT INTO `characters`(`nickname`, `owner-id`,`sex`, `class`) VALUES (?,?,?,?)',[req.body.name,data.id,req.body.sex,req.body.class],(err,row,fields)=>{sendJWT({error: '', success: true})})
                        }
                        else if(row[0] !== undefined){
                            sendJWT({error: 'This character already exist'})
                        }
                    })
                }else{
                    sendJWT({error: 'Form values are invalid'})
                }
            }
            else{
                obj.error = 'Some fields are empty'
                sendJWT(obj);
            }
        }
        function sendJWT(data){
            jwt.sign(data,process.env.JWT_SECRET,{expiresIn: 1200},(err,token) =>
            {
                res.json(token)
            })
        }
        function isFormGood(){
            const classes = ['1','2','3','4','5','6'];
            const sexes = ['m','f']
            let cl = 0;
            let se = 0;
            for(let i = 0;i<classes.length;i++){
                if(arguments[1] == classes[i]){
                    cl++;
                }
            }
            for(let i = 0;i<sexes.length;i++){
                if(arguments[2] == sexes[i]){
                    se++;
                }
            }
            if(se == 0 || cl == 0){return false}
            else{return true};
        }
    })
} 