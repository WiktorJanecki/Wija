import React, {Component} from 'react';
import parse from '../ext/jwt-decode';
import styled from 'styled-components';
import link from '../config/link';

const StyledCharacterItem = styled.div`
    grid-column-start: 2;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    padding: 15px;
    display:flex;
    input{
        margin-right:15px;
        appearance: none;
        border: 1px solid black;
        border-radius: 500px;
        outline: none;
        transition: border-width 0.2s ease-in-out;
        width:20px;
        height:20px;
        &:checked{
            border: 5px solid black; 
        }
        &:hover{
            border: 3px solid black; 
            &:checked{
                border: 5px solid black; 
            }
        }
    }
`;
const StyledCharacterList = styled.div`
   display:grid;
   text-align:center;
   grid-template-columns:1fr minmax(300px,1fr) 1fr;
`;
const StyledButton = styled.button`
    grid-column: 2/3;
    outline:none;
    border:none;
    border-radius: 50px;
    padding:15px;
    color:white;
    font-size:20px;
    margin-top:20px;
    background-color: ${({theme}) => theme.color.secondary};
    &:nth-of-type(2) {
        margin-top:100px;
        background-color:  ${({ theme }) => theme.color.primary};}
    &:last-of-type {background-color:  ${({ theme }) => theme.color.danger};}
`;
const StyledNewCharacterButton = styled.button`
    grid-column: 2/3;
    padding:15px;
    border-radius:50px;
    background-color: ${({theme}) => theme.color.secondary};
    border:none;
    outline:none;
    font-size:20px;
    color:white;
    position:relative;
    margin-bottom:20px;
`;

class Panel extends Component{
    state={
        characters:''
    }
    componentDidMount(){
        if(localStorage.getItem('token') === null){
            this.props.history.push('/login');
        }
        const api=link.websiteServer+"/character/"+parse(localStorage.getItem('token')).id;
        fetch(api,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token'),
              },
        })
        .then((res)=>{
            if(res.status===403){
                this.props.history.push('/login');
            }else{
                return res.json();
            }
        })
        .then(data => this.setState({characters: data}))
        .then(()=> this.forceUpdate());
    }
    logout(){
        localStorage.clear();
        window.location.reload();
    }
    render(){
        const name = parse(localStorage.getItem('token')).login;
        if(typeof this.state.characters == 'object'){
            return (
                <>
                    <h2>Witaj {name}!</h2>
                    <StyledCharacterList>
                            {
                                this.state.characters.error ? (<StyledCharacterItem style={{textAlign: 'center',fontSize: '20px', fontWeight: 'bold',display:'block'}}>BRAK POSTACI</StyledCharacterItem>) : (
                                this.state.characters.map((e,i)=> (
                                    <StyledCharacterItem key={i}><input type="radio" name="char" id="" value={e.id}/>{e.nickname}</StyledCharacterItem>
                                )))
                            }
                        <br />
                        <StyledNewCharacterButton onClick={() => this.props.history.push("new-character")}>Nowa postać</StyledNewCharacterButton>
                        <br />
                        <StyledButton onClick={()=>{
                            if(document.querySelector("input[name=char]:checked") !== null){
                                document.cookie = "token="+ localStorage.getItem('token');
                                document.cookie = "character="+document.querySelector("input[name=char]:checked").value;
                                window.location.href = link.gameClient;
                            }else{
                                this.setState({err: "Wybierz postać!"});
                            }
                        }}>Graj</StyledButton>
                        <StyledButton onClick={()=> {if(!document.querySelector('input[name=char]:checked')){this.setState({err : 'Wybierz postać!'});
                        }else{window.location.href = '/character?id='+document.querySelector("input[name=char]:checked").value}}}>Zobacz</StyledButton>
                        <StyledButton onClick={()=>this.logout()}>Wyloguj</StyledButton>
                        <span style={{color: 'red',gridColumnStart: '2',marginTop: '20px'}}>{this.state.err}</span>
                    </StyledCharacterList>
                </>
            );
        }
        else{return <></>;}
    }
}
export default Panel;