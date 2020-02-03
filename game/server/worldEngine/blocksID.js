module.exports = class BlocksID{
    getObject(id){
        const path = "../blocks/"
        switch(id){
            case 0:
                return require(path+'air.json')
                break;
            case 1:
                return require(path+'grass.json')
                break;
            case 2:
                return require(path+'wall.json')
                break;
            case 3:
                break;

        }
    }
}