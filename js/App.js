const engine = {
    version:"0.00",
    canvas:null,
    ctx:null,
    map:null,
    start:function(){
        canvas = document.querySelector('canvas');
        ctx = canvas.getContext('2d');
        this.event.resize();
        this.event.addEventListeners();
        function createMap(w,h){map = new Array(w);for(let i = 0;i < map.length; i++){map[i] = new Array(h);}}
        function fillMap(){
            for(let i = 0;i < map.length; i++){
                for(let j = 0; j < map[0].length;j++){
                    map[i][j] = 1;
                }
            }
        }
        createMap(10,10);
        fillMap();
    },
    event:{
        resize:function(){canvas.width = window.innerWidth;canvas.height = window.innerHeight - 4;ctx.imageSmoothingEnabled = false;ctx.mozImageSmoothingEnabled = false;ctx.webkitImageSmoothingEnabled = false;},
        addEventListeners:function(){window.addEventListener("resize",this.resize);},
    },
    networking:function(){},
    render:function(){
        function drawRect(x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(x,y,w,h)}
        drawRect(0,0,canvas.width,canvas.height,"black");
        for(let i = 0;i < map.length; i++){
            for(let j = 0; j < map[0].length;j++){
                drawRect(i*80,j*80,80,80,"blue");
            }
        }
    },
    loop:function(){this.networking();this.render();}
};
engine.start();
function loop(){engine.loop();requestAnimationFrame(loop);}
requestAnimationFrame(loop);
