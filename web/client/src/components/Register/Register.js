import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import links from '../../config/link'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(300px,1fr) 1fr;
`;
const StyledReturnButton = styled(Link)`
    font-size:20px;
    padding:15px;
    grid-column: 2/3;
    border:none;
    background-color: crimson;
    color:white;
    text-decoration:none;
    border-radius:50px;  
    text-align:center;
`;
const StyledH1 = styled.h1`
    text-align:center;
`;
const StyledInput = styled.input`
    grid-column: 2/3;
    padding:15px;
    font-size:20px;
    outline:none;
    background-color: ${({theme})=> theme.color.bg};
    text-align:center;
    border:none;
    border-bottom:1px solid black;
`;
const StyledRadio = styled.input`
    margin:15px;
    margin-left:20px;
    appearance: none;
    border-radius:50px;
    border: 1px solid black;
    width:20px;
    margin-right:15px;
    height:20px;
    outline:none;
    transition: border-width 0.2s ease-in-out;
    &:checked{
        border:5px solid black;
    }
    &:hover{
        border:3px solid black;
        &:checked{
            border:5px solid black;
        }
    }
`;
const StyledTermsLink = styled(Link)`
    text-decoration:none;
    color:black;
`;
const StyledRadioGroup = styled.div`
    grid-column: 2/3;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: -10px;
    margin-top:50px;

`;
const StyledHr = styled.hr`
    grid-column: 2/3;
    width:100%;
    margin-bottom:0px;
    &:last-of-type{margin-bottom:20px;}
`;
const StyledSubmitButton = styled.button`
    grid-column: 2/3;
    font-size:20px;
    padding:15px;
    grid-column: 2/3;
    background-color: ${({theme})=>theme.color.primary};
    color:white;
    margin-bottom:20px;
    text-decoration:none;
    border:none;
    border-radius:50px;  
    text-align:center;
`;
const StyledError = styled.span`
    grid-column: 2/3;
    color:red;
    text-align:center;
    margin-top:20px;
`;

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            error:'',
        }
    }
    componentDidMount(){
        const submit = document.querySelector(".submit");
        submit.onclick = ()=>{
            const login = document.querySelector("[placeholder='Login']");//.value
            const email = document.querySelector("[placeholder='Email']");
            const pass = document.querySelector("[placeholder='Hasło']");
            const repeat = document.querySelector("[placeholder='Powtórz hasło']");
            const radio = document.querySelector("[type='radio']"); //.checked
            
            const api=links.websiteServer+"/register";
            fetch(api,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:'{"login":"'+login.value+'","password":"'+pass.value+'","repeat":"'+repeat.value+'","terms":"'+radio.checked+'","email":"'+email.value+'"}',
            }).then((res)=>{
                if(res.status!==200){
                }else{
                    return res.json();
                }
            })
            .then((data)=>{
                if(data.error != ""){
                    this.setState({error:data.error});
                }else{
                    this.props.history.push("/register/success");
                }
            });
            
            
        };
    }
    render(){
        let error = "";
        if(this.state.error == "Accept terms"){error = "Zaakceptuj Regulamin"}
        if(this.state.error == "Fill all fields"){error = "Wypełnij wszystkie pola"}
        if(this.state.error == "Passwords doesnt match"){error = "Hasła nie pasują"}
        if(this.state.error == "Login has already been taken"){error = "Podany login jest już zajęty"}
        return(
            <> 
            <StyledH1>Tworzenie konta:</StyledH1>
                <Container>
                    <StyledInput placeholder="Login"/>
                    <StyledInput type="email" placeholder="Email"/>
                    <StyledInput placeholder="Hasło" type="password"/>
                    <StyledInput placeholder="Powtórz hasło" type="password"/>
                    <StyledRadioGroup><StyledRadio type="radio" value="radio"/><StyledTermsLink>Akceptuję regulamin</StyledTermsLink></StyledRadioGroup>
                    <StyledHr />
                    <StyledSubmitButton type="submit" className="submit">Zarejestruj się</StyledSubmitButton>
                    <StyledReturnButton to = "/">Wróć</StyledReturnButton> 
                    <StyledError>{error}</StyledError>
                </Container>
            </>
        );
    }
}
export default Register;