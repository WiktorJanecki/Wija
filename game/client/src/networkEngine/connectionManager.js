class connectionManager{
    constructor(){
        this.ws = new WebSocket('ws://localhost:50505');
        this.ws.onopen = function(e,) {};
        
        this.ws.onmessage = function(event) {
            console.log(event.data);
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
        this.ws.send(data);
    }
}
export default connectionManager;