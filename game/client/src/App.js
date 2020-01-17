import getToken from './getToken';
import link from './config/links';
import Game from './core/game';
import './styles.css'

getToken();

fetch(link.websiteServer+"/auth",{
    method: 'get',    
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token'),
      },
    })
.then((res)=>{
    if(res.status===200){
        return res.json();
    }else{
        window.location.href = link.websiteClient+"/login";
    }
})
.then((data) => {
    const game = new Game();
    game.start();
    function loop(){
        game.update();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
});

