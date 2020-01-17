class player{
    constructor(x,y){
        this.image = new Image();
        this.image.src = "../../images/player.png";
        this.x = x;
        this.y = y;
        this.steps = [];
        this.dx = this.x*64;
        this.dy = this.y*64;
        this.cooldown = 0.5;
        setInterval(()=>{this.cooldown-=0.125},100)
        setInterval(()=>{        
            if(this.dx/64<=this.x){this.dx++;}
            if(this.dx/64>=this.x){this.dx--;}
            if(this.dy/64>=this.y){this.dy--;}
            if(this.dy/64<=this.y){this.dy++;}
        },5.8125)
        window.addEventListener("keydown",(e)=>{
                if(e.keyCode === 87){//W
                    this.w = true;
                }
                if(e.keyCode === 83){//S
                    this.s = true;
                }
                if(e.keyCode === 65){//A
                    this.a = true;
                }
                if(e.keyCode === 68){//D
                    this.d = true;
                }
        });
        window.addEventListener("keyup",(e)=>{
            if(e.keyCode === 87){//W
                this.w = false;
            }
            if(e.keyCode === 83){//S
                this.s = false;
            }
            if(e.keyCode === 65){//A
                this.a = false;
            }
            if(e.keyCode === 68){//D
                this.d = false;
            }
    });
    }
    render(ctx){
        if(this.w){this.move(0,-1)}
        if(this.s){this.move(0,1)}
        if(this.a){this.move(-1,0)}
        if(this.d){this.move(1,0)}

        ctx.drawImage(this.image,this.dx,this.dy,64,64);
    }
    move(x,y){
        if(this.cooldown<0){
            this.x+=x;
            this.y+=y;
            this.cooldown = 0.5;
            if(y == 0){
                if(x>0){
                    this.steps.push('r')
                    
                }else{
                    this.steps.push('l')
                    
                }
            }
            else{
                if(y>0){
                    this.steps.push('d')
                    
                }else{
                    this.steps.push('u')
                    
                }
            }
        }
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getSteps(){
        return this.steps;
    }
    resetSteps(){
        this.steps = [];
    }
    teleport(x,y){
        this.x = x;
        this.y = y;
        this.dx = x*64;
        this.dy = y*64;
    }
}
export default player;