import Rectangle from './rectangle';

class camera{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.cameraX = 0;
        this.cameraY = 0;
        this.speed = 2.4;
        this.bg = new Rectangle(-2,-2,30000,30000,"black");
    }
    prepare(ctx){
        this.bg.render(ctx);
        this.bg.move(this.cameraX-5,this.cameraY-5);
        this.bg.resize(this.cameraX+window.innerWidth+2000,this.cameraY+window.innerHeight+2000);
    }
    use(ctx){   
        ctx.translate(this.x,this.y);
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
    update(playerX,playerY,ctx){            
        if(playerX*64 > this.cameraX  + ((window.innerWidth/2) -32)) {
            this.move(-this.speed, 0);
            this.cameraX += this.speed;
            this.use(ctx);
        }
        if(playerX*64 < this.cameraX  + ((window.innerWidth/2) -32)) {
            this.move(this.speed, 0);
            this.cameraX -= this.speed;
            this.use(ctx);
        }
        if(playerY*64 > this.cameraY + ((window.innerHeight/2) -32)){
            this.move(0,-this.speed);
            this.cameraY += this.speed;
            this.use(ctx);
        }
        if(playerY*64 < this.cameraY  + ((window.innerHeight/2) -32)){
            this.move(0,this.speed);
            this.cameraY -= this.speed;
            this.use(ctx);
        }
    }
    getCameraX(){
        return this.cameraX;
    }
    getCameraY(){
        return this.cameraY;
    }
}
export default camera;