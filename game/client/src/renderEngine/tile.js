class Tile{
    constructor(x,y,path){
        this.x = x;
        this.y = y;
        this.layer = 0;
        this.image = new Image();
        this.image.src = path;
        this.collision;
    }
    render(ctx){
        ctx.drawImage(this.image,this.x*64,this.y*64,64,64);
    }
    renderAndMove(ctx,xpos,ypos){
        ctx.drawImage(this.image,this.x*64+xpos,this.y*64+ypos,64,64);
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}
export default Tile;