import React from 'react';

import Character from '../components/character/character'

class character extends React.Component{
    render(){
        return(
            <>
                <Character history={this.props.history}/>
            </>
        );
    }
}
export default character;