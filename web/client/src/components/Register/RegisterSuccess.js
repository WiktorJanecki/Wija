import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledP = styled.p`
    text-align:center;
    font-size:40px;
    grid-column: 2/3;
`;
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

class RegisterSuccess extends React.Component{
    render(){
        return(
            <StyledContainer>
                <StyledP>Zarejestrowano pomyślnie</StyledP>
                <StyledReturnButton to="/">WRÓĆ</StyledReturnButton>
            </StyledContainer>
        );
    }

}

export default RegisterSuccess;