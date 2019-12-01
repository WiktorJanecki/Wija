class blockId{
    constructor(){

    }
    getPath(id){
        const path = "../../images/"
        switch(id){
            case 0:
                return path+"tile2.png";
                break;
            case 1:
                return path+"tile.png";
                break;
            case 2:
                return path+"";
                break;
        }
    }
}

export default blockId;