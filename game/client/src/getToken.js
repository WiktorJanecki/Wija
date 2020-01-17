function getToken(){
    const cookies = document.cookie.split(';');
    for(let i = 0;i<cookies.length;i++){
        const cookie = cookies[i].split('=');
        if(cookie[0].trimLeft() == 'character'){
            localStorage.setItem('character',cookie[1]);
        }
        if(cookie[0].trimLeft() == 'token'){
            localStorage.setItem('token',cookie[1]);
        }
    }
}
export default getToken;

