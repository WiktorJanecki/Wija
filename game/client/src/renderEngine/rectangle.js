class rectangle{
    constructor(xpos,ypos,width,height,style){
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.style = style;
    }
    render(ctx){
        ctx.fillStyle = this.style;
        ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    }
    move(xpos,ypos){
        this.xpos = xpos;
        this.ypos = ypos;
    }
    resize(width,height){
        this.width = width;
        this.height = height;
    }
}
export default rectangle;