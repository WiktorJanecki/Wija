import Rectangle from './rectangle';
let cameraX = 0,cameraY = 0;
let speed = 2.4;

class camera{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.bg = new Rectangle(-2,-2,30000,30000,"black");
    }
    prepare(ctx){
        this.bg.render(ctx);
        this.bg.move(cameraX-5,cameraY-5);
        this.bg.resize(cameraX+window.innerWidth+2000,cameraY+window.innerHeight+2000);
    }
    use(ctx){   
        ctx.translate(this.x,this.y);
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
    update(playerX,playerY,ctx){            
        if(playerX*64 > cameraX  + ((window.innerWidth/2) -32)) {
            this.move(-speed, 0);
            cameraX += speed;
            this.use(ctx);
        }
        if(playerX*64 < cameraX  + ((window.innerWidth/2) -32)) {
            this.move(speed, 0);
            cameraX -= speed;
            this.use(ctx);
        }
        if(playerY*64 > cameraY + ((window.innerHeight/2) -32)){
            this.move(0,-speed);
            cameraY += speed;
            this.use(ctx);
        }
        if(playerY*64 < cameraY  + ((window.innerHeight/2) -32)){
            this.move(0,speed);
            cameraY -= speed;
            this.use(ctx);
        }
    }
}
export default camera;