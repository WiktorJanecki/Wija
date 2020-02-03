import Rectangle from "./rectangle";

class Nickname{
    constructor(){
        this.nicknameRect = new Rectangle(0,0,0,0,"black");
    }
    render(ctx,playerX,playerY,nickname){
        ctx.globalAlpha = 0.5;
        this.nicknameRect.resize(ctx.measureText(nickname).width+8,30)
        this.nicknameRect.move(playerX+28-ctx.measureText(nickname).width/2,playerY-36)
        this.nicknameRect.render(ctx)
        ctx.globalAlpha = 1.0;
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(nickname, playerX+32-ctx.measureText(nickname).width/2, playerY-15)
    }
}
export default Nickname;