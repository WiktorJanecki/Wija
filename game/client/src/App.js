import getToken from './getToken';
import engine from './game';
import link from './config/links'
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
.then((data)=> {engine.start();
function loop(){engine.loop();requestAnimationFrame(loop);}
requestAnimationFrame(loop);});

