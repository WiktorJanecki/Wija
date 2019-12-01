class Tile{
    constructor(x,y,path){
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = path;
    }
    render(ctx){
        ctx.drawImage(this.image,this.x*64,this.y*64,64,64);
    }
    renderAndMove(ctx,xpos,ypos){
        ctx.drawImage(this.image,this.x*64+xpos,this.y*64+ypos,64,64);
    }
}
export default Tile;