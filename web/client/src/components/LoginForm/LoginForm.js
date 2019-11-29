import React,{Component} from 'react';
import './LoginForm.scss';
import link from '../../config/link';
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            inputLogin:'',
            inputPassword:'',
            token:'',
            player:{
                error:""
            },
        }   
        this.login = this.login.bind(this);     
    }
    login(state){  
        fetch(link.websiteServer+'/login',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:'{"login":"'+this.state.inputLogin+'","password":"'+this.state.inputPassword+'"}'
        })
        .then(res => res.json())
        .then(data=>this.setState({token:data}))
        .then(()=>this.parseJwt(this.state.token))
        .then(data => this.setState({player: data}))
        .then(()=> localStorage.setItem('token',this.state.token))
        .then(()=>{if(this.state.player.success){this.props.history.push('/panel')}});
        
        

        //IF state.player.success == tru itp
    }
    setInputPassword(e){
        this.setState({inputPassword: e.target.value});
    }
    setInputLogin(e){
        this.setState({inputLogin: e.target.value});
    }
    parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    
    render(){
        let error;
        if(this.state.player.error === ""){error = ""}
        if(this.state.player.error === "Bad password"){error = "Złe hasło!"}
        if(this.state.player.error === "Bad login"){error = "Złe hasło!"}
        if(this.state.player.error === "Login is null"){error = "Proszę wypełnić wszystkie pola!"}
        if(this.state.player.error === "db error"){error = 'Błąd bazy danych! Skontaktuj się z administratorem'}
        return(
            <div className="container">
                <h2>Logowanie</h2>
                <form>
                    <input onChange={(e) => this.setInputLogin(e)} name="login" placeholder="Nazwa użytkownika" className="text"></input>
                    <input onChange={(e) => this.setInputPassword(e)} name="password" value={this.state.inputPassword} type="password" placeholder="Hasło" className="text"></input>
                    <button onClick={() => this.login()} type="button" className="submit">Zaloguj</button>
                    
                </form>
                <span className="error" style={{color: "red"}}>{error}</span>
            </div>
        );
    }
};
export default LoginForm;