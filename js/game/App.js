const engine = {
    version:"0.00",
    canvas:null,
    ctx:null,
    map:null,
    nickname:"Wigtor", //PHP AUTH NUMBER!!!
    player:null,
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
    networking:{
        socket:new WebSocket("ws://localhost:50505"),
        use:function(){        
            this.socket.onopen = event =>{
               this.socket.send(engine.nickname);
            }
            this.socket.onmessage = event =>{
                try {
                    var json = JSON.parse(event.data);
                    player = json;
                  } catch (e) {}
            }
            this.socket.onclose = event =>{
                console.log("Connection closed");
            }
            this.socket.onerror = event =>{//DELETE
                console.error("Connection error:"+event);
            }
            if(this.socket.readyState == 3){
                createSocket();
            }
            function createSocket(){
                engine.networking.socket = new WebSocket("ws://localhost:50505");
            }

        }
    },
    render:{
        drawRect:function(x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(x,y,w,h)},
        use:function(){
            this.drawRect(0,0,canvas.width,canvas.height,"black");
            for(let i = 0;i < map.length; i++){
                for(let j = 0; j < map[0].length;j++){
                    this.drawRect(i*80,j*80,80,80,"blue");
                }
            }
        }
    },
    loop:function(){this.networking.use();this.render.use();}
};
engine.start();
function loop(){engine.loop();requestAnimationFrame(loop);}
requestAnimationFrame(loop);
