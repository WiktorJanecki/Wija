import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-size:30px;
    text-decoration:none;
    color:black;
    font-weight:bold;
    position:absolute;
    bottom:20px;
    &:hover{
        color:grey;
    }

`;
const StyledContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

class login extends React.Component{
    render(){
        return(
            <StyledContainer>
                <LoginForm history={this.props.history} />
            </StyledContainer>
        );
    }
}
export default login;