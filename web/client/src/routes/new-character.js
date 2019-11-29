import React from 'react';

import NewCharacter from '../components/character/newCharacter';

class newCharacter extends React.Component{
    render(){
        return(
            <>
                <NewCharacter history={this.props.history}/>
            </>
        );
    }
}
export default newCharacter;