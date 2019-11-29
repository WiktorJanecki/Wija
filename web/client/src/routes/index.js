import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-size: 50px;
    color: black;
    font-weight:bold;
    text-decoration: none;
    &:hover{
        color:grey;
    }
`;

class index extends React.Component{
    render(){
        return(
            <>
                <h1 style={{textAlign: 'center'}}>Strona Główna</h1>
                <hr/>
                <div style={{width:'100%',textAlign: 'center'}}>
                <StyledLink className="return" to="/login">LOGIN</StyledLink>
                <br />
                <StyledLink className="return" to="/register">REGISTER</StyledLink>
                </div>
            </>
        );
    }
}
export default index;