import Canvas from './canvasGenerator';
import Camera from '../renderEngine/camera';
import resize from '../renderEngine/resize';
import BlockId from '../worldEngine/blockId';
import WorldRenderer from '../renderEngine/worldRenderer';
import Player from '../renderEngine/player';
import ConnectionManager from '../networkEngine/connectionManager';

const bid = new BlockId();
const camera = new Camera();

class game{
    constructor(){
        const generatedCanvas = Canvas;
        this.cm  = new ConnectionManager((e)=>{const func = this.onMessage.bind(this, e);func(e)});
        this.canvas = generatedCanvas.canvas;
        this.ctx = generatedCanvas.ctx;
        this.ready = false;
        this.player = new Player(0,0,"",true);
        this.players = [];
        this.playersObjects = [];
        this.sendTimer = setInterval(()=>{const func = this.sendPackage.bind(this);func()},1000)

    }
    start(){
        window.addEventListener('resize',()=>{resize(this.canvas);camera.resetCamera()});
        this.cm.send(JSON.stringify({
            "token":localStorage.getItem('token'),
            "id":localStorage.getItem('character'),
        }))
    }
    update(){
        camera.prepare(this.ctx); 
        if(this.ready){
            this.worldRenderer.render(this.ctx,camera.getCameraX(),camera.getCameraY());
            camera.update(this.player.getX(),this.player.getY(),this.ctx);
            this.player.render(this.ctx);
            for(let i = 0;i<this.playersObjects.length;i++){
                this.playersObjects[i].render(this.ctx);
            }
        }
    }
    onMessage(e){
        this.response = JSON.parse(e);
         if(this.response.players.length != this.players.length+1)
         {
            this.players = []
            for(let player of this.response.players){ // robi arraya z graczami
                this.players.push(player);
            }
            for(let player of this.players){ // usuwa samego siebie
                if(player.nickname == this.response.nickname){
                    this.players.splice(this.players.indexOf(player),1)
                }
            }
            this.playersObjects = [];
            for(let player of this.players){
                this.playersObjects.push(new Player(player.x,player.y,player.nickname, false))
            }           
         }
        let i = 0;
        for(let player of this.players){
            this.playersObjects[i].teleport(parseInt(this.response.players.find((element)=>{if(element.nickname == this.playersObjects[i].nickname)return element;}).x),parseInt(this.response.players.find((element)=>{if(element.nickname == this.playersObjects[i].nickname)return element;}).y))
            i++;
        }
        if(!this.ready){
            this.worldRenderer= new WorldRenderer(this.response.map)
            this.player.teleport(this.response.x,this.response.y)
            this.player.dx = this.response.x * 64
            this.player.dy = this.response.y * 64
            this.player.nickname = this.response.nickname;
        }
        this.ready = true;
        if(this.player.x!= this.response.x || this.player.y!=this.response.y){
            this.player.x = this.response.x;
            this.player.y = this.response.y;
        }
    }
    sendPackage(){
        this.cm.send(JSON.stringify({
            "token":localStorage.getItem('token'),
            "id":localStorage.getItem('character'),
            "code":this.response.code,
            "steps":this.player.getSteps(),
        }))
        this.player.resetSteps();
    }
}
export default game;