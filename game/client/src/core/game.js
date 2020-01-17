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
        this.worldRenderer;
        this.player;
        this.canvas = generatedCanvas.canvas;
        this.ctx = generatedCanvas.ctx;
        this.ready = false;
        this.player = new Player(0,0);
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
            }
    }
    onMessage(e){
        this.response = JSON.parse(e);
        if(!this.ready){
            this.worldRenderer= new WorldRenderer(this.response.map)
            this.player.teleport(this.response.x,this.response.y)
            //camera.move(-30,200); here
        }
        this.ready = true;
        if(this.player.x!= this.response.x || this.player.y!=this.response.y){
            this.player.x = this.response.x;
            this.player.y = this.response.y;
        }
        console.log(this.response)
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