import React from 'react';
import styled from 'styled-components';
import decode from '../../ext/jwt-decode';
import link from '../../config/link';

const StyledContainer = styled.form`
    display:grid;
    grid-template-columns:1fr minmax(300px,1fr) 1fr;
`;
const StyledSexContainer = styled.div`
    grid-column: 2/3;
    border-bottom: 1px solid black;
    padding:15px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
`;
const StyledClassContainer = styled.div`
    grid-column: 2/3;
    border-bottom: 1px solid black;
    padding:15px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
`;
const StyledNameInput = styled.input`
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
    display: inline-block;
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
const StyledButton = styled.button`
    grid-column: 2/3;
    font-size:20px;
    border:none;
    background-color: ${({theme})=>theme.color.danger};
    border-radius:50px;
    padding:15px;
    color:white;
    margin-top:20px;
    &:first-of-type{
        background-color:${({theme})=>theme.color.primary};
    }
`;
const StyledClassName = styled.div`
    display:inline-block;
    position:absolute;
    top: 2px;
`;
const StyledNameContainer = styled.div`
    grid-column: 2/3;
    position:relative;
    &:nth-child(-n+3){
        grid-column: 1/2;
        &:nth-child(1){grid-row: 1/2;}
        &:nth-child(2){grid-row: 2/3;}
        &:nth-child(3){grid-row: 3/4;}
    }
`;
const StyledNameSContainer = styled.div`
    grid-column: 1/2;
    position:relative;
    &:last-child{
        grid-column: 2/3;
    }
`;
const StyledH1 = styled.h1`
    text-align:center;
`;
class NewCharacter extends React.Component{
    state={
        error:"",
    }
    componentDidMount(){
        if(localStorage.getItem('token') === null){
            this.props.history.push('/login');
        }
        const form = document.querySelector('.form');
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            fetch(link.websiteServer+"/character",{
                method: 'post',    
                body: JSON.stringify({
                    name:document.querySelector('.name').value,
                    class:document.querySelector('input[name=class]:checked') !== null ? document.querySelector('input[name=class]:checked').value : "",
                    sex:document.querySelector('input[name=sex]:checked') !== null ? document.querySelector('input[name=sex]:checked').value : '',
                }), //works
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
            .then(data => decode(data))
            .then(data => this.setState({error: data.error,success:data.success}))
            .then(()=>this.forceUpdate())
            .then(()=>{if(this.state.success){this.props.history.push('/panel')}});
        });
    }
    render(){
        let error = "";
        if(this.state.error==""){error="";}
        else if(this.state.error=="Some fields are empty"){error="Wypełnij wszystkie pola";}
        else if(this.state.error=="This character already exist"){error="Postać o takiej nazwie już istnieje :/";}
        else if(this.state.error=="Form values are invalid"){error="Ktoś zhackował htmela :D";}
        return(
            <>
                <StyledH1>Tworzenie postaci:</StyledH1>
                <StyledContainer className="form">
                    <StyledNameInput className="name" name="name" placeholder="Wpisz nazwę postaci" />
                    <StyledClassContainer>
                        <StyledNameContainer><StyledRadio type="radio" className='class'  name="class" value="1"/><StyledClassName>Klasa1</StyledClassName></StyledNameContainer>
                        <StyledNameContainer><StyledRadio type="radio" className='class' name="class" value="2"/><StyledClassName>Klasa2</StyledClassName></StyledNameContainer>
                        <StyledNameContainer><StyledRadio type="radio" className='class' name="class" value="3"/><StyledClassName>Klasa3</StyledClassName></StyledNameContainer>
                        <StyledNameContainer><StyledRadio type="radio" className='class' name="class" value="4"/><StyledClassName>Klasa4</StyledClassName></StyledNameContainer>
                        <StyledNameContainer><StyledRadio type="radio" className='class' name="class" value="5"/><StyledClassName>Klasa5</StyledClassName></StyledNameContainer>
                        <StyledNameContainer><StyledRadio type="radio" className='class' name="class" value="6"/><StyledClassName>Klasa6</StyledClassName></StyledNameContainer>
                    </StyledClassContainer>
                    <StyledSexContainer>
                    <StyledNameSContainer><StyledRadio type="radio" className='sex' name="sex" value="m"/><StyledClassName>Mężczyzna</StyledClassName></StyledNameSContainer>
                    <StyledNameSContainer><StyledRadio type="radio" className='sex' name="sex" value="f"/><StyledClassName>Kobieta</StyledClassName></StyledNameSContainer>
                    </StyledSexContainer>
                    <StyledButton className="submit" type="submit">Stwórz</StyledButton>
                    <StyledButton onClick={()=>{this.props.history.push('/panel')}}>Wróć</StyledButton>
                    <span style={{color: 'red',textAlign: 'center',gridColumnStart: '2',marginTop: '20px'}}>{error}</span>
                </StyledContainer>
            </>
        );
    }
}
export default NewCharacter;