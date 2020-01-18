import React from 'react';
import getParams from '../../ext/get-params'
import parse from '../../ext/jwt-decode'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import link from '../../config/link';

const StyledReturnButton = styled(Link)`
    font-size:20px;
    padding:15px;
    grid-column: 2/3;
    background-color: crimson;
    color:white;
    text-decoration:none;
    border-radius:50px;  
    text-align:center;
`;
const StyledContainer = styled.div`
    display:grid;
    grid-template-columns:1fr minmax(300px, 1fr) 1fr;
    /* text-align:center; */
`;

const StyledCharacterItem = styled.div`
    grid-column: 2/3;
    padding:15px;
    border-bottom: 1px solid black;
    &:last-of-type{
        margin-bottom:30px;
    }
`;


let char = [];

class character extends React.Component{
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
        .then(data => char=data)
        .then(()=>{})
        .then(()=> this.forceUpdate());
    }
    
    render(){
        let character = [];
        if(char.error == "Bad Id"){character[0]="Postać nie istnieje";}
        else{
            char.map((v)=>{
                if(v.id == getParams().id)
                {
                    character = v;
                   
                }
            });
            if(character.length !== undefined){
                character[0] = 'Postać nie istnieje';
            }
        }   
        
        return(
            <StyledContainer>
            {
                Object.values(character).map((e,i)=>{
                return <StyledCharacterItem  key={i}>{Object.keys(character)[i]} : {e}</StyledCharacterItem>;
                })
            }
            <StyledReturnButton to="/panel">Wróć</StyledReturnButton>
            </StyledContainer>
        );
    }
}
export default character;