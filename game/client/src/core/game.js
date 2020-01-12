import Canvas from './canvasGenerator';
import Camera from '../renderEngine/camera';
import resize from '../renderEngine/resize';
import BlockId from '../worldEngine/blockId';
import WorldRenderer from '../renderEngine/worldRenderer';
import Player from '../renderEngine/player';
import ConnectionManager from '../networkEngine/connectionManager';

import world from '../../worlds/village';

const bid = new BlockId();
const worldRenderer = new WorldRenderer(world);
const player = new Player();
const camera = new Camera();
const cm = new ConnectionManager();

class game{
    constructor(){
        const generatedCanvas = Canvas;
        this.canvas = generatedCanvas.canvas;
        this.ctx = generatedCanvas.ctx;
    }
    start(){
        window.addEventListener('resize',()=>{resize(this.canvas)});
        cm.send(JSON.stringify({
            "token":localStorage.getItem('token'),
            "id":localStorage.getItem('character'),
        }))
    }
    update(){
        camera.prepare(this.ctx);
        worldRenderer.render(this.ctx);
        camera.update(player.getX(),player.getY(),this.ctx);
        player.render(this.ctx);
    }
}
export default game;