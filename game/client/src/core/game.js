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
            camera.update(this.player.getX(),this.player.getY(),this.ctx);
            for(let i = 0;i <= 10;i++){
                if(this.worldRenderer.layer == i){this.worldRenderer.render(this.ctx,camera.getCameraX(),camera.getCameraY());}
                if(this.player.layer == i){this.player.render(this.ctx);}
                if(this.player.nicknameRect.layer == i){this.player.nicknameRect.render(this.ctx,this.player.dx,this.player.dy,this.player.nickname);}
                for(let j = 0;j<this.playersObjects.length;j++){
                    if(this.playersObjects[j].layer == i){this.playersObjects[j].render(this.ctx);}
                    if(this.playersObjects[j].nicknameRect.layer == i){this.playersObjects[j].nicknameRect.render(this.ctx,this.playersObjects[j].dx,this.playersObjects[j].dy,this.playersObjects[j].nickname);}
                }
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
            for(let player of this.players){//robi obiekty z graczami
                this.playersObjects.push(new Player(player.x,player.y,player.nickname, false))
            }           
         }
        let i = 0;
        for(let player of this.players){ //tepa wszystkich graczy do ich pozycji
            this.playersObjects[i].teleport(parseInt(this.response.players.find((element)=>{if(element.nickname == this.playersObjects[i].nickname)return element;}).x),parseInt(this.response.players.find((element)=>{if(element.nickname == this.playersObjects[i].nickname)return element;}).y))
            i++;
        }
        if(!this.ready){ //inicjalizuje świat
            this.worldRenderer= new WorldRenderer(this.response.map)
            this.player.teleport(this.response.x,this.response.y)
            this.player.dx = this.response.x * 64
            this.player.dy = this.response.y * 64
            this.player.nickname = this.response.nickname;
            this.player.tiles = this.worldRenderer.tiles;
        }
        this.ready = true;
        if(this.player.x!= this.response.x || this.player.y!=this.response.y){ //tepa gracza jezeli hackował
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