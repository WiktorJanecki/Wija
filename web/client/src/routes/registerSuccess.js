import React from 'react';

import RegisterSuccess from '../components/Register/RegisterSuccess';

class register extends React.Component{
    render(){
        return(
            <>
             <RegisterSuccess history={this.props.history}/>
            </>
        );
    }
}
export default register;