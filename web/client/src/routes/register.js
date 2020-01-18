import React from 'react';

import Register from '../components/Register/Register';

class register extends React.Component{
    render(){
        return(
            <>
                <Register history={this.props.history}/>
            </>
        );
    }
}
export default register;