class blockId{
    constructor(){

    }
    getPath(id){
        const path = "../../images/"
        switch(id){
            case 0:
                return path+"air.png";
                break;
            case 1:
                return path+"grass.png";
                break;
            case 2:
                return path+"wall.png";
                break;
        }
    }
}

export default blockId;