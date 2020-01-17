class connectionManager{
    constructor(messageCallback){
        this.ws = new WebSocket('ws://localhost:50505');
        this.ws.onopen = function(e,) {};
        
        this.ws.onmessage = function(event) {
            messageCallback(event.data);
        };
        
        this.ws.onclose = function(event) {
            if (event.wasClean) {
                alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            }
            else {
                alert('[close] Connection died');
            }
        };
        
        this.ws.onerror = function(error) {
            alert(`[error] ${error.message}`);
        }
    }
    send(data){
        if(this.ws.readyState == 1){
            this.ws.send(data);
        }else{
            const that = this;
            setTimeout(()=>{that.send(data)},500)

        }
    }
}
export default connectionManager;