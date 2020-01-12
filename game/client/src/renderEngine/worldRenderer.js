import Tile from '../renderEngine/tile';
import BlockId from '../worldEngine/blockId';

const bid = new BlockId();
const tile = new Tile(0,0,bid.getPath(0));

class worldRenderer{
    constructor(world){
        this.world = world;
        this.tiles = new Array(this.world.length);
        for(let i = 0; i< this.world[0].length;i++){this.tiles[i]= new Array(this.world[0].lenght)}
        for(let i = 0;i <this.world.length;i++){
            for(let j = 0;j <this.world[0].length;j++){
                console.log()
                this.tiles[i][j] = new Tile(i,j,bid.getPath(parseInt(this.world[i][j])));
            }
         }
    }
    render(ctx,camX,camY){
         for(let i = 0;i <this.world.length;i++){
            for(let j = 0;j <this.world[0].length;j++){
                if(this.tiles[i][j].getX()*64 > camX - 64 && this.tiles[i][j].getX()*64 < window.innerWidth + camX){
                    if(this.tiles[i][j].getY()*64 > camY - 64 && this.tiles[i][j].getY()*64 < window.innerHeight + camY){
                        this.tiles[i][j].render(ctx);
                    }
                }

            }
         }
    }
}
export default worldRenderer;