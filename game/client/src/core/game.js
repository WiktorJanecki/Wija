import Canvas from './canvasGenerator';
import Camera from '../renderEngine/camera';
import resize from '../renderEngine/resize';
import BlockId from '../worldEngine/blockId';
import WorldRenderer from '../renderEngine/worldRenderer';
import Player from '../renderEngine/player';
import ConnectionManager from '../networkEngine/connectionManager';

const bid = new BlockId();
const player = new Player();
const camera = new Camera();

class game{
    constructor(){
        const generatedCanvas = Canvas;
        this.cm  = new ConnectionManager((e)=>{const func = this.onMessage.bind(this, e);func(e)});
        this.worldRenderer;
        this.canvas = generatedCanvas.canvas;
        this.ctx = generatedCanvas.ctx;
        this.ready = false;

    }
    start(){
        window.addEventListener('resize',()=>{resize(this.canvas)});
        this.cm.send(JSON.stringify({
            "token":localStorage.getItem('token'),
            "id":localStorage.getItem('character'),
        }))
    }
    update(){
        camera.prepare(this.ctx); 
        if(this.ready){this.worldRenderer.render(this.ctx);}
        camera.update(player.getX(),player.getY(),this.ctx);
        player.render(this.ctx);
        
    }
    onMessage(e){
        this.response = JSON.parse(e);
        this.ready = true;
        this.worldRenderer= new WorldRenderer(this.response.map)
    }
}
export default game;